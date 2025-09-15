import { useEffect, useRef } from 'react'

const CursorTrail = () => {
  const trailRef = useRef(null)
  const lastMoveTime = useRef(0)

  useEffect(() => {
    const trail = trailRef.current
    if (!trail) return

    // Check if device is mobile for reduced effects
    const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (isMobile) {
      return // Disable cursor trail on mobile for performance
    }

    let mouseX = 0
    let mouseY = 0
    let trailElements = []

    // Create fewer trail elements for better performance
    const trailCount = 8
    for (let i = 0; i < trailCount; i++) {
      const element = document.createElement('div')
      element.className = 'fixed pointer-events-none w-1.5 h-1.5 rounded-full opacity-0 transition-all duration-200 ease-out'
      element.style.zIndex = '9999'
      element.style.willChange = 'transform, opacity'
      trail.appendChild(element)
      trailElements.push(element)
    }

    const colors = [
      '#06b6d4', // cyan-500
      '#8b5cf6', // violet-500
      '#ec4899', // pink-500
      '#3b82f6', // blue-500
    ]

    // Throttled mouse move handler
    const handleMouseMove = (e) => {
      const now = Date.now()
      if (now - lastMoveTime.current < 16) return // 60fps max
      lastMoveTime.current = now

      mouseX = e.clientX
      mouseY = e.clientY

      trailElements.forEach((element, index) => {
        const delay = index * 30 // Reduced delay
        const randomColor = colors[index % colors.length] // Use consistent colors
        
        setTimeout(() => {
          element.style.left = mouseX + 'px'
          element.style.top = mouseY + 'px'
          element.style.backgroundColor = randomColor
          element.style.opacity = '0.6'
          element.style.transform = `scale(${1 - index * 0.08})`
          
          setTimeout(() => {
            element.style.opacity = '0'
            element.style.transform = `scale(0.3)`
          }, 150)
        }, delay)
      })
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      trailElements.forEach(element => element.remove())
    }
  }, [])

  return <div ref={trailRef} className="fixed inset-0 pointer-events-none" />
}

export default CursorTrail
