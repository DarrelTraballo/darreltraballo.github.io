import { useEffect, useRef } from 'react'
import { generatePoints, drawPoints } from './utils/PoissonDiscSampling'
import { randomBetween } from './utils/utils'

const TestBackground = () => {
    const canvasRef = useRef(null)
    const radius = 100
    const pointSize = 5
    const pointOpacity = 1
    const spawnMargin = 100


    const resizeCanvas = (canvas) => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        resizeCanvas(canvas);
        const sampleRegionSize = { 
            x: canvas.width + 2 * spawnMargin, 
            y: canvas.height + 2 * spawnMargin 
        };
        const points = generatePoints(radius, sampleRegionSize)
        console.log("Points Generated: ", points)

        drawPoints(points, pointSize, pointOpacity, ctx, { x: spawnMargin, y: spawnMargin })

        const handleResize = () => {
            resizeCanvas(canvas);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const newSampleRegionSize = { 
                x: canvas.width + 2 * spawnMargin, 
                y: canvas.height + 2 * spawnMargin 
            };
            const newPoints = generatePoints(radius, newSampleRegionSize);
            drawPoints(newPoints, pointSize, pointOpacity, ctx, { x: spawnMargin, y: spawnMargin });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    )

}

export default TestBackground