// fontSizes.js

// Enum defining font size keys
export const FontsSizes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  description: "description",
  descriptionSmall: "descriptionSmall",
  descriptionLarge: "descriptionLarge",
};

// Object defining font size definitions
const FontSizesDefs = {
  [FontsSizes.h1]: 40,
  [FontsSizes.h2]: 36,
  [FontsSizes.h3]: 32,
  [FontsSizes.h4]: 28,
  [FontsSizes.h5]: 24,
  [FontsSizes.h6]: 20,
  [FontsSizes.descriptionLarge]: 18,
  [FontsSizes.description]: 16,
  [FontsSizes.descriptionSmall]: 14,
};

// Function to get font size value by key
export function getFontSize(fontSize) {
  return FontSizesDefs[fontSize];
}
