"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../../entities/User"));
class Player {
    constructor() {
        this.newPlayerWhite = new User_1.default('White', false);
        this.newPlayerBlack = new User_1.default('Black', true);
    }
}
exports.default = Player;
//# sourceMappingURL=players.js.map