import {pool} from 'pg';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is required');
}

const dbpool = new pool({
    connectionString : process.env.DATABASE_URL,
    ssl : {
        rejectUnauthorized : false
    }
})

export default dbpool;