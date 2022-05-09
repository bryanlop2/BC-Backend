import Position from "../../src/entities/position";
import Rook from "../../src/entities/rook";


let rook = new Rook('White', 'A', 1, 'alive');

beforeEach(() => {});

it("Should move horizonally", () => {
    let position = new Position('A', 3);
    expect(rook.canMove(position)).toBe(true);
})

it("Should move vertically", () => {
    let position = new Position('C', 1);
    expect(rook.canMove(position)).toBe(true);
})

it("Shouldn't move in diagonal", () => {
    let position = new Position('C', 3);
    expect(rook.canMove(position)).toBe(false);
})