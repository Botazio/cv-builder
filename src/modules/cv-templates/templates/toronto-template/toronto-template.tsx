import { Document, Font, Page, StyleSheet, View } from '@react-pdf/renderer';
import { TemplateTheme } from 'modules/cv-templates/templates/template-theme.interface';
import { Builder } from 'modules/pages/builder/builder.reducer';
import BodyOne from '../../bodies/body-one';
import HeaderOne from '../../headers/header-one';
import { propStyles } from '../../utils/styles/interfaces/prop-styles.interface';

function createPropStyles(theme: TemplateTheme): propStyles {
  return {
    primaryColor: theme.primary,
    primaryFontColor: 'black',
    secondaryColor: theme.secondary,
    secondaryFontColor: 'black',
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
};

const templateStyles = StyleSheet.create({
  page: {
    padding: "30 30",
    fontFamily: 'robotoText',
    fontSize: 12,
    color: 'black',
  },
  divider: {
    width: '100%',
    height: 30 * 2 / 3
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

function TorontoTemplate({ state, theme }: { state: Builder; theme: TemplateTheme; }) {
  const propStyles = createPropStyles(theme);

  return (
    <Document>
      <Page size="A4" style={templateStyles.page}>
        <HeaderOne state={state} propStyles={propStyles} />
        <View style={templateStyles.divider} />
        <BodyOne state={state} propStyles={propStyles} />
      </Page>
    </Document>
  );
}

export default TorontoTemplate;