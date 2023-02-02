import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const POSTGRES_HOST = process.env.POSTGRES_HOST;
const POSTGRES_DB = process.env.POSTGRES_DB;
const POSTGRESS_USER = process.env.POSTGRESS_USER;
const POSTGRESS_PASSWORD = process.env.POSTGRESS_PASSWORD;

const client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRESS_USER,
    password: POSTGRESS_PASSWORD,
});

export default client;