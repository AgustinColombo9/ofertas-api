import { connection, mysql } from '../database/connection.js'
//import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const getCiudades = async (req, res) => {
    try {
        connection.query(queries.getCiudades, (err, results) => {
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
        console.error('Error al obtener categorias:', error); // Registra el error completo en la consola del servidor
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getCiudadesProvinciaId = async (req, res) => {
    try {
        const id = req.params.id; 

        console.log('ID PROVINCIA: '+id)

        connection.query(`SELECT CIUDAD_ID,
                            CIUDAD_DESCRIPCION,
                            CIUDAD_PROVINCIA_ID, 
                            PROVINCIA.PROVINCIA_DESCRIPCION, 
                            CIUDAD_PROPIEDADES,
                            CIUDAD_IMAGEN 
                        FROM CIUDAD 
                        LEFT OUTER JOIN PROVINCIA ON CIUDAD.CIUDAD_PROVINCIA_ID = PROVINCIA.PROVINCIA_ID 
                        WHERE CIUDAD_PROVINCIA_ID = ${parseInt(id)}`, 
        (err, results) => { 
        //connection.query(queries.getCategoriasRubroId, [parseInt(id)], (err, results) => { 
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
        console.error('Error al obtener categorias de rubro:', error); // Registra el error completo en la consola del servidor
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
/*
export const getCiudades = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getCiudades);

        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getCiudadesProvinciaId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('id', sql.BigInt, id)
            .query(queries.getCiudadesProvinciaId); 

        res.json(result.recordset);
    } catch (error) {
        console.log("ERROR");
        res.status(500);
        res.send(error.message);
    }
};
*/