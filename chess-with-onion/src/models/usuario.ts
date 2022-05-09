import { injectable } from "inversify";
import { DataTypes } from "sequelize";
import db from "../infrastructure/mysql/connection";

const Piece = db.define('Piece', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
})

export default Piece;