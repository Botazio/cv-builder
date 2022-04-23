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
      marginRight: propStyles.dividerSpace,
      width: '30%',
    },
    containerRight: {
      display: 'flex',
      flexDirection: 'column',
      width: '70%'
    },
    containerProfession: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
    },
    containerDescription: {
      backgroundColor: propStyles.backgroundColor,
      borderRadius: propStyles.borderRadius,
      padding: propStyles.dividerSpace / 3
    },
    containerPhoto: {
      width: 75,
      height: 75,
      backgroundColor: propStyles.primaryColor,
      marginBottom: propStyles.dividerSpace / 3
    },
    containerName: {
      marginBottom: propStyles.dividerSpace / 3
    },
    textName: {
      fontSize: 28,
      textTransform: 'uppercase',
      fontFamily: propStyles.fontFamilyTitle,
    },
    textDetails: {
      marginBottom: propStyles.marginTitle / 2
    }
  });
}

function HeaderOne({ state, propStyles }: { state: Builder, propStyles: propStyles; }) {

  const styles = createComponentStyles(propStyles);

  const profession = state.personal.profession.split(' ');

  return (
    <View style={styles.wrapper}>
      <View style={styles.containerLeft}>

        <View style={styles.containerPhoto}></View>

        {state.personal.profession !== '' && <View style={styles.containerProfession}>
          {profession.map((word, index) => <Text key={index} style={styles.subTitle}>{word + ' '}</Text>)}
        </View>}

        {state.personal.mobile !== '' && <Text style={styles.textDetails}>{state.personal.mobile}</Text>}
        {state.personal.email !== '' && <Text style={styles.textDetails}>{state.personal.email}</Text>}
        {state.personal.address !== '' && <Text style={styles.textDetails}>{state.personal.address}</Text>}
        {state.personal.linkedin !== '' && <Text style={styles.textDetails}>{state.personal.linkedin}</Text>}
        {state.personal.website !== '' && <Text style={styles.textDetails}>{state.personal.website}</Text>}
        {state.personal.license !== '' && <Text style={styles.textDetails}>Driving license: {state.personal.license}</Text>}

      </View>

      <View style={styles.containerRight}>
        <View style={styles.containerName}>
          <Text style={styles.textName}>{state.personal.name}</Text>
          <Text style={styles.textName}>{state.personal.surname}</Text>
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.title}>About me</Text>
          <Text>{state.experience.description}</Text>
        </View>
      </View>
    </View>
  );
}

export default HeaderOne;