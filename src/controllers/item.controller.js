import { connection, mysql } from '../database/connection.js'
//import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const getItems = async (req, res) => {
    try {
        connection.query(queries.getItems, (err, results) => {
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
        console.error('Error al obtener items:', error); // Registra el error completo en la consola del servidor
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getItemsRubroId= async (req, res) => {
    try {
        const id = req.params.id; 
        connection.query(queries.getItemsRubroId, [id], (err, results) => {
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
        console.error('Error al obtener items por rubro:', error); // Registra el error completo en la consola del servidor
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const getItemsCategoriaId= async (req, res) => {
    try {
        const id = req.params.id; 
        connection.query(queries.getItemsCategoriaId, [id], (err, results) => {
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
        console.error('Error al obtener items por categoria:', error); // Registra el error completo en la consola del servidor
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

/*
export const getItems = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getItems);

        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getItemsRubroId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('id', sql.BigInt, id)
            .query(queries.getItemsRubroId); 

        res.json(result.recordset);
    } catch (error) {
        console.log("ERROR");
        res.status(500);
        res.send(error.message);
    }
};

export const getItemsCategoriaId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('id', sql.BigInt, id)
            .query(queries.getItemsCategoriaId); 

        res.json(result.recordset);
    } catch (error) {
        console.log("ERROR");
        res.status(500);
        res.send(error.message);
    }
};
*/