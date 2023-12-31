// tailwind.config.js
module.exports = {
  // other configurations...
  purge: [
    './index.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
