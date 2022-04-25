## Jason & Alisha's Wedding Website
<hr />

* Client:
    * React w/ Typescript
* Server:
    * FastAPI
    * SQL Lite 3


## Pages & Components
<hr />

* RSVP
* Location
* Wedding Details
* Gifts

## Setup
<hr />

Install virtualenv if you have not already
```
    pip install virtualenv
```

Create a virtual environment with
```
    virtualenv venv
```
Activate on Windows (Git Bash, CMD, PS)
```
    source venv/Scripts/activate
```
Activate on Linux / Mac
```
    source venv/bin/activate
```
Deactivate
```
deactivate
```
Install All Dependencies to Virtual Environment
```
    pip install -r requirements.txt
```
Start API with
```
python server.py
or
uvicorn server:wsgi_server --reload
```
Start the client:
```
cd client
npm install
npm start
```