import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { Builder } from 'modules/pages/builder/builder.reducer';
import { Education } from 'modules/pages/builder/experience/sections/education/education-utils';
import { Reference } from 'modules/pages/builder/experience/sections/references/references-utils';
import { Work } from 'modules/pages/builder/experience/sections/work/work-utils';
import { WordsSeparator } from '../utils/components/words-separator';
import { PropStyles } from '../utils/styles/interfaces/prop-styles.interface';

function createComponentStyles(propStyles: PropStyles) {
  return StyleSheet.create({
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
    containerWithBackground: {
      backgroundColor: propStyles.primaryColor,
      borderRadius: propStyles.borderRadius,
      padding: propStyles.dividerSpace / 3,
      color: propStyles.primaryFontColor
    },
    containerWithIndentation: {
      marginLeft: propStyles.dividerSpace / 3
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
    divider: {
      width: '100%',
      height: propStyles.dividerSpace * 2 / 3
    },
    defaultContainer: {
      width: '100%',
      display: 'flex'
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

export default function BodyOne({ state, propStyles }: { state: Builder, propStyles: PropStyles; }) {

  const styles = createComponentStyles(propStyles);

  return (
    <View style={styles.wrapper}>
      <View style={styles.containerLeft}>
        <MultiFieldSection state={state.experience.work} title='Work experience' styles={styles} />
        <ReferencesSection state={state.experience.references} title='References' styles={styles} />
      </View>

      <View style={styles.containerRight}>
        <SingleFieldSection state={state.experience.skills} title='Skills' styles={styles} />
        <View style={styles.divider} />
        <SingleFieldSection state={state.experience.languages} title='Languages' styles={styles} />
      </View>

    </View>
  );
}

// Renders single fields sections such as skills or languages.
function SingleFieldSection({ state, title, styles }) {
  return (
    state.elements.length > 0 && <View style={styles.containerWithBackground}>
      <Text style={styles.title}>{title}</Text>
      {state.elements.map((el, index) =>
        <Text key={title + index} style={styles.textWithSpace}>- {el.title}</Text>)}
    </View>
  );
}

function ReferencesSection({ state, title, styles }) {
  return (
    state.elements.length > 0 && <View>
      <Text style={styles.title}>{title}</Text>
      {state.elements.map((el: Reference, index: number) => (
        <View key={title + index}>
          {(el.name !== '' || el.place !== '') &&
            <Text style={[styles.textWithBackground, styles.subTitle]}>
              <WordsSeparator words={[el.name, el.place]} divider={" - "} />
            </Text>}
          <View style={styles.containerWithIndentation}>
            {el.email !== '' && <Text key={index} style={styles.textWithSpace}>{el.email}</Text>}
            {el.mobile !== '' && <Text key={index} style={styles.textWithSpace}>{el.mobile}</Text>}
            {el.description !== '' && <Text key={index}>{el.description}</Text>}
          </View>
          <View style={styles.divider} />
        </View>
      ))}
    </View>
  );
}

function MultiFieldSection({ state, title, styles }) {
  return (
    state.elements.length > 0 && (
      <View>
        <Text style={styles.title}>{title}</Text>
        {state.elements.map((el: Work | Education, index: number) => (
          <View key={title + index}>
            {(el.title !== '' || el.place !== '' || el.location !== '') &&
              <Text style={[styles.textWithBackground, styles.subTitle]}>
                <WordsSeparator words={[el.title, el.place, el.location]} divider={" - "} />
              </Text>}
            <View style={styles.containerWithIndentation}>
              {(el.startDate !== '' || el.endDate !== '') &&
                <Text style={styles.subTitle}>
                  <WordsSeparator words={[el.startDate, el.endDate]} divider={" - "} />
                </Text>}
              {el.description !== '' && <Text key={index}>{el.description}</Text>}
            </View>
            <View style={styles.divider} />
          </View>
        ))}
      </View>
    )
  );
}