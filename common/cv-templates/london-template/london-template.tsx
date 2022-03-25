import React from 'react';
import { Page, Font, Document, StyleSheet, View, Text } from '@react-pdf/renderer';
import { FormInterface } from '../../interfaces/form-interface';
import { Education } from '../../interfaces/education-interface';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: "30px 40px",
    fontFamily: 'RobotoText'
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '15px'
  },
  title: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontFamily: 'RobotoTitle',
    marginBottom: '5px'
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'

  },
  detailParagraph: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '5px'
  },
  education: {
    marginBottom: '15px',
  },
  educationParagraph: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  educationDescription: {
    marginTop: '10px'
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15px'
  },
  text: {
    fontSize: 10,
    textAlign: 'justify'
  },
  strongText: {
    fontSize: 10,
    fontFamily: 'RobotoTitle',
    textTransform: 'capitalize'
  }
});

Font.register({
  family: 'RobotoText',
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});

Font.register({
  family: 'RobotoTitle',
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
});

// Create Document Component
export const LondonTemplate = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        {handleTitle(initialState.main)}
        {handleDetails(initialState.details)}
      </View>
      <View style={styles.section}>
        {handleDescription(initialState.description)}
      </View>
      <View style={styles.section}>
        {handleEducation(initialState.education[0])}
      </View>
    </Page>
  </Document>
);

const handleTitle = (main) => {
  let title = "";

  if (main.name) {
    title += main.name + " ";
  }
  if (main.surname) {
    title += main.surname + " ";
  }
  if (main.profession) {
    title += "| " + main.profession;
  }

  if (title) {
    return <Text style={styles.title}>{title}</Text>;
  }
};

const handleDetails = (details) => {
  const detailsTemplate = (
    Object.keys(details).map((detail) => {
      if (details[detail]) {
        return (
          <View
            key={'details' + detail}
            style={styles.detailParagraph}>
            <Text style={styles.strongText}>{detail + ": "}</Text>
            <Text style={styles.text}>{details[detail]}</Text>
          </View>
        );
      }
    })
  );

  return <View style={styles.details}>{detailsTemplate}</View>;
};

const handleDescription = (description: string) => {
  if (description) {
    return (
      <>
        <Text style={styles.title}>about me</Text>
        <Text style={styles.text}>{description}</Text>
      </>
    );
  }
};

const handleEducation = (education: Education) => {
  if (education) {
    return (
      <>
        <Text style={styles.title}>Education</Text>
        <View style={styles.education}>
          <View style={styles.educationParagraph}>
            <Text style={styles.strongText}>{education.title}</Text>
            <Text style={styles.strongText}>{education.startDate + "-" + education.endDate}</Text>
          </View>
          <View style={styles.educationParagraph}>
            <Text style={styles.text}>{education.place}</Text>
            <Text style={styles.text}>{education.location}</Text>
          </View>
          <View style={styles.educationDescription}>
            <Text style={styles.text}>{education.description}</Text>
          </View>
        </View>
      </>
    );
  }
};

const initialState: FormInterface = {
  main: {
    name: "Alvaro",
    surname: "Garcia",
    profession: "Frontend Developer",
  },
  description: "Entrepreneurial and innovative biomedical engineer with a passion for social impact and business. Proven skills in data science and machine learning in healthcare projects. Empathetic, results oriented and creative. Out-of-the-box thinker.",
  details: {
    mobile: "+34 695433421",
    email: "al96gabo@gmail.com",
    address: "Calle Caliza num 4 atic C",
    postalCode: "28260",
    city: "Madrid",
    linkedin: "AlvaroBotaz",
    website: "http://www.alvaro_garcia.com",
    license: "Type B",
    nationality: "Spanish"
  },
  education: [{
    id: 'afadaeaewq',
    title: "CEO and Co-Founder",
    startDate: "2019",
    endDate: "Present",
    place: "Hera Technology",
    location: "Madrid, Spain",
    description: "Social startup dedicated to the development of cutting-edge technologies based on artificial intelligence to improve diagnosis, follow-up and treatment prediction of psychiatric patients. Scientific promotion to help fight stigma in mental health via podcast and social media. Executive management, product design, recruiting and data science roles."
  }],
  experience: [],
  references: [],
  skills: [],
  languages: [],
  templateStyles: {
    type: 'london',
    primary: 'black',
    secondary: 'black'
  }
};

