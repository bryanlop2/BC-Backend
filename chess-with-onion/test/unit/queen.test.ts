import Position from '../../src/entities/position';
import Queen from '../../src/entities/queen';


let queen = new Queen('White', 'E', 1, 'alive');

beforeEach(() => {});

it("Should move one horizontally", () => {
    let position = new Position('E', 5);
    expect(queen.canMove(position)).toBe(true);
})

it("Should move one vertically", () => {
    let position = new Position('G', 1);
    expect(queen.canMove(position)).toBe(true);
})

it("Should move in diagonal", () => {
    let position = new Position('H', 4);
    expect(queen.canMove(position)).toBe(true);
})

it("Shouldn't move in L", () => {
    let position = new Position('F', 3);
    expect(queen.canMove(position)).toBe(false);
})