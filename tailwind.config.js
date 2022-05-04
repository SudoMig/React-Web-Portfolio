module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sunset': "url('./img/sunset.jpg')",
        'flow': "url('./img/Flow.jpg')",
        'idea': "url('./img/idea.jpg')",
        'spiral': "url('./img/spiral.jpg')",
        'buildings': "url('./img/buildings.jpg')",
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