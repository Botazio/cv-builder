import { StyleSheet } from '@react-pdf/renderer';

/**
 * This function is used to merge common styles with component styles
 * 
 */
export function mergeStyles(commonStyles, componentStyles) {
  const styles = { ...commonStyles, ...componentStyles };

  return styles;
}