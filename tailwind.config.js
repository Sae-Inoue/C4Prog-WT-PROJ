/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
      './*.html',
      './index.html',
      './about.html',
      './contact.html',
      './projects.html',
      './resume.html',
      './mywork.html',
  ],
  theme: {
    colors:{
        ...colors,
      'Byzantine blue':'#334DD1',
      'Jonquil': '#FFCC14',
    },
      borderWidth:{
          DEFAULT: '1px',
          '0': '0',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
          '12':'12px',
          '16':'16px',
      },
    extend: {},
  },
  plugins: [],
};

