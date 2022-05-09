"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = __importDefault(require("./board"));
const players_1 = __importDefault(require("./players"));
class Game {
    //private newPlayerB: User;
    constructor() {
        this.newPlayers = new players_1.default;
        this.newBoard = new board_1.default;
        //this.newPlayerW = new User('White', false);
        //this.newPlayerB = new User('Black', true)
    }
    showBoard() {
        return this.newBoard;
    }
}
exports.default = Game;
//# sourceMappingURL=game.js.map