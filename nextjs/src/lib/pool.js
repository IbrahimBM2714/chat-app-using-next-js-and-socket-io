import mysql from 'mysql2/promise'

const pool = await mysql.createConnection({
    host: process.env.NEXT_PUBLIC_HOST,
    port: process.env.NEXT_PUBLIC_PORT,
    user: process.env.NEXT_PUBLIC_USER,
    password: process.env.NEXT_PUBLIC_PASSWORD,
    database: process.env.NEXT_PUBLIC_DATABASE,
})

export default pool