import { connection, mysql } from '../database/connection.js'
//import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";


export const getRubros = async (req, res) => {
    try {
        connection.query(queries.getRubros, (err, results) => {
            if (err) {
                console.error('Error al ejecutar la consulta:', err);
                return;
            }

            console.log('Resultados de la consulta:', results);

            res.status(200).json(results);
        });

        // Cerrar la conexión cuando hayas terminado de usarla
        //connection.end();
    } catch (error) {
        console.error('Error al obtener rubros:', error); // Registra el error completo en la consola del servidor
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

/*
export const getRubros = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getRubros);

        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};
*/