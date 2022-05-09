import { Sequelize } from "sequelize";

const db = new Sequelize('node', 'root', '201500610henry', {
    host: 'localhost',
    dialect: 'mysql',

})


export default db;