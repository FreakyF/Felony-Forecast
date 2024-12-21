import cv2
import tensorflow as tf
import numpy as np
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
    def __init__(self):
        self.faceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

        self.sexModel = tf.keras.models.load_model('models/sex.keras')
        self.hairModel = tf.keras.models.load_model('models/hair.keras')
        self.eyesModel = tf.keras.models.load_model('models/eyes.keras')
        self.raceModel = tf.keras.models.load_model('models/race.keras')
        self.heightModel = tf.keras.models.load_model('models/height.keras')
        self.weightModel = tf.keras.models.load_model('models/weight.keras')
        self.offenseModel = tf.keras.models.load_model('models/offense.keras')

        self.sexLabels = ['Male', 'Female']
        self.hairLabels = ['Brown', 'Red', 'Gray', 'Black', 'Bald', 'Blonde']
        self.eyesLabels = ['Blue', 'Brown', 'Black', 'Hazel', 'Green']
        self.raceLabels = ['White', 'Black', 'Hispanic']
        self.heightCalc = lambda x: (x * 27.939999999999998) + 162.56
        self.weightCalc = lambda x: (x * 54.43000000000001) + 63.5
        self.offenseLabels = ['BATTERY', 'BURGLARY', 'DUI', 'MANUF/DEL NARCOTICS', 'MURDER', 'None', 'POSS NARCOTICS',
                              'ROBBERY', 'THEFT', 'UNLWFL POSS FIREARM']

    def analyzeImage(self, base64_provided_image):
        image_data = base64.b64decode(base64_provided_image)
        np_array = np.frombuffer(image_data, np.uint8)
        image = cv2.imdecode(np_array, cv2.IMREAD_COLOR)
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        faces = self.faceCascade.detectMultiScale(
            gray,
            scaleFactor=1.1,
            minNeighbors=5,
            minSize=(80, 80)
        )

        ret = []

        if len(faces) == 0:
            return ret

        for (x, y, w, h) in faces:
            cropped = image[y:y + h, x:x + w]
            resized = cropped

            if h < 64:
                resized = cv2.resize(cropped, (64, 64), cv2.INTER_CUBIC)
            elif h > 64:
                resized = cv2.resize(cropped, (64, 64), cv2.INTER_AREA)

            input = tf.cast(resized, tf.float32) / 255.0
            input = tf.image.resize_with_crop_or_pad(input, 64, 64)
            input = tf.expand_dims(input, axis=0)

            sexPredictions = self.sexModel(input).numpy().tolist()[0]
            hairPredictions = self.hairModel(input).numpy().tolist()[0]
            eyesPredictions = self.eyesModel(input).numpy().tolist()[0]
            racePredictions = self.raceModel(input).numpy().tolist()[0]
            heightPredictions = self.heightModel(input).numpy().tolist()[0][0]
            weightPredictions = self.weightModel(input).numpy().tolist()[0][0]
            offensePredictions = self.offenseModel(input).numpy().tolist()[0]

            sex = dict(zip(self.sexLabels, sexPredictions))
            sex = dict(sorted(sex.items(), key=lambda item: item[1], reverse=True))
            hair = dict(zip(self.hairLabels, hairPredictions))
            hair = dict(sorted(hair.items(), key=lambda item: item[1], reverse=True))
            eyes = dict(zip(self.eyesLabels, eyesPredictions))
            eyes = dict(sorted(eyes.items(), key=lambda item: item[1], reverse=True))
            race = dict(zip(self.raceLabels, racePredictions))
            race = dict(sorted(race.items(), key=lambda item: item[1], reverse=True))
            height = self.heightCalc(heightPredictions)
            weight = self.weightCalc(weightPredictions)
            offense = dict(zip(self.offenseLabels, offensePredictions))

            r, b = cv2.imencode('.jpg', resized)
            image_base64 = base64.b64encode(r)

            ret.append(Person(sex, hair, eyes, race, height, weight, offense, image_base64))

        return ret
