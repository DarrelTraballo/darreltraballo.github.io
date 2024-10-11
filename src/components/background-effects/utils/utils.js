export const randomBetween = (min, max) => Math.random() * (max - min) + min

// Hex to RGB conversion
export const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
};

// Linear interpolation between two numbers
export const lerp = (a, b, t) => a + (b - a) * t;

// Linear interpolation for colors
export const lerpColor = (color1, color2, t) => {
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
export const getTriangleGradientColor = (triangle, canvasHeight, bgColor, gradientColor) => {
    const { y } = getCentroid(triangle);
    const clampedY = Math.max(0, Math.min(y, canvasHeight));
    const t = clampedY / canvasHeight; // normalize y to range 0 to 1
    const color1 = hexToRgb(bgColor);
    const color2 = hexToRgb(gradientColor);
    return lerpColor(color1, color2, t);
};

export const getDotGradientColor = (dot, canvasHeight) => {
    const { y } = dot;
    const clampedY = Math.max(0, Math.min(y, canvasHeight));
    const t = clampedY / canvasHeight; // normalize y to range 0 to 1
    const color1 = hexToRgb('#000000');
    const color2 = hexToRgb('#FFFFFF');
    return lerpColor(color1, color2, t);
}