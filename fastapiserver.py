from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

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

@app.get('/{int_value}')
async def root(int_value: int, query_param_1: str='none', query_param_2: int = -1):
    return {'message': 'Hello World',
        'faraz' : 'abidi',
        'int' : f'{int_value}',
        'query1' : f'{query_param_1}',
        'query2' : f'{query_param_2}'
    }


class SamplePost(BaseModel):
    name: str
    age: int
    file_path: str

@app.post('/')
async def body_method(sample_post: SamplePost):
    # return "hello " +  sample_post.name
    out_string = f'Hello {sample_post.name}, your age is {sample_post.age} and file path is {sample_post.file_path}'

    return out_string