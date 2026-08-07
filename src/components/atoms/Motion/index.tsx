'use client'

import { useEffect } from 'react'

const REVEAL_SELECTOR = '.reveal, .fade, .from-left, .from-right, .slide-x, .rule'
const COUNTER_DURATION = 900

/**
 * Drives every entrance animation on the page.
 *
 * Markup ships in its resting position and only becomes hidden once this
 * component adds `.js` to the root element. Without JavaScript nothing is
 * translated or faded out, so the whole page stays readable.
 *
 * Only `transform` and `opacity` are animated, and no element ever changes the
 * space it occupies, so scrolling cannot shift the layout.
 */
const Motion = () => {
  useEffect(() => {
    const root = document.documentElement
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // With reduced motion requested we never hide anything in the first place.
    if (prefersReducedMotion) return

    root.classList.add('js')

    const targets = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR))
    const counters = Array.from(document.querySelectorAll<HTMLElement>('[data-count-to]'))

    const runCounter = (element: HTMLElement) => {
      const target = Number(element.dataset.countTo)
      if (!Number.isFinite(target)) return

      const start = performance.now()

      const tick = (now: number) => {
        const progress = Math.min((now - start) / COUNTER_DURATION, 1)
        // ease-out-expo, the same curve the rest of the page uses
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

        element.textContent = String(Math.round(target * eased))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const element = entry.target as HTMLElement
          element.classList.add(element.classList.contains('reveal') ? 'is-revealed' : 'is-in')

          if (element.dataset.countTo) runCounter(element)

          // Every animation plays once — re-triggering on the way back up turns
          // scrolling into a slideshow.
          observer.unobserve(element)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.01 }
    )

    ;[...targets, ...counters].forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      root.classList.remove('js')
    }
  }, [])

  return null
}

export default Motion
