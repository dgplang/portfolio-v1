  /** @type {import('tailwindcss').Config} */
  export default {
        content: ["./dist/**/*.{html,js}"],
        theme: {
          extend: {
            boxShadow: {
              'solid': '-8px 8px 0 0 #ebf7f9', // Solid black shadow, adjust color and size
            },
          },
        },
        plugins: [],
}