"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(color, WaitTurn) {
        this.color = color;
        this.WaitTurn = WaitTurn;
    }
    userTurn(turn) {
        if (this.WaitTurn === false) {
            // aqui hace su turno
            return true;
        }
        return false;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map