from fastapi import FastAPI, Request, HTTPException
import base64
import json
import io
from PIL import Image
import cv2
import tensorflow as tf
import numpy as np
from datetime import datetime
import mock

app = FastAPI()

model = mock.Model()


def name_generator():
    now = datetime.now()
    timestamp = now.strftime("%Y%m%d%H%M%S")
    return f"image_{timestamp}.jpg"


def Base64ToImage(code):
    try:
        imgData = base64.b64decode(code)
        image = Image.open(io.BytesIO(imgData))
        image.save(name_generator(), 'JPEG')
    except Exception as e:
        print(f"Error decoding base64 image: {e}")
        raise HTTPException(status_code=400, detail="Invalid base64 image data")


@app.post("/receive_data")
async def receive_data(request: Request):
    data = await request.json()

    if 'image' not in data or not isinstance(data['image'], str):
        raise HTTPException(status_code=400, detail="No base64 image string found in request")

    base64_image = data['image']

    try:
        Base64ToImage(base64_image)
    except HTTPException:
        raise

    temp = model.analyzeImage(base64_image)

    json_response = [json.dumps(item.__dict__, default=str) for item in temp]

    return json_response
