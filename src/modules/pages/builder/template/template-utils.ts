import { TemplateNames } from "modules/cv-templates/templates/template-names.enum";
import { Builder } from "../builder.reducer";

export const SAMPLE_STATE: Builder = {
  "personal": {
    "photoURL": {
      "value": "",
      "isRequired": false
    },
    "name": {
      "value": "John",
      "isRequired": true
    },
    "surname": {
      "value": "Doe",
      "isRequired": true
    },
    "profession": {
      "value": "Construction Manager",
      "isRequired": true
    },
    "mobile": {
      "value": "888-888-8888",
      "isRequired": false
    },
    "email": {
      "value": "email@address.com",
      "isRequired": false
    },
    "address": {
      "value": "California",
      "isRequired": false
    },
    "linkedin": {
      "value": "",
      "isRequired": false
    },
    "website": {
      "value": "",
      "isRequired": false
    },
    "license": {
      "value": "",
      "isRequired": false
    },
    "nationality": {
      "value": "",
      "isRequired": false
    }
  },
  "experience": {
    "description": "Seasoned professional with the construction and project management expertise needed to generate impressive outcomes that consistently exceed expectations. Ability to direct multi-site construction, maintenance, and modernization projects through their entire life cycle within diverse sectors including school, medical, industrial and residential.",
    "work": {
      "activeElementID": "",
      "elements": [
        {
          "id": "",
          "title": "General Manager",
          "location": "California",
          "place": "Company Name",
          "startDate": "2009",
          "endDate": "Present",
          "description": "Responsible for all aspects of running a general contracting business. Perform all sales, marketing and business development activities. Perform contract labor and coordinate with subcontractors where necessary. Provide superior customer service to clients. Manage company finances and collect payment."
        },
        {
          "id": "",
          "title": "Project Superintendent ",
          "location": "California",
          "place": "Company Name",
          "startDate": "2008",
          "endDate": "2010",
          "description": "Managed all phases of construction projects including planning, communications, supervision, execution and completion. Ensured that projects were implemented effectively within cost, schedule, quality and safety parameters. Successfully oversaw a broad range of remodeling projects including emergency and operating rooms, offices, data centers as well as fire alarm (F/A) & security systems."
        }
      ]
    },
    "education": {
      "activeElementID": "",
      "elements": []
    },
    "skills": {
      "activeElementID": "",
      "elements": [
        {
          "id": "",
          "title": "Consulting"
        },
        {
          "id": "",
          "title": "Customer Service"
        },
        {
          "id": "",
          "title": "Project Management "
        }
      ]
    },
    "languages": {
      "activeElementID": "",
      "elements": [
        {
          "id": "",
          "title": "English"
        },
        {
          "id": "",
          "title": "Spanish"
        }
      ]
    },
    "references": {
      "activeElementID": "",
      "elements": []
    }
  },
  "template": {
    "activeTemplateName": TemplateNames.RIO_TEMPLATE,
    "elements": {
      "rio-template": {
        "name": "rio-template",
        "activeTheme": {
          "primary": "",
          "secondary": ""
        },
        "themes": []
      },
      "toronto-template": {
        "name": "toronto-template",
        "activeTheme": {
          "primary": "",
          "secondary": ""
        },
        "themes": []
      }
    }
  }
};