"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const position_1 = __importDefault(require("../../src/entities/position"));
const queen_1 = __importDefault(require("../../src/entities/queen"));
let queen = new queen_1.default('White', 'E', 1, 'alive');
beforeEach(() => { });
it("Should move one horizontally", () => {
    let position = new position_1.default('E', 5);
    expect(queen.canMove(position)).toBe(true);
});
it("Should move one vertically", () => {
    let position = new position_1.default('G', 1);
    expect(queen.canMove(position)).toBe(true);
});
it("Should move in diagonal", () => {
    let position = new position_1.default('H', 4);
    expect(queen.canMove(position)).toBe(true);
});
it("Shouldn't move in L", () => {
    let position = new position_1.default('F', 3);
    expect(queen.canMove(position)).toBe(false);
});
//# sourceMappingURL=queen.test.js.map