/** @type {import('tailwindcss').Config} */
export default  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        slideUp: "slideUp 1s ease-out",
        scaleUp: "scaleUp 1.5s ease-in-out",  // أنيميشن تكبير الزر عند تحميل الصفحة
        bounceCustom: "bounceCustom 2s ease-in-out infinite", // أنيميشن رقص للزر
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        scaleUp: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        bounceCustom: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
plugins:[],
}