import base64
class Person():
    def __init__(self, sex, height, weight, hair, eyes, race, offense, image):
        self.sex = sex
        self.height = height
        self.weight = weight
        self.hair = hair
        self.eyes = eyes
        self.race = race
        self.offense = offense
        self.image = image

    def getSex(self):
        return self.sex

    def getHeight(self):
        return self.height

    def getWeight(self):
        return self.weight

    def getHair(self):
        return self.hair

    def getEyes(self):
        return self.eyes

    def getRace(self):
        return self.race

    def getOffense(self):
        return self.offense
    def getImage(self):
        return self.image
    def toBase64(self, path):
        with open(path, "rb") as image_file:
            return base64.b64encode(image_file.read())


class Model():
    def analyzeImage(self):
        return [Person("male", 128, 129, "Black", "Black", "Asian", {"dui": 0.7, "theft": 0.3}, 'criminal1.jpg'),
                Person("female", 321, 456, "Black", "Black", "Asian", {"murder": 0.4, "theft": 0.2}, 'criminal2.jpg')]

test = Model()