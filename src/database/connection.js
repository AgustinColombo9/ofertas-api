//import mysql from 'promise-mysql'
import mysql from 'mysql';
import config from './../config'

const dbSettings = {
    host: config.host, 
    database: config.database, 
    user: config.user, 
    password: config.password, 
}

/* 
options: {
    encrypt: true, 
    trustServerCertificate: true,
}
*/

const connection = mysql.createConnection(dbSettings);
  
export {mysql, connection};
