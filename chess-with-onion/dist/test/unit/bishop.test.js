"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bishop_1 = __importDefault(require("../../src/entities/bishop"));
const position_1 = __importDefault(require("../../src/entities/position"));
let bishop = new bishop_1.default('White', 'B', 1, 'alive');
beforeEach(() => { });
it("Should move in diagonal", () => {
    let position = new position_1.default('D', 3);
    expect(bishop.canMove(position)).toBe(true);
});
it("Shouldn't move in L", () => {
    let position = new position_1.default('D', 2);
    expect(bishop.canMove(position)).toBe(false);
});
//# sourceMappingURL=bishop.test.js.map