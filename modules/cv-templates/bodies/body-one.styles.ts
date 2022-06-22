import { propStyles } from "../utils/styles/interfaces/prop-styles.interface";

/**
 * Styles for body-one component
 */
export function createBodyOneStyles(propStyles: propStyles) {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
    },
    containerLeft: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: propStyles.dividerSpace * 2 / 3,
      width: '65%',
    },
    containerRight: {
      display: 'flex',
      flexDirection: 'column',
      width: '35%'
    },
  };
}