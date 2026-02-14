import cv2
import tensorflow as tf
import numpy as np
import base64
# noinspection PyUnresolvedReferences
from tensorflow.keras import backend as K


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


class Model():
    def __init__(self):
        self.faceCascade = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")

        self.sexModel = tf.keras.models.load_model('models/sex.keras')
        self.hairModel = tf.keras.models.load_model('models/hair.keras')
        self.eyesModel = tf.keras.models.load_model('models/eyes.keras')
        self.raceModel = tf.keras.models.load_model('models/race.keras')
        self.heightModel = tf.keras.models.load_model('models/height.keras')
        self.weightModel = tf.keras.models.load_model('models/weight.keras')
        self.offenseModel = tf.keras.models.load_model('models/offense.keras', custom_objects={'f1_score': f1_score})
        self.sexLabels = ['Male', 'Female']
        self.hairLabels = ['Brown', 'Red', 'Gray', 'Black', 'Bald', 'Blonde']
        self.eyesLabels = ['Blue', 'Brown', 'Black', 'Hazel', 'Green']
        self.raceLabels = ['White', 'Black', 'Hispanic']
        self.heightCalc = lambda x: (x * 27.939999999999998) + 162.56
        self.weightCalc = lambda x: (x * 54.43000000000001) + 63.5
        self.offenseLabels = ['BATTERY', 'BURGLARY', 'DUI', 'MANUF/DEL NARCOTICS', 'MURDER', 'NONE', 'POSS NARCOTICS',
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

            sex_top = list(sex.keys())[0] if sex else None
            hair_top = list(hair.keys())[0] if hair else None
            eyes_top = list(eyes.keys())[0] if eyes else None
            race_top = list(race.keys())[0] if race else None

            success, encoded_image = cv2.imencode('.jpg', resized)
            if not success:
                continue
            image_base64 = base64.b64encode(encoded_image).decode('utf-8')

            ret.append(Person(sex_top, height, weight, hair_top, eyes_top, race_top, offense, image_base64))

        return ret


def f1_score(y_true, y_pred):
    y_pred = K.round(y_pred)

    tp = K.sum(K.cast(y_true * y_pred, 'float'), axis=0)
    fp = K.sum(K.cast((1 - y_true) * y_pred, 'float'), axis=0)
    fn = K.sum(K.cast(y_true * (1 - y_pred), 'float'), axis=0)

    precision = tp / (tp + fp + K.epsilon())
    recall = tp / (tp + fn + K.epsilon())

    f1 = 2 * (precision * recall) / (precision + recall + K.epsilon())

    return K.mean(f1)
