"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const PORT = process.env.DATABASE_PORT;
async function start() {
    try {
        const connection = await (0, typeorm_1.createConnection)({
            type: 'mysql',
            host: process.env.DATABASE_HOST,
            port: PORT,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
        });
        console.log('banco de dados conectado com sucesso.');
        process.exit(0);
    }
    catch (error) {
        console.log('erro inesperado ao conectar banco');
        if (error instanceof Error) {
            console.log(error.message);
        }
        process.exit(1);
    }
}
start();
//# sourceMappingURL=app.js.map