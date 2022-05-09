"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const game_1 = __importDefault(require("./repository/base/game"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const port = 5000;
app.get('/', (_request, response) => {
    let game = new game_1.default();
    response.send(game);
});
app.get('/restart', (_request, response) => {
    let game = new game_1.default();
    response.send(game.restartGame());
});
app.listen(port, () => console.log(`server running on port: ${port}`));
//# sourceMappingURL=app.js.map