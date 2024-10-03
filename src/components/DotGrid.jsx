import { canvas } from 'framer-motion/client'
import React, { useEffect, useRef } from 'react'

const DotGrid = () => {
    const canvasRef = useRef(null)
    const maxDotSize = 7
    const minDotSize = 3
    const dots = []
    const dotCount = 10

    const createDots = (canvas) => {
        const spacingX = canvas.width / dotCount
        const spacingY = canvas.height / dotCount

        for (let i = 0; i < dotCount; i++) {
            for (let j = 0; j < dotCount; j++) {
                const dot = {
                    x: i * spacingX + spacingX / 2 + Math.random() * 100,
                    y: j * spacingY + spacingY / 2 + Math.random() * 100,
                    dx: Math.random() * 2 - 1,
                    dy: Math.random() * 2 - 1,
                    size: Math.random() * (maxDotSize - minDotSize) + minDotSize,
                }
                dots.push(dot)
            }
        }
    }

    const updateDots = (ctx, canvas) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        dots.forEach((dot) => {
            dot.x += dot.dx
            dot.y += dot.dy

            ctx.beginPath()
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
            ctx.fill()

            if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1
            if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1
        })
        requestAnimationFrame(() => updateDots(ctx, canvas))
    }

    const resizeCanvas = (canvas) => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        resizeCanvas(canvas)
        
        createDots(canvas)
        updateDots(ctx, canvas)

        const handleResize = () => {
            resizeCanvas(canvas)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            dots.length = 0
            createDots(canvas)
        }

        window.addEventListener('resize', () => handleResize())

        return () => {
            window.removeEventListener('resize', () => handleResize())
        }
    }, [])

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    )
}

export default DotGrid