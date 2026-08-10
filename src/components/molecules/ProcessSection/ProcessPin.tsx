'use client'

import { ReactNode, useEffect, useRef } from 'react'

interface ProcessPinProps {
  children: ReactNode
}

/**
 * Pins the process section and converts vertical scrolling into horizontal
 * travel across the steps, then releases the page once the last step is flush.
 *
 * The tall spacer that buys the scroll distance is sized in CSS from the step
 * count, so the height is correct on the very first paint — this never adds to
 * CLS. JavaScript only reads scroll position and writes a transform; it never
 * measures or sets anything that could trigger layout.
 *
 * Pinning is gated on `html.js`, set before the first paint and only when the
 * visitor has not asked for reduced motion. It applies at every width, phones
 * included. Without JavaScript or with reduced motion the CSS leaves the steps
 * stacked vertically and this component does nothing.
 */
const ProcessPin = ({ children }: ProcessPinProps) => {
  const outerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLOListElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    const track = trackRef.current
    const bar = barRef.current
    if (!outer || !track || !bar) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const steps = Array.from(track.children) as HTMLElement[]

    let frame = 0
    let travel = 0
    let distance = 0
    let active = false
    let activeStep = -1

    // Highlights one step at a time. Driven by progress rather than by which
    // card sits nearest an edge, so every number gets its turn — including the
    // last one, which never reaches the left edge on a wide screen.
    const setActiveStep = (index: number) => {
      if (index === activeStep) return

      steps.forEach((step, i) => {
        step.classList.toggle('process-step--active', i === index)
        if (i === index) step.setAttribute('aria-current', 'step')
        else step.removeAttribute('aria-current')
      })

      activeStep = index
    }

    const measure = () => {
      active = !reducedMotion.matches
      travel = outer.offsetHeight - window.innerHeight
      distance = track.scrollWidth - track.clientWidth

      if (!active) {
        track.style.transform = ''
        bar.style.transform = ''
        setActiveStep(-1)
      }
    }

    const render = () => {
      frame = 0
      if (!active || travel <= 0) return

      // getBoundingClientRect is read-only here and nothing below writes a
      // layout-affecting property, so this stays off the layout path.
      const progress = Math.min(Math.max(-outer.getBoundingClientRect().top / travel, 0), 1)

      track.style.transform = `translate3d(${-(progress * distance).toFixed(2)}px, 0, 0)`
      bar.style.transform = `scaleX(${progress.toFixed(4)})`
      setActiveStep(Math.round(progress * (steps.length - 1)))
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onResize = () => {
      measure()
      onScroll()
    }

    measure()
    render()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    reducedMotion.addEventListener('change', onResize)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      reducedMotion.removeEventListener('change', onResize)
      track.style.transform = ''
      bar.style.transform = ''
      setActiveStep(-1)
    }
  }, [])

  return (
    <div ref={outerRef} className="process-section__pin-outer">
      <div className="process-section__pin">
        <ol ref={trackRef} className="process-section__track">
          {children}
        </ol>
        <div className="process-section__progress">
          <div className="process-section__progress-line">
            <div ref={barRef} className="process-section__progress-bar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessPin
