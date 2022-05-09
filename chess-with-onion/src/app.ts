import express from "express";
import bodyParser from "body-parser";
import Game from "./repository/base/game";

const app = express();

app.use(bodyParser.json());

const port = 5000;

app.get('/', (_request, response) => {

    let game = new Game();
    response.send(game);
})

app.get('/restart', (_request, response) => {

    let game = new Game();
    response.send(game.restartGame());
})

app.listen(port, ()=>console.log(`server running on port: ${port}`));