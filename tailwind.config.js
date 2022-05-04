module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'space': "url('./img/space.jpg')",
        'flow': "url('./img/Flow.jpg')",
        'keyboard': "url('./img/keyboard.jpg')",
        'street': "url('./img/street.jpg')",
        'buildings': "url('./img/buildings.jpg')",
        'code': "url('./img/code.jpg')",
        'city': "url('./img/city.jpg')",
        'Logo': "url('./img/Logo.jpg')"
        
      },
      height: {
        'banner': '42rem',
        'mobileBanner': '36rem',
        'doudble-grid': '36rem'
      }
    },
  },
  plugins: [],
}