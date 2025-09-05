import { useEffect, useRef } from 'react'

export default function ParticleCanvas({ density = 18 }) {
  const canvasRef = useRef(null)
  const particles = useRef([])
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    function resize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    function spawn(x, y) {
      const color = `hsl(${Math.floor(Math.random() * 360)} 80% 65%)`
      particles.current.push({ x, y, vx: (Math.random() - 0.5) * 1.2, vy: (Math.random() - 0.5) * 1.2, r: 8 + Math.random() * 8, life: 1, color })
      if (particles.current.length > density * 6) particles.current.shift()
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      // spawn a few particles
      for (let i = 0; i < 2; i++) spawn(x + (Math.random() - 0.5) * 12, y + (Math.random() - 0.5) * 12)
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i]
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.99
        p.vy *= 0.99
        p.life -= 0.017
        const alpha = Math.max(0, Math.min(1, p.life))
        ctx.beginPath()
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.08})`
        // subtle glow
        ctx.shadowBlur = 14
        ctx.shadowColor = p.color
        ctx.fillStyle = p.color
        ctx.globalAlpha = alpha * 0.9
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(0.5, p.r * p.life), 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1
        if (p.life <= 0) particles.current.splice(i, 1)
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    canvas.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [density])

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-40" />
  )
}
