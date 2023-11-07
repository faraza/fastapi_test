This contains both server and client.

To run server:

Make sure you're in the top of this repo (i.e. not in the fastclient server)

1) Install everything

pip install fastapi

pip install pydantic

pip install uvicorn

2) Run the server
uvicorn fastapiserver:app --reload

Make note of the IP address/port that it spits out

To run the client

1) cd into fastclient
2) npm install
3) npm start

If you have problems sending data between server/client:

1) Make note of the Client's IP address and put that in the COR rule in fastapiserver.py if it isn't already there
2) Make note of the server's IP address and update the fetch command in fastclient/app.js uses the server's IP address