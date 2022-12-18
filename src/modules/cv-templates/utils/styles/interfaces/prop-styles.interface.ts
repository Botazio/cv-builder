
/**
 * This interface is used by every template component in cv templates as an argument.
 * This allows to modify and reuse components in different templates.
 */
export interface PropStyles {
  primaryColor: string;
  primaryFontColor: string;
  secondaryColor: string;
  secondaryFontColor: string;
  fontFamilyTitle: string;
  fontSizeTitle: number;
  fontFamilySubTitle: string;
  fontSizeSubTitle: number;
  fontFamilyParagraph: string;
  fontSizeParagraph: number;
  borderRadius: number;
  dividerSpace: number;
  marginTitle: number;
}