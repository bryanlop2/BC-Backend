"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const king_1 = __importDefault(require("../../src/entities/king"));
const position_1 = __importDefault(require("../../src/entities/position"));
let king = new king_1.default('White', 'E', 1, 'alive', false, false);
beforeEach(() => { });
//King
it("Should move one place fordward", () => {
    let position = new position_1.default('E', 2);
    expect(king.canMove(position)).toBe(true);
});
it("Shouldn't move to the same place", () => {
    let position = new position_1.default('E', 1);
    expect(king.canMove(position)).toBe(false);
});
it("Should move one place to the left", () => {
    let position = new position_1.default('D', 1);
    expect(king.canMove(position)).toBe(true);
});
it("Shouldn't move forward more than 1 space", () => {
    let position = new position_1.default('E', 3);
    expect(king.canMove(position)).toBe(false);
});
//# sourceMappingURL=king.test.js.map