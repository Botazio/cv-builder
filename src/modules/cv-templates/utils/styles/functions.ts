import chroma from "chroma-js";


/**
 * Merges styles together
 * 
 */
export function mergeStyles(commonStyles, componentStyles) {
  const styles = { ...commonStyles, ...componentStyles };

  return styles;
}

/**
 * Uses chroma to get the best contrasting color for a given color.
 */
export function getContrastColor(color: string) {
  const firstColor: string = 'black';
  const secondColor: string = 'white';

  const contrastFirstColor = chroma.contrast(color, firstColor);
  const contrastSecondColor = chroma.contrast(color, secondColor);

  return contrastFirstColor >= contrastSecondColor ? firstColor : secondColor;
}