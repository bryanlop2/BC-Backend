import Pawn from "../../src/entities/pawn";
import Position from "../../src/entities/position";


let pawn = new Pawn('White', 'A', 2, 'alive');

beforeEach(() => {});

it("Should move one step", () => {
    let position = new Position('A', 3);
    expect(pawn.canMove(position)).toBe(true);
})

it("Shouldn't move in diagonal", () => {
    let position = new Position('B', 3);
    expect(pawn.canMove(position)).toBe(false);
})

it("Shouldn't move two places", () => {
    let position = new Position('A', 4);
    expect(pawn.canMove(position)).toBe(false);
})