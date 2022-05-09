"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pawn_1 = __importDefault(require("../../src/entities/pawn"));
const position_1 = __importDefault(require("../../src/entities/position"));
let pawn = new pawn_1.default('White', 'A', 2, 'alive');
beforeEach(() => { });
it("Should move one step", () => {
    let position = new position_1.default('A', 3);
    expect(pawn.canMove(position)).toBe(true);
});
it("Shouldn't move in diagonal", () => {
    let position = new position_1.default('B', 3);
    expect(pawn.canMove(position)).toBe(false);
});
it("Shouldn't move two places", () => {
    let position = new position_1.default('A', 4);
    expect(pawn.canMove(position)).toBe(false);
});
//# sourceMappingURL=pawn.test.js.map