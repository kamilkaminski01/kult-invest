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
 * Pinning is gated on `html.js`, which the Motion component adds only when the
 * visitor has not asked for reduced motion. Without JavaScript, with reduced
 * motion, or below 1024px the CSS leaves the steps stacked vertically and this
 * component does nothing.
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

    const canPin = window.matchMedia('(min-width: 1024px)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    let frame = 0
    let travel = 0
    let distance = 0
    let active = false

    const measure = () => {
      active = canPin.matches && !reducedMotion.matches
      travel = outer.offsetHeight - window.innerHeight
      distance = track.scrollWidth - track.clientWidth

      if (!active) {
        track.style.transform = ''
        bar.style.transform = ''
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
    canPin.addEventListener('change', onResize)
    reducedMotion.addEventListener('change', onResize)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      canPin.removeEventListener('change', onResize)
      reducedMotion.removeEventListener('change', onResize)
      track.style.transform = ''
      bar.style.transform = ''
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
