import Turn from "../../entities/turn";


export interface Play {
    userTurn(turn: Turn): boolean;
}