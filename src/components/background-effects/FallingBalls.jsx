import React, { useState, useRef, useEffect } from 'react'
import Matter from 'matter-js'

const FallingBalls = () => {
    const sceneRef = useRef(null)
    const engineRef = useRef(Matter.Engine.create())
    const groundRef = useRef(null)
    const leftWallRef = useRef(null)
    const rightWallRef = useRef(null)
    const ballsRef = useRef([])

    const ballsAmount = 50
    const scrollSpeedMultiplier = 0.05

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

        const createWalls = () => {
            leftWallRef.current = Bodies.rectangle(0, window.innerHeight / 2, 10, window.innerHeight * 10, { isStatic: true })
            rightWallRef.current = Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 10, window.innerHeight * 10, { isStatic: true })
            groundRef.current = Bodies.rectangle(
                window.innerWidth / 2, 
                window.innerHeight + 50, 
                window.innerWidth, 
                100, 
                { isStatic: true, }
            )

            Composite.add(engine.world, [groundRef.current, leftWallRef.current, rightWallRef.current])
        }

        createWalls()

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
                    restitution: 1,
                }
            )
            
            ballsRef.current.push(ball)
            Composite.add(engine.world, [ball])
        }

        for (let i = 0; i < ballsAmount; i++) {
            createBall()
        }

        Engine.run(engine)
        Render.run(render)

        const runner = Runner.create()
        Runner.run(runner, engine)

        let lastScrollY = window.scrollY
        let scrollVelocity = 0

        const handleScroll = () => {
            const currentScrollY = window.scrollY
            scrollVelocity = currentScrollY - lastScrollY
            lastScrollY = currentScrollY

            ballsRef.current.forEach(ball => {
                Body.setVelocity(ball, { 
                    x: ball.velocity.x, 
                    y: ball.velocity.y - scrollVelocity * scrollSpeedMultiplier 
                })
            })
        }

        const handleResize = () => {
            render.canvas.width = window.innerWidth
            render.canvas.height = window.innerHeight

            Body.setPosition(groundRef.current, { x: window.innerWidth / 2, y: window.innerHeight })
            Body.setPosition(leftWallRef.current, { x: 0, y: window.innerHeight / 2 })
            Body.setPosition(rightWallRef.current, { x: window.innerWidth, y: window.innerHeight / 2 })

            Body.setVertices(groundRef.current, Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 100).vertices)
            Body.setVertices(leftWallRef.current, Bodies.rectangle(0, window.innerHeight / 2, 10, window.innerHeight).vertices)
            Body.setVertices(rightWallRef.current, Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 10, window.innerHeight).vertices)
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)

//         const handleScroll = () => {
//             const scrollY = window.scrollY
//             const visibleHeight = window.innerHeight
//             const newGround = scrollY + visibleHeight
// 
//             Body.setPosition(groundRef.current, { x: window.innerWidth / 2, y: newGround + 50 })
//         }
// 
//         window.addEventListener('scroll', handleScroll)

        return () => {
            Render.stop(render)
            Runner.stop(runner)
            Composite.clear(engine.world, false)
            Engine.clear(engine)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return ( 
        <div 
            ref={sceneRef} 
            style={{overflow: 'hidden'}}
        />
    )
}

export default FallingBalls