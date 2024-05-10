import config from './../config'
//import mysql from 'promise-mysql'
/*
import mysql from 'mysql';

const dbSettings = {
    host: config.host, 
    database: config.database, 
    user: config.user, 
    password: config.password, 
}

const connection = mysql.createConnection(dbSettings);
  
export {mysql, connection};
*/
import sql from 'mssql';

const dbSettings = {
    user: "admin", //config.dbUser, 
    password: "carp12345", //config.dbPassword, 
    server: "localhost", //config.dbServer,
//    server: 'gtinformatica.ddns.net',
    database: "OFERTAS-APP", //config.dbDatabase, 
    options: {
        encrypt: true, 
        trustServerCertificate: true,
    }    
};

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        //const result = await pool.request().query("SELECT * FROM USUARIO");    
        console.log('POOL: '+JSON.stringify(pool))
        return pool;
    }
    catch (error){
        console.log(error);
    }    
};

export {sql};