// colors.js

// Enum defining color keys
export const Colors = {
  primary: 'primary',
  secondary: 'secondary',
  background: 'background',
  bg2: 'bg2'
};

// Themes object with light and dark themes
const lightTheme = {
  [Colors.primary]: "#663399",
  [Colors.secondary]: "#EFF0F3",
  [Colors.background]: "#f5f3f7",
  [Colors.bg2]: "#f5f3f7"
};

const darkTheme = {
  [Colors.primary]: "#ffffff",
  [Colors.secondary]: "#EFF0F3",
  [Colors.background]: "#1f1b37",
  [Colors.bg2]: "#1f1b37"
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

// Function to apply opacity to a hex color
function applyOpacity(hexColor, opacity) {
  hexColor = hexColor.replace(/^#/, "");

  // Parse the r, g, b values
  let bigint = parseInt(hexColor, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// Function to get color from theme
export function getColor(theme, color, opacity) {
  const hexColor = themes[theme][color];
  return opacity ? applyOpacity(hexColor, opacity) : hexColor;
}
