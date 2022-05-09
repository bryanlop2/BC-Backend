import Bishop from "../../src/entities/bishop";
import Position from "../../src/entities/position";


let bishop = new Bishop('White', 'B', 1, 'alive');

beforeEach(() => {});

it("Should move in diagonal", () => {
    let position = new Position('D', 3);
    expect(bishop.canMove(position)).toBe(true);
})

it("Shouldn't move in L", () => {
    let position = new Position('D', 2);
    expect(bishop.canMove(position)).toBe(false);
})