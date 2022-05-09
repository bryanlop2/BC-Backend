import { Rank, File } from "../repository/interfaces/type";

export default class Position {
    constructor(
        private file: File,
        private rank: Rank
    ) {
    }
    getFile() {
        return this.file;
    }
    getRank() {
        return this.rank;
    }   
}