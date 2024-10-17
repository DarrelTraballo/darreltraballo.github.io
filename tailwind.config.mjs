/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "primary-bg": "#0a192f",
                "secondary-bg": "#112240",
                "hover-bg": "#233554",

                // background gradient colors
                // green
                // "gradient-start": "#044321",
                // "gradient-end": "#7EFC28",

                // blue
                "gradient-start": "#001f3f",
                "gradient-end": "#0074D9",

                "primary-font": "#ffffff",
                "secondary-font": "#9ca3af",
                "tertiary-font": "#7C8593",
                "darker-font": "#111827",
                // 'tertiary-font': '#6b7280',

                "link-color": "#60a5fa",
            },
        },
    },
    plugins: [],
}
