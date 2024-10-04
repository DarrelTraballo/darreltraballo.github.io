import React, { useEffect, useRef } from 'react';

const DelaunayBackground = () => {
    const canvasRef = useRef(null);
    const maxDotSize = 7;
    const minDotSize = 3;
    const dotSpeed = 0.25;
    const dots = [];
    const dotCount = 15;
    const spawnOffset = 500
    const bgColor = '#0D745A'
    const gradientColor = '#50AC47'

    const randomBetween = (min, max) => Math.random() * (max - min) + min

    // Hex to RGB conversion
    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    };

    // Linear interpolation between two numbers
    const lerp = (a, b, t) => a + (b - a) * t;

    // Linear interpolation for colors
    const lerpColor = (color1, color2, t) => {
        const r = Math.round(lerp(color1.r, color2.r, t));
        const g = Math.round(lerp(color1.g, color2.g, t));
        const b = Math.round(lerp(color1.b, color2.b, t));
        return `rgb(${r}, ${g}, ${b})`;
    };

    // Calculate the average Y position (centroid) of a triangle
    const getCentroid = (triangle) => {
        const avgX = (triangle[0].x + triangle[1].x + triangle[2].x) / 3;
        const avgY = (triangle[0].y + triangle[1].y + triangle[2].y) / 3;
        return { x: avgX, y: avgY };
    };

    // Create the gradient for the triangle
    const getTriangleGradientColor = (triangle, canvasHeight) => {
        const { y } = getCentroid(triangle);
        const clampedY = Math.max(0, Math.min(y, canvasHeight));
        const t = clampedY / canvasHeight; // normalize y to range 0 to 1
        const color1 = hexToRgb(bgColor);
        const color2 = hexToRgb(gradientColor);
        return lerpColor(color1, color2, t);
    };

    // Calculate circumcircle determinant
    // 2. Implement edge case handling in circumcircle function
    const circumcircle = (p1, p2, p3) => {
        const A = p2.x - p1.x;
        const B = p2.y - p1.y;
        const C = p3.x - p1.x;
        const D = p3.y - p1.y;
        const E = A * (p2.x + p1.x) + B * (p2.y + p1.y);
        const F = C * (p3.x + p1.x) + D * (p3.y + p1.y);
        const G = 2 * (A * (p3.y - p2.y) - B * (p3.x - p2.x));
        
        // Handle edge case where G is very close to zero
        if (Math.abs(G) < 1e-10) return null;
        
        const centerX = (D * E - B * F) / G;
        const centerY = (A * F - C * E) / G;
        const radius = Math.sqrt(
            (centerX - p1.x) ** 2 + (centerY - p1.y) ** 2
        );
        return { x: centerX, y: centerY, r: radius };
    };

    // Check if point is inside circumcircle
    const pointInCircumcircle = (point, triangle) => {
        const { x, y, r } = circumcircle(triangle[0], triangle[1], triangle[2]);
        if (!x || !y || !r) return false;
        const dist = Math.sqrt((point.x - x) ** 2 + (point.y - y) ** 2);
        return dist < r;
    };

    const isPointInBounds = (point, canvas) => {
        const margin = 100; // Adjust as needed
        return point.x >= -margin && point.x <= canvas.width + margin &&
               point.y >= -margin && point.y <= canvas.height + margin;
    };

    // Create Delaunay triangles
    const delaunayTriangulation = (points, canvas) => {
        const superTriangle = [
            { x: -15000, y: -15000 },
            { x: 25000, y: -15000 },
            { x: 15000, y: 25000 }
        ];
        let triangles = [superTriangle];

        points.forEach((point) => {
            let badTriangles = [];
            triangles.forEach((triangle) => {
                if (pointInCircumcircle(point, triangle)) {
                    badTriangles.push(triangle);
                }
            });

            let polygon = [];
            badTriangles.forEach((triangle) => {
                triangle.forEach((edge, i) => {
                    let shared = false;
                    badTriangles.forEach((other) => {
                        if (other === triangle) return;
                        if (
                            other.includes(edge) &&
                            other.includes(triangle[(i + 1) % 3])
                        ) {
                            shared = true;
                        }
                    });
                    if (!shared) polygon.push([edge, triangle[(i + 1) % 3]]);
                });
            });

            badTriangles.forEach((triangle) => {
                const index = triangles.indexOf(triangle);
                if (index > -1) triangles.splice(index, 1);
            });

            polygon.forEach((edge) => {
                triangles.push([edge[0], edge[1], point]);
            });
        });

        triangles = triangles.filter(
            (t) => !superTriangle.some((p) => t.includes(p)) &&
                   t.every(p => isPointInBounds(p, canvas))
        );
        return triangles;
    };

    const createDots = (canvas) => {
        const expandedWidth = canvas.width + spawnOffset * 2;
        const expandedHeight = canvas.height + spawnOffset * 2;
        const spacingX = expandedWidth / dotCount;
        const spacingY = expandedHeight / dotCount;

        for (let i = 0; i < dotCount; i++) {
            for (let j = 0; j < dotCount; j++) {
                const dot = {
                    x: i * spacingX + spacingX / 2 + randomBetween(-spawnOffset, 100 - spawnOffset),
                    y: j * spacingY + spacingY / 2 + randomBetween(-spawnOffset, 100 - spawnOffset),
                    dx: randomBetween(-dotSpeed, dotSpeed),
                    dy: randomBetween(-dotSpeed, dotSpeed),
                    size: randomBetween(minDotSize, maxDotSize),
                };
                dots.push(dot);
            }
        }

        dots.forEach(dot => {
            dot.x = Math.max(-spawnOffset, Math.min(dot.x, canvas.width + spawnOffset));
            dot.y = Math.max(-spawnOffset, Math.min(dot.y, canvas.height + spawnOffset));
        });
    };

    const drawTriangles = (ctx, triangles, canvas) => {
        triangles.forEach((triangle) => {
            const color = getTriangleGradientColor(triangle, canvas.height)
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(triangle[0].x, triangle[0].y);
            ctx.lineTo(triangle[1].x, triangle[1].y);
            ctx.lineTo(triangle[2].x, triangle[2].y);
            ctx.closePath();
            ctx.fill()
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.stroke();
        });
    };

    const updateDots = (ctx, canvas) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        dots.forEach((dot) => {
            dot.x += dot.dx;
            dot.y += dot.dy;

            if (dot.x < -spawnOffset || dot.x > canvas.width + spawnOffset) dot.dx *= -1;
            if (dot.y < -spawnOffset || dot.y > canvas.height + spawnOffset) dot.dy *= -1;
        });

        const triangles = delaunayTriangulation(dots, canvas);
        drawTriangles(ctx, triangles, canvas);

        dots.forEach((dot) => {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            ctx.fill();
        });

        requestAnimationFrame(() => updateDots(ctx, canvas));
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
        updateDots(ctx, canvas);

        const handleResize = () => {
            resizeCanvas(canvas);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            dots.length = 0;
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
