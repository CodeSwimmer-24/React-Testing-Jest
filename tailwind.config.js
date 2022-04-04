module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      minWidth:{
        210: "210px",
        359: "350px",
        620: "620px"
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors:{
        headingColor: '#2e2e2e',
        textColor: "#515151",
        cartNumbBg: '#e80013',
        primary: "f5f3f3"
      }
    },
  },
  plugins: [],
}
