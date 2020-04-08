import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: +(process.env.DB_PORT || 3306),
        connectionLimit: 10,
    });
    return connection;
}