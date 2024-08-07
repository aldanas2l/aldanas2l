from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return "Hello-World"

@app.get("/url") #json
async def url():
    return {"url_curso":" https://mouredev.com/python"}
