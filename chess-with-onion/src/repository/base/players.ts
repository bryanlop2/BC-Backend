import User from "../../entities/User";


export default class Player {
    private newPlayerWhite: User;
    private newPlayerBlack: User;

    constructor(){
        this.newPlayerWhite = new User('White', false);
        this.newPlayerBlack = new User('Black', true);
    }
}