import { useEffect, useRef } from 'react'

const CursorTrail = () => {
  const trailRef = useRef(null)

  useEffect(() => {
    const trail = trailRef.current
    if (!trail) return

    let mouseX = 0
    let mouseY = 0
    let trailElements = []

    // Create trail elements
    for (let i = 0; i < 20; i++) {
      const element = document.createElement('div')
      element.className = 'fixed pointer-events-none w-2 h-2 rounded-full opacity-0 transition-all duration-300 ease-out'
      element.style.zIndex = '9999'
      trail.appendChild(element)
      trailElements.push(element)
    }

    const colors = [
      '#06b6d4', // cyan-500
      '#8b5cf6', // violet-500
      '#ec4899', // pink-500
      '#f59e0b', // amber-500
      '#10b981', // emerald-500
      '#ef4444', // red-500
      '#3b82f6', // blue-500
      '#84cc16', // lime-500
    ]

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      trailElements.forEach((element, index) => {
        const delay = index * 50
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        
        setTimeout(() => {
          element.style.left = mouseX + 'px'
          element.style.top = mouseY + 'px'
          element.style.backgroundColor = randomColor
          element.style.opacity = '0.8'
          element.style.transform = `scale(${1 - index * 0.05})`
          
          setTimeout(() => {
            element.style.opacity = '0'
            element.style.transform = `scale(0.5)`
          }, 200)
        }, delay)
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      trailElements.forEach(element => element.remove())
    }
  }, [])

  return <div ref={trailRef} className="fixed inset-0 pointer-events-none" />
}

export default CursorTrail
