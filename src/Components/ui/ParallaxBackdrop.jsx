import { useEffect, useRef } from 'react'

export default function ParallaxBackdrop() {
  const container = useRef(null)
  const lastMoveTime = useRef(0)

  useEffect(() => {
    const el = container.current
    if (!el) return

    // Check if device is mobile for reduced effects
    const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (isMobile) {
      return // Disable parallax on mobile for performance
    }

    const onMove = (e) => {
      const now = Date.now()
      if (now - lastMoveTime.current < 16) return // 60fps max
      lastMoveTime.current = now

      const rect = el.getBoundingClientRect()
      const cx = rect.width / 2
      const cy = rect.height / 2
      const dx = (e.clientX - rect.left - cx) / cx
      const dy = (e.clientY - rect.top - cy) / cy
      const layers = el.querySelectorAll('[data-parallax]')
      
      layers.forEach((node) => {
        const depth = parseFloat(node.getAttribute('data-depth') || '0.06')
        const tx = -dx * depth * 12 // Reduced movement
        const ty = -dy * depth * 8  // Reduced movement
        node.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
      })
    }

    el.addEventListener('mousemove', onMove, { passive: true })
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={container} className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div 
        data-parallax 
        data-depth="0.02" 
        className="absolute -top-20 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-500/15 to-indigo-500/8 blur-3xl" 
        style={{ willChange: 'transform' }}
      />
      <div 
        data-parallax 
        data-depth="0.06" 
        className="absolute top-12 right-[-100px] w-[320px] h-[320px] rounded-full bg-gradient-to-br from-purple-500/15 to-pink-400/8 blur-2xl" 
        style={{ willChange: 'transform' }}
      />
      <div 
        data-parallax 
        data-depth="0.04" 
        className="absolute bottom-[-60px] left-20 w-[480px] h-[480px] rounded-full bg-gradient-to-tl from-indigo-500/8 to-purple-500/8 blur-3xl" 
        style={{ willChange: 'transform' }}
      />
    </div>
  )
}
