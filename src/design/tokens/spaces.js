// spaces.js

// Enum defining space keys
export const Spaces = {
    xxSmall: 'xxSmall',
    xSmall: 'xSmall',
    small: 'small',
    subMedium: 'subMedium',
    medium: 'medium',
    large: 'large',
    xLarge: 'xLarge',
    xxLarge: 'xxLarge',
    xxxLarge: 'xxxLarge',
  };
  
  // Object defining space definitions
  const SpacesDef = {
    [Spaces.xxSmall]: 8,
    [Spaces.xSmall]: 12,
    [Spaces.small]: 16,
    [Spaces.subMedium]: 20,
    [Spaces.medium]: 24,
    [Spaces.large]: 28,
    [Spaces.xLarge]: 32,
    [Spaces.xxLarge]: 36,
    [Spaces.xxxLarge]: 40,
  };
  
  // Function to get space value by key
  export function getSpace(space) {
    return SpacesDef[space];
  }
  