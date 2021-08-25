/**
 * 
 *  import pkg from 'pg';
    const { Pool } = pkg;
*/

const {NODE_ENV,DATABASE_URL} = process.env;

const isDeployed = NODE_ENV === 'production'
// conditional ssl config

const sslConfig  = isDeployed?  {ssl:{rejectUnauthorized:false}} : {} 

// then spread it into Pool

const pool = new Pool({
...(sslConfig), //  spreading sslConfig conditionally
connectionString:DATABASE_URL
});

// ADD SSL CONFIG CONDITIONALLY   

// When it's deployed you must use SSL , but in localhost you dont use SSL.

// But how do you now if an express app is deployed ? 

// Answer is this  environment variable : heroku sets NODE_ENV = production