import { Builder } from '@modules/pages/builder/builder.reducer';
import { StyleSheet, View, Text } from '@react-pdf/renderer';
import { propStyles } from "../utils/prop-styles";

function createComponentStyles(propStyles: propStyles) {
  return StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
    },
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
    defaultContainer: {
      width: '100%',
      display: 'flex'
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
    containerWithBackground: {
      backgroundColor: propStyles.backgroundColor,
      borderRadius: propStyles.borderRadius,
      padding: propStyles.dividerSpace / 3,
      marginBottom: propStyles.dividerSpace / 3
    },
    textWithSpace: {
      marginBottom: propStyles.marginTitle / 2
    }
  });
}

export default function BodyOne({ state, propStyles }: { state: Builder, propStyles: propStyles; }) {

  const styles = createComponentStyles(propStyles);

  return (
    <View style={styles.wrapper}>
      <View style={styles.containerLeft}>

      </View>

      <View style={styles.containerRight}>
        <TypeOneExperience field={state.experience.skills} title='Skills' styles={styles} />
        <TypeOneExperience field={state.experience.languages} title='Languages' styles={styles} />
      </View>

    </View>
  );
}

// This function is to render single fields experiences such as skills or languages.
function TypeOneExperience({ field, title, styles }) {
  return (
    field.elements.length > 0 && <View style={styles.containerWithBackground}>
      <Text style={styles.title}>{title}</Text>
      {field.elements.map((el, index) =>
        <Text key={index} style={styles.textWithSpace}>- {el.title}</Text>)}
    </View>
  );
}