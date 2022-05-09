"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = __importDefault(require("./board"));
const players_1 = __importDefault(require("./players"));
class Game {
    constructor() {
        this.players = new players_1.default;
        this.board = new board_1.default;
    }
    restartGame() {
        let brandNewBoard = new board_1.default;
        let brandNewPlayers = new players_1.default;
        this.board = brandNewBoard;
        this.players = brandNewPlayers;
    }
    showBoard() {
        return this.board, this.players;
    }
}
exports.default = Game;
//# sourceMappingURL=game.js.map