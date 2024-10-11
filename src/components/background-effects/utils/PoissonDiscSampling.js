import { randomBetween } from "./utils"

const isValid = (candidate, sampleRegionSize, cellSize, radius, points, grid) => {
    const cellX = Math.floor(candidate.x / cellSize);
    const cellY = Math.floor(candidate.y / cellSize);
    const searchStartX = Math.max(0, cellX - 2);
    const searchEndX = Math.min(cellX + 2, grid.length - 1);
    const searchStartY = Math.max(0, cellY - 2);
    const searchEndY = Math.min(cellY + 2, grid[0].length - 1);

    for (let x = searchStartX; x <= searchEndX; x++) {
        for (let y = searchStartY; y <= searchEndY; y++) {
            const pointIndex = grid[x][y] - 1;
            if (pointIndex !== -1) {
                const sqrDst = (candidate.x - points[pointIndex].x) ** 2 + (candidate.y - points[pointIndex].y) ** 2;
                if (sqrDst < radius * radius) {
                    return false;
                }
            }
        }
    }
    return true;
}

export const generatePoints = (radius, sampleRegionSize, numSamplesBeforeRejection = 30) => {
    const cellSize = radius / Math.sqrt(2);

    const gridWidth = Math.ceil(sampleRegionSize.x / cellSize);
    const gridHeight = Math.ceil(sampleRegionSize.y / cellSize);
    const grid = Array(gridWidth).fill().map(() => Array(gridHeight).fill(0));

    const points = [];
    const spawnPoints = [];

    spawnPoints.push({ x: sampleRegionSize.x / 2, y: sampleRegionSize.y / 2 });

    while (spawnPoints.length > 0) {
        const spawnIndex = Math.floor(Math.random() * spawnPoints.length);
        const spawnCentre = spawnPoints[spawnIndex];
        let candidateAccepted = false;

        for (let i = 0; i < numSamplesBeforeRejection; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dir = { x: Math.sin(angle), y: Math.cos(angle) };
            const candidate = {
                x: spawnCentre.x + dir.x * randomBetween(radius, 2 * radius),
                y: spawnCentre.y + dir.y * randomBetween(radius, 2 * radius)
            };

            if (
                candidate.x >= 0 && candidate.x < sampleRegionSize.x && 
                candidate.y >= 0 && candidate.y < sampleRegionSize.y &&
                isValid(candidate, sampleRegionSize, cellSize, radius, points, grid)
            ) {
                points.push(candidate);
                spawnPoints.push(candidate);
                grid[Math.floor(candidate.x / cellSize)][Math.floor(candidate.y / cellSize)] = points.length;
                candidateAccepted = true;
                break;
            }
        }

        if (!candidateAccepted) {
            spawnPoints.splice(spawnIndex, 1);
        }
    }

    return points;
}

export const drawPoints = (points, pointSize, pointOpacity, ctx, offset = { x: 0, y: 0 }) => {
    points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x - offset.x, point.y - offset.y, pointSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pointOpacity})`;
        ctx.fill();
    });
}