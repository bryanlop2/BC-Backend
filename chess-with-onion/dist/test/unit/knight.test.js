"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knight_1 = __importDefault(require("../../src/entities/knight"));
const position_1 = __importDefault(require("../../src/entities/position"));
let knight = new knight_1.default('White', 'B', 1, 'alive');
beforeEach(() => { });
it("Should move in L", () => {
    let position = new position_1.default('C', 3);
    expect(knight.canMove(position)).toBe(true);
});
it("Should move in other L", () => {
    let position = new position_1.default('D', 2);
    expect(knight.canMove(position)).toBe(true);
});
it("Shouldn't move in diagonal", () => {
    let position = new position_1.default('D', 3);
    expect(knight.canMove(position)).toBe(false);
});
it("Shouldn't move two places", () => {
    let position = new position_1.default('B', 3);
    expect(knight.canMove(position)).toBe(false);
});
//# sourceMappingURL=knight.test.js.map