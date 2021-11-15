from reportlab.platypus.flowables import Spacer
from reportlab.platypus.paragraph import Paragraph
from reportlab.lib.units import cm

"""
This module defines a list of common functions that deals with json objects. 
Each function returns an array of flowables.
"""


def handle_name(name, styles):
    """
    Returns an array of flowables paragraphs which contain the user name.
    """

    # Return an empty array if name is empty
    if not name:
        return []

    arr = []
    arr.append(Paragraph(name, styles['Heading1']))

    return arr


def handle_job_title(job_title, styles):
    """
    Returns an array of flowables paragraphs which contain the user job title.
    """

    # Return an empty array if job_title is empty
    if not job_title:
        return []

    arr = []
    arr.append(Paragraph(job_title, styles['Heading2']))

    return arr


def handle_description(description, styles):
    """
    Returns an array of flowables paragraphs which contain the user description.
    """

    # Return an empty array if description is empty
    if not description:
        return []

    arr = []
    arr.append(Paragraph(description, styles['Normal']))

    return arr


def handle_details(details, styles):
    """
    Returns an array of flowables paragraphs which contain the user details.
    """

    # Return an empty array if details is empty
    if not details:
        return []

    arr = []
    arr.append(Paragraph('Details', styles['Heading2']))

    for detail in details:
        arr.append(Paragraph(detail.capitalize() +
                             ":", styles['Heading4']))
        arr.append(
            Paragraph(details[detail], styles['Normal']))

    return arr


def handle_experience(experience, styles):
    """
    Returns an array of flowables paragraphs which contain the user experience.
    """

    # Return an empty array if experience is empty
    if not experience:
        return []

    arr = []
    arr.append(Paragraph('Experience', styles['Heading2']))

    for job in experience:
        if 'title' in job:
            arr.append(Paragraph(job['title'], styles['Heading3']))

        # This string is used for concatenation is if statements are True
        p = ""
        if 'place' in job:
            p += job['place'] + " "

        if 'startDate' and 'endDate' in job:
            p += job['startDate'] + " - " + job['endDate']

        # Check if the string is empty
        if bool(p):
            arr.append(Paragraph(p, styles['Heading4']))

        if 'description' in job:
            arr.append(Paragraph(job['description'], styles['Normal']))

    return arr


def handle_education(education, styles):
    """
    Returns an array of flowables paragraphs which contain the user education.
    """

    # Return an empty array if education is empty
    if not education:
        return []

    arr = []
    arr.append(Paragraph('Education', styles['Heading2']))

    for course in education:
        if 'title' in course:
            arr.append(Paragraph(course['title'], styles['Heading3']))

        # This string is used for concatenation is if statements are True
        p = ""
        if 'place' in course:
            p += course['place'] + " "

        if 'startDate' and 'endDate' in course:
            p += course['startDate'] + " - " + course['endDate']

        # Check if the string is empty
        if bool(p):
            arr.append(Paragraph(p, styles['Heading4']))

        if 'description' in course:
            arr.append(Paragraph(course['description'], styles['Normal']))

    return arr


def handle_references(references, styles):
    """
    Returns an array of flowables paragraphs which contain the user references.
    """

    # Return an empty array if references is empty
    if not references:
        return []

    arr = []
    arr.append(Paragraph('References', styles['Heading2']))

    for ref in references:
        if 'name' in ref:
            arr.append(Paragraph(ref['name'], styles['Heading3']))

        if 'place' in ref:
            arr.append(Paragraph(ref['place'], styles['Heading4']))

        if 'description' in ref:
            arr.append(Paragraph(ref['description'], styles['Normal']))

    return arr


def handle_skills(skills, styles):
    """
    Returns an array of flowables paragraphs which contain the user skills.
    """

    # Return an empty array skills it is empty
    if not skills:
        return []

    arr = []
    arr.append(Paragraph('Skills', styles['Heading2']))

    for skill in skills:
        arr.append(Paragraph(skill, styles['Bullet']))

    return arr


def handle_languages(languages, styles):
    """
    Returns an array of flowables paragraphs which contain the user languages.
    """

    # Return an empty array languages it is empty
    if not languages:
        return []

    arr = []
    arr.append(Paragraph('Languages', styles['Heading2']))

    for lan in languages:
        arr.append(Paragraph(lan, styles['Bullet']))

    return arr
