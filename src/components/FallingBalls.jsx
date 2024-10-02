import React, { useState, useRef, useEffect } from 'react'
import Matter from 'matter-js'

const FallingBalls = () => {
    const sceneRef = useRef(null)
    const engineRef = useRef(Matter.Engine.create())
    const groundRef = useRef(null)

    useEffect(() => {
        const { Engine, Render, Runner, Bodies, Composite, Body } = Matter

        const engine = engineRef.current
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false,
                background: 'transparent',
            },
        })

        const leftWall = Bodies.rectangle(0, window.innerHeight / 2, 10, window.innerHeight, { isStatic: true })
        const rightWall = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 10, window.innerHeight, { isStatic: true })
        
        groundRef.current = Bodies.rectangle(
            window.innerWidth / 2, 
            window.innerHeight + 50, 
            window.innerWidth, 
            100, 
            { isStatic: true, }
        )

        Composite.add(engine.world, [groundRef.current, leftWall, rightWall])

        const createBall = () => {
            const size = Math.random() * 40 + 20
            const ball = Bodies.circle(
                Math.random() * window.innerWidth,
                -100 - Math.random() * window.innerHeight,
                size,
                {
                    render: {
                        fillStyle: `hsl(${Math.random() * 360}, 100%, 50%)`,
                    },
                    friction: 0.3,
                    restitution: 0.8,
                }
            )

            Composite.add(engine.world, [ball])
        }

        for (let i = 0; i < 50; i++) {
            createBall()
        }

        Engine.run(engine)
        Render.run(render)

        const runner = Runner.create()
        Runner.run(runner, engine)

        const handleScroll = () => {
            const scrollY = window.scrollY
            const visibleHeight = window.innerHeight
            const newGround = scrollY + visibleHeight + 50

            Body.setPosition(groundRef.current, { x: window.innerWidth / 2, y: newGround })
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            Render.stop(render)
            Runner.stop(runner)
            Composite.clear(engine.world, false)
            Engine.clear(engine)
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return ( 
        <div 
            ref={sceneRef} 
            className='absolute inset-0 -z-10'
            style={{overflow: 'hidden'}}
        />
    )
}

export default FallingBalls