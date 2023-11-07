from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
import os

app = FastAPI()
origins = [
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




class SamplePost(BaseModel):
    name: str
    age: int
    file_path: str

@app.post('/')
async def body_method(sample_post: SamplePost):
    # return "hello " +  sample_post.name
    out_string = f'Hello {sample_post.name}, your age is {sample_post.age} and file path is {sample_post.file_path}'

    return out_string

@app.get("/basic_image", responses={200: {
    "content": {"image/png": {}},
    "description": "Return an image."
}})
async def basic_image():
    # Construct the path to the image
    image_path = 'F:/FastAPITest/bb.png'
    
    # Make sure the file exists
    if os.path.isfile(image_path):
        return FileResponse(image_path, media_type='image/png')
    else:
        # If the file is not found, return a 404 response
        raise HTTPException(status_code=404, detail="File not found")
    


@app.get('/{int_value}')
async def root(int_value: int, query_param_1: str='none', query_param_2: int = -1):
    return {'message': 'Hello World',
        'faraz' : 'abidi',
        'int' : f'{int_value}',
        'query1' : f'{query_param_1}',
        'query2' : f'{query_param_2}'
    }