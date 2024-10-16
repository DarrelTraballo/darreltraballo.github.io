/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "primary-bg": "#001F3F",
                "secondary-bg": "#003B5C",
                "tertiary-bg": "#206E37",

                // background gradient colors
                "gradient-start": "#044321",
                "gradient-end": "#7EFC28",

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
