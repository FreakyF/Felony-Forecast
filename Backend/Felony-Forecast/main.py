import base64

from fastapi import FastAPI, Request
import mock
import datetime
import io
from PIL import Image

app = FastAPI()

list = mock.test.analyzeImage()


def name_generator():
    now = datetime.datetime.now()
    timestamp = now.strftime("%Y%m%d%H%M%S")
    return f"image){timestamp}"


def Base64ToImage(code):
    imgData = base64.b64decode(code)

    image = Image.open(io.BytesIO(imgData))
    image.save(name_generator(), 'JPEG')


@app.post("/receive_data")
async def receive_data(request: Request):
    data = await request.json()
    Base64ToImage(data['image'])
    return list
