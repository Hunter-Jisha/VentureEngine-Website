/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: 
    {
        extend: 
        {
            fontFamily:
            {
                sans: ["Noto Sans", "ui-sans-serif", "system-ui"],
                fancy: ["koulen", "ui-sans-serif", "system-ui"]
            }
        },
    },
    plugins: [],
}

