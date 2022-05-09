import express from "express";

const app = express();

const port = 4000;

app.get('/', (request, response) => {
    response.send('Hello world!');
})

app.listen(port, ()=>console.log(`server running on port: ${port}`));