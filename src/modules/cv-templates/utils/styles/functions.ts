import { StyleSheet } from '@react-pdf/renderer';
import chroma from "chroma-js";
import { PropStyles } from './interfaces/prop-styles.interface';


/**
 * Merges common styles with component styles
 * 
 */
export function mergeStyles(commonStyles, componentStyles) {
  const styles = { ...commonStyles, ...componentStyles };

  return styles;
}


/**
 * Creates common styles from prop styles.
 * 
 */
export function createCommonStyles(propStyles: PropStyles) {
  return StyleSheet.create({
    title: {
      fontFamily: propStyles.fontFamilyTitle,
      fontSize: propStyles.fontSizeTitle,
      marginBottom: propStyles.marginTitle
    },
    subTitle: {
      fontFamily: propStyles.fontFamilySubTitle,
      fontSize: propStyles.fontSizeSubTitle,
      marginBottom: propStyles.marginTitle
    },
    divider: {
      width: '100%',
      height: propStyles.dividerSpace * 2 / 3
    },
    defaultContainer: {
      width: '100%',
      display: 'flex'
    },
    containerWithBackground: {
      backgroundColor: propStyles.primaryColor,
      borderRadius: propStyles.borderRadius,
      padding: propStyles.dividerSpace / 3,
      color: propStyles.primaryFontColor
    },
    containerWithIndentation: {
      marginLeft: propStyles.dividerSpace / 3
    },
    textWithSpace: {
      marginBottom: propStyles.marginTitle / 2
    },
    textWithBackground: {
      backgroundColor: propStyles.primaryColor,
      borderRadius: propStyles.borderRadius / 4,
      padding: propStyles.dividerSpace / 6,
      color: propStyles.primaryFontColor,
    },
    textWithIndentation: {
      textIndent: propStyles.dividerSpace / 3
    },
    textItalic: {
      fontStyle: 'italic'
    }
  });
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