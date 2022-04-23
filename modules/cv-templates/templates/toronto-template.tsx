import { Builder } from '@modules/pages/builder/builder.reducer';
import { Page, Font, Document, StyleSheet, View, Text } from '@react-pdf/renderer';
import HeaderOne from '../headers/header-one';
import { propStyles } from '../utils/prop-styles';

const torontoStyles: propStyles = {
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
    padding: "30px 40px",
    fontFamily: 'robotoText',
    fontSize: torontoStyles.fontSizeParagraph,
    color: torontoStyles.primaryFontColor,
  },
});

Font.register({
  family: 'robotoText',
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});

Font.register({
  family: 'robotoTitle',
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
});

function TorontoTemplate({ state }: { state: Builder; }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <HeaderOne state={state} propStyles={torontoStyles} />
      </Page>
    </Document>
  );
}

export default TorontoTemplate;