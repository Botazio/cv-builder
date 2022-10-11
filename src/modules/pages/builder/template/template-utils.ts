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
      "value": "Construction Professional ",
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
      "value": "City",
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
          "id": "911048db-98af-4178-8054-9dbe99746bcd",
          "title": "General Manager",
          "location": "California",
          "place": "Blair General Contracting",
          "startDate": "2009",
          "endDate": "Present",
          "description": "Responsible for all aspects of running a general contracting business. Perform all sales, marketing and business development activities. Perform contract labor and coordinate with subcontractors where necessary. Provide superior customer service to clients. Manage company finances and collect payment."
        },
        {
          "id": "3893f8d2-d200-4bcf-8676-04bbf3c48a68",
          "title": "Project Superintendent ",
          "location": "California",
          "place": "Kaiser Permanente",
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
          "id": "3fae1485-43f4-4ba2-ba92-b825599eddc0",
          "title": "Consulting"
        },
        {
          "id": "f282ef9a-ca59-4f21-9e1e-3c7ab70c85ac",
          "title": "Customer Service"
        },
        {
          "id": "4066b717-2d1e-457a-82d1-40f0f8d90281",
          "title": "Project Management "
        }
      ]
    },
    "languages": {
      "activeElementID": "",
      "elements": [
        {
          "id": "947b721d-b017-4451-83c7-98969071dbfd",
          "title": "English"
        },
        {
          "id": "37bf7b6f-4b27-4a7d-ab24-c8dc54385a2a",
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
          "primary": "#B4FF9F",
          "secondary": "blue"
        },
        "themes": [
          {
            "primary": "#B4FF9F",
            "secondary": "blue"
          },
          {
            "primary": "yellow",
            "secondary": "red"
          },
          {
            "primary": "purple",
            "secondary": "grey"
          }
        ]
      },
      "toronto-template": {
        "name": "toronto-template",
        "activeTheme": {
          "primary": "#B4FF9F",
          "secondary": "blue"
        },
        "themes": [
          {
            "primary": "#B4FF9F",
            "secondary": "blue"
          },
          {
            "primary": "yellow",
            "secondary": "red"
          },
          {
            "primary": "purple",
            "secondary": "grey"
          }
        ]
      }
    }
  }
};