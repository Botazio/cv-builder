import { Builder } from '@modules/pages/builder/builder.reducer';
import { StyleSheet, View, Text } from '@react-pdf/renderer';
import { propStyles } from '../utils/styles/interfaces/prop-styles.interface';
import { Reference } from '@modules/pages/builder/experience/sections/references/references-utils';
import { Education } from '@modules/pages/builder/experience/sections/education/education-utils';
import { Work } from '@modules/pages/builder/experience/sections/work/work-utils';
import { WordsSeparator } from '../utils/components/words-separator';
import { createCommonStyles, mergeStyles } from '../utils/styles/functions';

function createComponentStyles(propStyles: propStyles) {
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
    }
  });
}

export default function BodyOne({ state, propStyles }: { state: Builder, propStyles: propStyles; }) {

  const componentStyles = createComponentStyles(propStyles);
  const commonStyles = createCommonStyles(propStyles);

  const styles = mergeStyles(componentStyles, commonStyles);

  return (
    <View style={styles.wrapper}>
      <View style={styles.containerLeft}>
        <MultiFieldSection state={state.experience.work} title='Work experience' styles={styles} />
        <ReferencesSection state={state.experience.references} title='References' styles={styles} />
      </View>

      <View style={styles.containerRight}>
        <SingleFieldSection state={state.experience.skills} title='Skills' styles={styles} />
        <SingleFieldSection state={state.experience.languages} title='Languages' styles={styles} />
      </View>

    </View>
  );
}

// This component is to render single fields sections such as skills or languages.
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
        </View>
      ))}
    </View>
  );
}

function MultiFieldSection({ state, title, styles }) {
  return (
    state.elements.length > 0 && <View>
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
        </View>
      ))}
    </View>
  );
}