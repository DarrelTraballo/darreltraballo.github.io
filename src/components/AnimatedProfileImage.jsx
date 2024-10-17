import { useState, useEffect, useRef } from 'react'

const AnimatedProfileImage = ({ toPic, fromPic, alt, className }) => {
    const [isHovering, setIsHovering] = useState(false)
    const [progress, setProgress] = useState(0)
    const timeoutRef = useRef(null)

    const transitionTime = 15000

    useEffect(() => {
        if (isHovering) {
            const startTime = Date.now()
            const animate = () => {
                const elapsedTime = Date.now() - startTime
                const newProgress = Math.min(elapsedTime / transitionTime, 1)
                setProgress(newProgress)

                if (newProgress < 1) {
                    timeoutRef.current = requestAnimationFrame(animate)
                }
            }
    
            timeoutRef.current = requestAnimationFrame(animate)
        }
        else {
            setProgress(0)
            if (timeoutRef.current) {
                cancelAnimationFrame(timeoutRef.current)
            }
        }

        return () => {
            if (timeoutRef.current) {
                cancelAnimationFrame(timeoutRef.current)
            }
        }
    }, [isHovering])

    return (
        <div 
            className="relative w-full h-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <img
                src={toPic}
                alt={alt}
                className={`w-full h-full rounded-full object-cover ${className}`}
            />
            <img
                src={fromPic}
                alt={alt}
                className={`absolute top-0 left-0 w-full h-full rounded-full object-cover transition-opacity duration-0 ${className}`}
                style={{ opacity: progress }}
            />
        </div>
    )
}

export default AnimatedProfileImage