import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { Builder } from 'modules/pages/builder/builder.reducer';
import { PropStyles } from "../utils/styles/interfaces/prop-styles.interface";

function createComponentStyles(propStyles: PropStyles) {
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
      backgroundColor: propStyles.primaryColor,
      color: propStyles.primaryFontColor,
      borderRadius: propStyles.borderRadius,
      padding: propStyles.dividerSpace / 3
    },
    containerPhoto: {
      width: 75,
      height: 75,
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

function HeaderOne({ state, propStyles }: { state: Builder, propStyles: PropStyles; }) {

  const styles = createComponentStyles(propStyles);

  const profession = state.personal.profession.value.split(' ');

  return (
    <View style={styles.wrapper}>
      <View style={styles.containerLeft}>

        <View style={styles.containerPhoto}>
          {state.personal.photoURL.value !== '' && <Image src={state.personal.photoURL.value} />}
        </View>

        {state.personal.profession.value !== '' && <View style={styles.containerProfession}>
          {profession.map((word, index) => <Text key={index} style={styles.subTitle}>{word + ' '}</Text>)}
        </View>}

        {state.personal.mobile.value !== '' && <Text style={styles.textDetails}>{state.personal.mobile.value}</Text>}
        {state.personal.email.value !== '' && <Text style={styles.textDetails}>{state.personal.email.value}</Text>}
        {state.personal.address.value !== '' && <Text style={styles.textDetails}>{state.personal.address.value}</Text>}
        {state.personal.linkedin.value !== '' && <Text style={styles.textDetails}>{state.personal.linkedin.value}</Text>}
        {state.personal.website.value !== '' && <Text style={styles.textDetails}>{state.personal.website.value}</Text>}
        {state.personal.license.value !== '' && <Text style={styles.textDetails}>Driving license: {state.personal.license.value}</Text>}
      </View>

      <View style={styles.containerRight}>
        <View style={styles.containerName}>
          {state.personal.name.value !== '' && <Text style={styles.textName}>{state.personal.name.value}</Text>}
          {state.personal.surname.value !== '' && <Text style={styles.textName}>{state.personal.surname.value}</Text>}
        </View>
        {state.experience.description !== '' && <View style={styles.containerDescription}>
          <Text style={styles.title}>About me</Text>
          <Text>{state.experience.description}</Text>
        </View>}
      </View>
    </View>
  );
}

export default HeaderOne;