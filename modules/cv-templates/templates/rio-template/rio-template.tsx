import { Builder } from '@modules/pages/builder/builder.reducer';
import { Page, Font, Document, StyleSheet, View } from '@react-pdf/renderer';
import BodyOne from '../../bodies/body-one';
import HeaderOne from '../../headers/header-one';
import { propStyles } from '../../utils/styles/prop-styles.interface';

const RioStyles: propStyles = {
  primaryColor: '#B4FF9F',
  primaryFontColor: 'black',
  secondaryColor: 'blue',
  secondaryFontColor: 'black',
  backgroundColor: '#C2FFAD',
  backgroundFontColor: 'black',
  fontFamilyTitle: 'robotoTitle',
  fontSizeTitle: 16,
  fontFamilySubTitle: 'robotoTitle',
  fontSizeSubTitle: 14,
  fontFamilyParagraph: 'robotoText',
  fontSizeParagraph: 12,
  borderRadius: 10,
  dividerSpace: 30,
  marginTitle: 5,
};

const styles = StyleSheet.create({
  page: {
    padding: "30 30",
    fontFamily: 'robotoText',
    fontSize: RioStyles.fontSizeParagraph,
    color: RioStyles.primaryFontColor,
  },
  divider: {
    width: '100%',
    height: RioStyles.dividerSpace * 2 / 3
  }
});

Font.register({
  family: 'robotoText',
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});

Font.register({
  family: 'robotoTitle',
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
});

function RioTemplate({ state }: { state: Builder; }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <HeaderOne state={state} propStyles={RioStyles} />
        <View style={styles.divider} />
        <BodyOne state={state} propStyles={RioStyles} />
      </Page>
    </Document>
  );
}

export default RioTemplate;