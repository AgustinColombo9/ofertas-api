import { connection, mysql } from '../database/connection.js'
//import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const getCategorias = async (req, res) => {
    try {
        connection.query(queries.getCategorias, (err, results) => {
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

export const getCategoriasRubroId = async (req, res) => {
    try {
        const id = req.params.id; 

        console.log('ID RUBRO: '+id)

        connection.query(`SELECT CATEGORIA_ID, 
                            CATEGORIA_DESCRIPCION, 
                            CATEGORIA_RUBRO_ID, 
                            CATEGORIA_ICONO 
                        FROM CATEGORIA 
                        WHERE CATEGORIA_RUBRO_ID = ${parseInt(id)}`, 
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
export const getCategorias = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getCategorias);

        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};

export const getCategoriasRubroId = async (req, res) => {
    const { id } = req.params;

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('id', sql.BigInt, id)
            .query(queries.getCategoriasRubroId); 

        res.json(result.recordset);
    } catch (error) {
        console.log("ERROR");
        res.status(500);
        res.send(error.message);
    }
};
*/