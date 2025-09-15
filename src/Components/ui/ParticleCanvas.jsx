import { useEffect, useRef, useCallback } from 'react'

export default function ParticleCanvas({ density = 8 }) {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const rafRef = useRef(null)
  const lastTime = useRef(0)

  // Throttle particle creation for better performance
  const throttledSpawn = useCallback((x, y) => {
    const now = Date.now()
    if (now - (throttledSpawn.lastSpawn || 0) > 50) { // Throttle to 20fps max
      throttledSpawn.lastSpawn = now
      const color = `hsl(${Math.floor(Math.random() * 60) + 200} 70% 60%)` // Limit color range for consistency
      particles.current.push({ 
        x, y, 
        vx: (Math.random() - 0.5) * 0.8, 
        vy: (Math.random() - 0.5) * 0.8, 
        r: 3 + Math.random() * 4, 
        life: 1, 
        color 
      })
      if (particles.current.length > density * 3) particles.current.shift()
    }
  }, [density])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Check if device is mobile for reduced effects
    const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const actualDensity = isMobile ? Math.max(2, density / 3) : density

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    function onMove(e) {
      if (isMobile) return // Disable on mobile for performance
      
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      throttledSpawn(x, y)
    }

    function animate(currentTime) {
      if (currentTime - lastTime.current < 16) { // 60fps max
        rafRef.current = requestAnimationFrame(animate)
        return
      }
      lastTime.current = currentTime

      ctx.clearRect(0, 0, width, height)
      
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.98
        p.vy *= 0.98
        p.life -= 0.02
        
        if (p.life <= 0) {
          particles.current.splice(i, 1)
          continue
        }

        const alpha = Math.max(0, Math.min(1, p.life))
        const size = Math.max(0.5, p.r * p.life)
        
        ctx.save()
        ctx.globalAlpha = alpha * 0.6
        ctx.fillStyle = p.color
        ctx.shadowBlur = isMobile ? 0 : 8
        ctx.shadowColor = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
      
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [density, throttledSpawn])

  return (
    <canvas 
      ref={canvasRef} 
      className="pointer-events-none fixed inset-0 z-40" 
      style={{ willChange: 'transform' }}
    />
  )
}
