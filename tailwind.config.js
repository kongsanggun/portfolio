/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/main.tsx",
    "./src/components/header.tsx",
    "./src/components/intro.tsx",
    "./src/components/me.tsx",
    "./src/components/skill.tsx",
    "./src/components/time.tsx",
    "./src/components/project.tsx",
    "./src/components/footer.tsx",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}