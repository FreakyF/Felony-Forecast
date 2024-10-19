import base64

from fastapi import FastAPI, Request
import mock
import datetime
import io
from PIL import Image
app = FastAPI()

list = mock.test.analyzeImage()
def setPath():
    for image in list:
        image.image = image.toBase64(image.image)
def name_generator():
    now = datetime.datetime.now()
    timestamp = now.strftime("%Y%m%d%H%M%S")
    return f"image){timestamp}"
def Base64ToImage(code):
    imgData = base64.b64decode(code)

    image = Image.open(io.BytesIO(imgData))
    image.save(name_generator(),'JPEG')

@app.get("/read_data")
def read_data():
    setPath()
    return (list)

@app.post("/recive_data")
async def recive_data(request: Request):
    data = await request.json()
    print(data['image'])
    Base64ToImage(data['image'])
