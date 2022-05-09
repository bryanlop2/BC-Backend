import Knight from "../../src/entities/knight";
import Position from "../../src/entities/position";


let knight = new Knight('White', 'B', 1, 'alive');

beforeEach(() => {});

it("Should move in L", () => {
    let position = new Position('C', 3);
    expect(knight.canMove(position)).toBe(true);
})

it("Should move in other L", () => {
    let position = new Position('D', 2);
    expect(knight.canMove(position)).toBe(true);
})

it("Shouldn't move in diagonal", () => {
    let position = new Position('D', 3);
    expect(knight.canMove(position)).toBe(false);
})

it("Shouldn't move two places", () => {
    let position = new Position('B', 3);
    expect(knight.canMove(position)).toBe(false);
})