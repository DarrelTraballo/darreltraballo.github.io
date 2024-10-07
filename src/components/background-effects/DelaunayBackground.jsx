import { useEffect, useRef } from 'react';
import { delaunayTriangulation } from './DelaunayTriangulation';
import { getTriangleGradientColor, randomBetween } from './utils';
import { generatePoints } from './PoissonDiscSampling';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

const DelaunayBackground = () => {
    const canvasRef = useRef(null);
    const maxDotSize = 5;
    const minDotSize = 1;
    const dotSpeed = 0.1;
    const dots = useRef([]);
    const spawnOffset = 100
    const minDirectionChangeInterval = 5000;
    const maxDirectionChangeInterval = 8000;

    const bgColor = fullConfig.theme.colors['primary-bg']
    const gradientColor = fullConfig.theme.colors['tertiary-bg']
        
    const lineOpacity = randomBetween(0, 0.25);
    const dotOpacity = randomBetween(0, 0.25);

    const createDots = (canvas) => {
        const expandedWidth = canvas.width + spawnOffset * 2;
        const expandedHeight = canvas.height + spawnOffset * 2;
        const sampleRegionSize = { x: expandedWidth, y: expandedHeight };
        const radius = 100; // Adjust this value to control the density of points

        const poissonPoints = generatePoints(radius, sampleRegionSize);
        
        dots.current = poissonPoints.map(point => ({
            x: point.x - spawnOffset,
            y: point.y - spawnOffset,
            dx: randomBetween(-dotSpeed, dotSpeed),
            dy: randomBetween(-dotSpeed, dotSpeed),
            size: randomBetween(minDotSize, maxDotSize),
            directionChangeTime: randomBetween(minDirectionChangeInterval, maxDirectionChangeInterval),
            directionChangeTimer: 0,
        }));
        
    };

    const updateDotDirection = (dot) => {
        dot.dx = randomBetween(-dotSpeed, dotSpeed);
        dot.dy = randomBetween(-dotSpeed, dotSpeed);
    };

    const drawTriangles = (ctx, triangles, canvas) => {
        triangles.forEach((triangle) => {
            const color = getTriangleGradientColor(triangle, canvas.height, bgColor, gradientColor);
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(triangle[0].x, triangle[0].y);
            ctx.lineTo(triangle[1].x, triangle[1].y);
            ctx.lineTo(triangle[2].x, triangle[2].y);
            ctx.closePath();
            ctx.fill()
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
            ctx.stroke();
        });
    };

    const drawDots = (ctx, canvas) => {
        dots.current.forEach((dot) => {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
            // ctx.fillStyle = getDotGradientColor(dot, canvas.height);
            ctx.fillStyle = `rgba(255, 255, 255, ${dotOpacity})`;
            ctx.fill();
        });
    }

    const updateDots = (ctx, canvas, deltaTime) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dots.current.forEach((dot) => {
            dot.x += dot.dx;
            dot.y += dot.dy;

            if (dot.x < -spawnOffset || dot.x > canvas.width + spawnOffset) dot.dx *= -1;
            if (dot.y < -spawnOffset || dot.y > canvas.height + spawnOffset) dot.dy *= -1;

            dot.directionChangeTimer += deltaTime;

            if (dot.directionChangeTimer >= dot.directionChangeTime) {
                updateDotDirection(dot);
                dot.directionChangeTimer = 0;
                dot.directionChangeTime = randomBetween(minDirectionChangeInterval, maxDirectionChangeInterval);
            }
        });

        const triangles = delaunayTriangulation(dots.current, canvas);
        drawTriangles(ctx, triangles, canvas);

        drawDots(ctx, canvas);

        // requestAnimationFrame(() => updateDots(ctx, canvas));
    };

    const resizeCanvas = (canvas) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        resizeCanvas(canvas);
        createDots(canvas);

        let lastTime = 0;

        const animate = (time) => {
            const deltaTime = time - lastTime;
            lastTime = time;

            updateDots(ctx, canvas, deltaTime);
            requestAnimationFrame(animate);
        }
        
        requestAnimationFrame(animate);
        // updateDots(ctx, canvas);

        const handleResize = () => {
            resizeCanvas(canvas);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            createDots(canvas);
        };

        window.addEventListener('resize', () => handleResize());

        return () => {
            window.removeEventListener('resize', () => handleResize());
        };
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default DelaunayBackground;
