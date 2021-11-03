import 'reflect-metadata';
import 'dotenv/config';

import { createConnection } from 'typeorm';

const PORT = process.env.DATABASE_PORT as unknown;

async function start() {
  try {
    const connection = await createConnection({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: PORT as number,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    });

    console.log('banco de dados conectado com sucesso.');

    process.exit(0);
  } catch (error) {
    console.log('erro inesperado ao conectar banco');

    if (error instanceof Error) {
      console.log(error.message);
    }

    process.exit(1);
  }
}

start();
