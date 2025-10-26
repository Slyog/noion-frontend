const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addBase }) {
  addBase({
    ":root": {
      "--sx-radius": "16px",
      "--sx-border": "rgba(255,255,255,0.08)",
      "--sx-surface": "rgba(11,11,12,0.9)",
      "--sx-surface-muted": "rgba(19,19,21,0.8)",
      "--sx-text": "#f4f4f5",
      "--sx-accent": "#ffd166",
    },
  });
});
