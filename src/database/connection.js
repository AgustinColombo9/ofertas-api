import mysql from 'promise-mysql'
import config from './../config'

const dbSettings = mysql.createConnection({
    host: config.host, 
    database: config.database, 
    user: config.user, 
    password: config.password, 
    options: {
        encrypt: true, 
        trustServerCertificate: true,
    }
})

export async function getConnection(){
    try {
        const pool = await mysql.connect(dbSettings);
        
        return pool;
    }
    catch (error){
        console.log(error);
    }    
};

export {mysql};