from reportlab.pdfgen.canvas import Canvas
from reportlab.platypus.flowables import Spacer
from reportlab.platypus.frames import Frame
from functions.handle_json import handle_experience, handle_description, handle_details, handle_education, handle_job_title, handle_languages, handle_name, handle_references, handle_skills
from templates.base_template import BaseTemplate
from reportlab.lib.units import cm
from flowables.line import Line


class FormalTemplate(BaseTemplate):
    """
    This class creates a formal template.
    An example of this template can be found at:
    https://www.canva.com/templates/EAD7WUBUFsI-green-and-black-minimalist-resume/
    It has two columns. A small one on the left and a big one on the right.
    The mapping is done distributing the elements across this two columns.
    """

    # Dictionary to do the mapping for the layout
    _map_layout = {
        "name": "right",
        "jobTitle": "right",
        "details": "left",
        "description": "right",
        "experience": "right",
        "education": "right",
        "skills": "left",
        "languages": "left",
        "references": "right"
    }

    def __init__(self, filename, user_data, styles=None):
        super().__init__(filename, user_data, styles=styles)

        # Calc the width of the two columns
        self.width_left = self.width / 3 - 1*cm
        self.width_right = self.width * 2/3

    def _parse_data(self):
        """
        The template has a two column layout.
        The left column(smaller) contains the following content:
        - details
        - skills
        - languages

        The right column(bigger) contains the following content:
        - name
        - job title
        - description
        - experience
        - education
        - references
        """

        # Instanciate the stories arrays
        self._story_left = []
        self._story_right = []

        # Get the props in the correct story
        for prop in self._map_props:
            if self._map_layout[prop] == "left":
                self._story_left.extend(self._parse_prop(prop))
            elif self._map_layout[prop] == "right":
                self._story_right.extend(self._parse_prop(prop))

    def draw_on_canvas(self):
        """
        This method is thought to be override by each template class.
        The method draws the data with the correct format in a canvas
        and saves it as a PDF
        """

        # Start the canvas. It overrides the pdf each time this method is called
        canv = Canvas(self.filename)

        # Setting up the frames, frames are use for dynamic content not fixed page elements
        left_frame = Frame(
            self.left_margin, self.bottom_margin, self.width_left, self.height, id="left")
        right_frame = Frame(
            self.left_margin + self.width / 3, self.bottom_margin, self.width_right, self.height, id="right")

        # Make copies of the stories
        story_left = self._story_left
        story_right = self._story_right

        # Loop through the stories until are empty
        while len(story_left) or len(story_right) > 0:
            # Add method response with 0 if the operation fails
            # This happens when the frame does not have enough space to fit the flowable
            if len(story_left) and left_frame.add(story_left[0], canv):
                story_left.pop(0)
            elif len(story_right) and right_frame.add(story_right[0], canv):
                story_right.pop(0)
            else:
                # Go to the next page and restart the frames
                canv.showPage()
                left_frame = Frame(
                    self.left_margin, self.bottom_margin, self.width_left, self.height, id="left")
                right_frame = Frame(
                    self.left_margin + self.width / 3, self.bottom_margin, self.width_right, self.height, id="right")

        # Return the pdf data
        return canv.save()

    def _add_name(self, prop):
        """
        Returns an array which contains a flowable paragraph with the name of the user.
        """

        return handle_name(self.user_data[prop], self.styles)

    def _add_job_title(self, prop):
        """
        Returns an array which contains a flowable paragraph with the user job title.
        """

        return handle_job_title(self.user_data[prop], self.styles)

    def _add_details(self, prop):
        """
        Returns an array of flowables paragraphs with the user details.
        """
        arr = []
        arr.extend(handle_details(self.user_data[prop], self.styles))

        arr.append(Spacer(width=1*cm, height=0.5 * cm))
        return arr

    def _add_description(self, prop):
        """
        Returns an array with the user title and the user description.
        """
        arr = []
        arr.extend(handle_description(self.user_data[prop], self.styles))
        arr.append(Spacer(width=1*cm, height=0.5 * cm))
        return arr

    def _add_experience(self, prop):
        """
        Returns an array of flowables paragraphs with the user experience.
        """
        arr = []
        arr.append(Line(self.width * 2 / 3))
        arr.extend(handle_experience(self.user_data[prop], self.styles))
        arr.append(Spacer(width=1*cm, height=0.5 * cm))
        return arr

    def _add_education(self, prop):
        """
        Returns an array of flowables paragraphs with the user education.
        """
        arr = []
        arr.append(Line(self.width * 2 / 3))
        arr.extend(handle_education(self.user_data[prop], self.styles))
        arr.append(Spacer(width=1*cm, height=0.5 * cm))
        return arr

    def _add_skills(self, prop):
        """
        Returns an array of flowables paragraphs with the user skills.
        """
        arr = []
        arr.append(Line((self.width * 1 / 3) - 1*cm))
        arr.extend(handle_skills(self.user_data[prop], self.styles))
        arr.append(Spacer(width=1*cm, height=0.5 * cm))

        return arr

    def _add_languages(self, prop):
        """
        Returns an array of flowables paragraphs with the user languages.
        """
        arr = []
        arr.append(Line((self.width * 1 / 3) - 1*cm))
        arr.extend(handle_languages(self.user_data[prop], self.styles))
        arr.append(Spacer(width=1*cm, height=0.5 * cm))

        return arr

    def _add_references(self, prop):
        """
        Returns an array of flowables paragraphs with the user references.
        """
        arr = []
        arr.append(Line(self.width * 2 / 3))
        arr.extend(handle_references(self.user_data[prop], self.styles))
        arr.append(Spacer(width=1*cm, height=0.5 * cm))
        return arr
