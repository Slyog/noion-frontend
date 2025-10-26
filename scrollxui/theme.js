const scrollxuiTheme = {
  colors: {
    void: "#050507",
    noir: "#0b0b0c",
    obsidian: "#131315",
    circuit: "#1f1f25",
    highlight: "#ffd166",
    highlightSoft: "#facc15",
    highlightHover: "#fde047",
    accent: "#ffdd66",
    accentDim: "#bfae4a",
    text: "#f4f4f5",
    textSubtle: "#a1a1aa",
    border: "#27272a",
  },
};

const defineScrollxUITheme = (overrides = {}) => ({
  ...scrollxuiTheme,
  ...overrides,
});

module.exports = {
  scrollxuiTheme,
  defineScrollxUITheme,
};
