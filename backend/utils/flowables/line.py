from reportlab.platypus.flowables import Flowable


class Line(Flowable):
    """
    Line flowable --- draws a line in a flowable
    """

    def __init__(self, width, height=0, color=None, line_cap=1):
        Flowable.__init__(self)
        self.width = width
        self.height = height
        self.color = color
        self.line_cap = 1

    def __repr__(self):
        return "Line(w=%s)" % self.width

    def draw(self):
        """
        draw the line
        """
        if self.color:
            self.canv.setStrokeColorRGB(self.color)
        if self.line_cap:
            self.canv.setLineCap(self.line_cap)

        self.canv.line(0, self.height, self.width, self.height)
