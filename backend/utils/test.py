

from templates.formal_template import FormalTemplate

user_data = {
    "name": "Alvaro Garcia",
    "jobTitle": "Front end developer",
    "description": "I am a great software developer even though I do shit things. I am trying to build a shit cv builder so I look good in Linkedin. I am a great software developer even though I do shit things. I am trying to build a shit cv builder so I look good in Linkedin. I am a great software developer even though I do shit things. I am trying to build a shit cv builder so I look good in Linkedin. I am a great software developer even though I do shit things. I am trying to build a shit cv builder so I look good in Linkedin.I am a great software developer even though I do shit things. I am trying to build a shit cv builder so I look good in Linkedin.I am a great software developer even though I do shit things. I am trying to build a shit cv builder so I look good in Linkedin",
    "details": {
        "mobile": "+34 69564732",
        "email": "al96gabo@gmail.com",
        "address": "calle caliza num 4 atic C"
    },
    "education": [
        {
            "title": "Materials Engineering",
            "startDate": "16/02/2020",
            "endDate": "14/09/2020",
            "place": "University Complutense of Madrid",
            "location": "Madrid, Spain",
            "description": "The best fucking material engineering course.<br /> It is so fucking good."
        },
        {
            "title": "Materials Engineering",
            "startDate": "16/02/2020",
            "endDate": "14/09/2020",
            "place": "University Complutense of Madrid",
            "location": "Madrid, Spain",
            "description": "The best fucking material engineering course.<br /> It is so fucking good."
        },
        {
            "title": "Materials Engineering",
            "startDate": "16/02/2020",
            "endDate": "14/09/2020",
            "place": "University Complutense of Madrid",
            "location": "Madrid, Spain",
            "description": "The best fucking material engineering course.<br /> It is so fucking good."
        },
        {
            "title": "Materials Engineering",
            "startDate": "16/02/2020",
            "endDate": "14/09/2020",
            "place": "University Complutense of Madrid",
            "location": "Madrid, Spain",
            "description": "The best fucking material engineering course.<br /> It is so fucking good."
        }
    ],
    "experience": [
        {
            "title": "Site Engineer",
            "startDate": "16/02/2020",
            "endDate": "14/09/2020",
            "place": "Source Civil",
            "location": "Amsterdam, Netherlands",
            # "description": "site engineer for source civil. besto company site engineer for source civil. besto company site engineer for source civil. besto company"
        },
        {
            "title": "Site Engineer",
            "startDate": "16/02/2020",
            "endDate": "14/09/2020",
            "place": "Source Civil",
            "location": "Amsterdam, Netherlands",
            "description": "site engineer for source civil. besto company site engineer for source civil. besto company site engineer for source civil. besto company"
        }
    ],
    "references": [
        {
            "name": "Jesus Prado",
            "place": "University Complutense of Madrid",
            "details": {
                "phone": "+34 673920382",
                "email": "jesus@gmail.com"
            },
            "description": "Alvaro did a fucking great job"
        }
    ],
    "skills": [
        "CSS",
        "HTML",
        "JavaScript",
        "Cute",
        "Computers",
        "Spaghetty"
    ],
    "languages": [
        "English",
        "Spanish",
        "French"
    ]
}


template = FormalTemplate('test.pdf', user_data)
template.draw_on_canvas()
