from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm


class BaseTemplate:
    """
    This class acts as a superclass for the other templates. It defines a common list
    of methods and attributes to avoid code duplication.
    Pass the styles to the template as a style sheet similar to the report lab default one
    """

    def __init__(self, filename, user_data, styles=None):
        self.filename = filename
        self.user_data = user_data

        # Get the page dimensions
        self._calc()

        # Dictionary to to the mapping of the methods
        self._map_props = {
            "name": self._add_name,
            "jobTitle": self._add_job_title,
            "details": self._add_details,
            "description": self._add_description,
            "experience": self._add_experience,
            "education": self._add_education,
            "skills": self._add_skills,
            "languages": self._add_languages,
            "references": self._add_references
        }

        # Use default styles if no styles are provided
        if styles:
            self.styles = styles
        else:
            self.styles = getSampleStyleSheet()

        # Get the user data into the correct format
        self._parse_data()

    def _calc(self):
        """
        Performs the appropiate calculations to get the page dimensions
        """

        self.page_width = A4[0]
        self.page_height = A4[1]
        self.left_margin = 2 * cm
        self.bottom_margin = 1.5 * cm
        self.width = self.page_width - 2*self.left_margin
        self.height = self.page_height - 2*self.bottom_margin

    def draw_on_canvas(self):
        """
        This method is thought to be override by each template class.
        The method draws the data with the correct format in a canvas
        and saves it as a PDF
        """
        pass

    def _parse_data(self):
        """
        This method is thought to be override by each template class.
        The method should look up a dictionary unique for each template class 
        and organize the user_data before drawing the PDF
        """
        pass

    def _parse_prop(self, prop):
        """
        Calls a different method depending on the prop.
        """
        if prop in self.user_data:
            return self._map_props[prop](prop)
        else:
            return []

    def _add_name(self, prop):
        """
        Returns an array which contains a flowable paragraph with the name of the user.
        This class is meant to be overridden. 
        """
        pass

    def _add_job_title(self, prop):
        """
        Returns an array which contains a flowable paragraph with the user job title. 
        This class is meant to be overridden.
        """
        pass

    def _add_details(self, prop):
        """
        Returns an array of flowables paragraphs with the user details. 
        This class is meant to be overridden.
        """
        pass

    def _add_description(self, prop):
        """
        Returns an array with the user title and the user description. 
        This class is meant to be overridden.
        """
        pass

    def _add_experience(self, prop):
        """
        Returns an array of flowables paragraphs with the user experience.
        This class is meant to be overridden. 
        """
        pass

    def _add_education(self, prop):
        """
        Returns an array of flowables paragraphs with the user education. 
        This class is meant to be overridden.
        """
        pass

    def _add_skills(self, prop):
        """
        Returns an array of flowables paragraphs with the user skills. 
        This class is meant to be overridden.
        """
        pass

    def _add_languages(self, prop):
        """
        Returns an array of flowables paragraphs with the user languages. 
        This class is meant to be overridden.
        """
        pass

    def _add_references(self, prop):
        """
        Returns an array of flowables paragraphs with the user references. 
        This class is meant to be overridden.
        """
        pass
