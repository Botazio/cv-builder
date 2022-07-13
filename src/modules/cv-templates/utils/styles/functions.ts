import { StyleSheet } from '@react-pdf/renderer';
import { propStyles } from './interfaces/prop-styles.interface';


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
export function createCommonStyles(propStyles: propStyles) {
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