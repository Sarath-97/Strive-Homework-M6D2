/**
 * 
 *  import pkg from 'pg';
    const { Pool } = pkg;
*/

// IN DEV

// import pg from "pg";
// // pools will use environment variables
// // for connection information
// const { Pool } = pg;

// const db = new Pool();

// export default db;

// IN PROD

import pg from "pg";
// pools will use environment variables
// for connection information
const { Pool } = pg;

console.log(process.env.NODE_ENV);
const db = new Pool({
	ssl: {
		rejectUnauthorized: false,
	},
	connectionString:
		process.env.NODE_ENV !== "development"
			? process.env.DATABASE_URL
			: process.env.DATABASE_URL_DEV,
});

export default db;