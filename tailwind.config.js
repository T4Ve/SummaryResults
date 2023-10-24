/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Hanken Grotesk','sans-serif']
      },
      colors:{
        LightRed: 'hsl(0, 100%, 67%)',
        TransLightRed: 'hsl(0, 100%, 67%,0.1)',
        OrangeyYellow: 'hsl(39, 100%, 56%)',
        TransOrangeyYellow: 'hsl(39, 100%, 56%,0.1)',
        GreenTeal: 'hsl(166, 100%, 37%)',
        TransGreenTeal: 'hsl(166, 100%, 37%,0.1)',
        CobaltBlue: 'hsl(234, 85%, 45%)',
        TransCobaltBlue: 'hsl(234, 85%, 45%,0.1)',
        LightSlateBlue: 'hsl(252, 100%, 67%)',
        LightRoyalBlue: 'hsl(241, 81%, 54%)',
        VioletBlue: 'hsla(256, 72%, 46%, 1)',
        PersianBlue: 'hsla(241, 72%, 46%, 0)',
        White: 'hsl(0, 0%, 100%)',
        PaleBlue: 'hsl(221, 100%, 96%)',
        LightLavender: 'hsl(241, 100%, 89%)',
        DarkGrayBlue: 'hsl(224, 30%, 27%)'
      }
    },
  },
  plugins: [],
}
