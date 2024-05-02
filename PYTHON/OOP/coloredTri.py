from triangle import Triangle

class ColoredTriangle(Triangle):
    def __init__(self, a,b, color):
      super().__init__(a,b)
      self.color=color

    # def __repr__(self):
    #   return f"<Triangle a = {self.a}, b = {self.b}>"
    def describe(self):
      msg = super().describe()
      return msg + f". I am {self.color}"