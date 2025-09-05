import { useEffect, useRef } from 'react'

export default function ParallaxBackdrop() {
  const container = useRef(null)

  useEffect(() => {
    const el = container.current
    function onMove(e) {
      const rect = el.getBoundingClientRect()
      const cx = rect.width / 2
      const cy = rect.height / 2
      const dx = (e.clientX - rect.left - cx) / cx
      const dy = (e.clientY - rect.top - cy) / cy
      const layers = el.querySelectorAll('[data-parallax]')
      layers.forEach((node) => {
        const depth = parseFloat(node.getAttribute('data-depth') || '0.06')
        const tx = -dx * depth * 18
        const ty = -dy * depth * 12
        node.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
      })
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={container} className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div data-parallax data-depth="0.02" className="absolute -top-20 -left-40 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-pink-500/20 to-indigo-500/10 blur-3xl" />
      <div data-parallax data-depth="0.06" className="absolute top-12 right-[-120px] w-[420px] h-[420px] rounded-full bg-gradient-to-br from-purple-500/20 to-pink-400/10 blur-2xl" />
      <div data-parallax data-depth="0.04" className="absolute bottom-[-80px] left-28 w-[640px] h-[640px] rounded-full bg-gradient-to-tl from-indigo-500/10 to-purple-500/10 blur-3xl" />
    </div>
  )
}
