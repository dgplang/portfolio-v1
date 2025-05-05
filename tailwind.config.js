  /** @type {import('tailwindcss').Config} */
  export default {
        content: ["./dist/**/*.{html,js}"],
        theme: {
          extend: {
            boxShadow: {
              'solid': '-8px 8px 0 0 cyan-50', // Solid black shadow, adjust color and size
            },
          },
        },
        plugins: [],
}