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
    const margin = 500; // Adjust as needed
    return point.x >= -margin && point.x <= canvas.width + margin &&
            point.y >= -margin && point.y <= canvas.height + margin;
};

// Create Delaunay triangles
export const delaunayTriangulation = (points, canvas) => {
    const superTriangle = [
        { x: -20000, y: -20000 },
        { x: 30000, y: -20000 },
        { x: 20000, y: 30000 }
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