"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const position_1 = __importDefault(require("../../src/entities/position"));
const rook_1 = __importDefault(require("../../src/entities/rook"));
let rook = new rook_1.default('White', 'A', 1, 'alive');
beforeEach(() => { });
it("Should move horizonally", () => {
    let position = new position_1.default('A', 3);
    expect(rook.canMove(position)).toBe(true);
});
it("Should move vertically", () => {
    let position = new position_1.default('C', 1);
    expect(rook.canMove(position)).toBe(true);
});
it("Shouldn't move in diagonal", () => {
    let position = new position_1.default('C', 3);
    expect(rook.canMove(position)).toBe(false);
});
//# sourceMappingURL=rook.test.js.map