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

        connection.query(`SELECT 
                            ITEM_DETALLE.ITEM_DETALLE_ID, 
                            ITEM_DETALLE.ITEM_DETALLE_SUCURSAL_ID, 
                            ITEM_DETALLE.ITEM_DETALLE_ITEM_ID, 
                            ITEM.ITEM_DESCRIPCION, 
                            ITEM.ITEM_RUBRO_ID, 
                            RUBRO.RUBRO_DESCRIPCION, 
                            ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID, 
                            CATEGORIA.CATEGORIA_DESCRIPCION, 
                            ITEM_DETALLE.ITEM_DETALLE_STOCK_MINIMO, 
                            ITEM_DETALLE.ITEM_DETALLE_UNIDAD_ID, 
                            UNIDAD.UNIDAD_DESCRIPCION, 
                            ITEM_DETALLE.ITEM_DETALLE_MARCA, 
                            ITEM_DETALLE.ITEM_DETALLE_IMAGEN_UNO, 
                            ITEM_DETALLE.ITEM_DETALLE_IMAGEN_DOS, 
                            ITEM_DETALLE.ITEM_DETALLE_IMAGEN_TRES, 
                            ITEM_DETALLE.ITEM_DETALLE_IMAGEN_CUATRO, 
                            ITEM_DETALLE.ITEM_DETALLE_STATUS, 
                            ITEM_DETALLE.ITEM_DETALLE_FECHA_FABRICACION, 
                            ITEM_DETALLE.ITEM_DETALLE_FECHA_VENCIMIENTO, 
                            ITEM_DETALLE.ITEM_DETALLE_OBSERVACION 
                        FROM ITEM_DETALLE 
                            LEFT OUTER JOIN ITEM ON ITEM_DETALLE.ITEM_DETALLE_ITEM_ID = ITEM.ITEM_ID 
                            LEFT OUTER JOIN RUBRO ON ITEM.ITEM_RUBRO_ID = RUBRO.RUBRO_ID 
                            LEFT OUTER JOIN CATEGORIA ON ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID = CATEGORIA.CATEGORIA_ID 
                            LEFT OUTER JOIN UNIDAD ON ITEM_DETALLE.ITEM_DETALLE_UNIDAD_ID = UNIDAD.UNIDAD_ID 
                        WHERE ITEM.ITEM_RUBRO_ID = ${parseInt(id)}`, 
        (err, results) => { 
        //connection.query(queries.getItemsRubroId, [id], (err, results) => {
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

        connection.query(`SELECT 
                            ITEM_DETALLE.ITEM_DETALLE_ID, 
                            ITEM_DETALLE.ITEM_DETALLE_SUCURSAL_ID, 
                            ITEM_DETALLE.ITEM_DETALLE_ITEM_ID, 
                            ITEM.ITEM_DESCRIPCION, 
                            ITEM.ITEM_RUBRO_ID, 
                            RUBRO.RUBRO_DESCRIPCION, 
                            ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID, 
                            CATEGORIA.CATEGORIA_DESCRIPCION, 
                            ITEM_DETALLE.ITEM_DETALLE_STOCK_MINIMO, 
                            ITEM_DETALLE.ITEM_DETALLE_UNIDAD_ID, 
                            UNIDAD.UNIDAD_DESCRIPCION, 
                            ITEM_DETALLE.ITEM_DETALLE_MARCA, 
                            ITEM_DETALLE.ITEM_DETALLE_IMAGEN_UNO, 
                            ITEM_DETALLE.ITEM_DETALLE_IMAGEN_DOS, 
                            ITEM_DETALLE.ITEM_DETALLE_IMAGEN_TRES, 
                            ITEM_DETALLE.ITEM_DETALLE_IMAGEN_CUATRO, 
                            ITEM_DETALLE.ITEM_DETALLE_STATUS, 
                            ITEM_DETALLE.ITEM_DETALLE_FECHA_FABRICACION, 
                            ITEM_DETALLE.ITEM_DETALLE_FECHA_VENCIMIENTO, 
                            ITEM_DETALLE.ITEM_DETALLE_OBSERVACION 
                        FROM ITEM_DETALLE 
                            LEFT OUTER JOIN ITEM ON ITEM_DETALLE.ITEM_DETALLE_ITEM_ID = ITEM.ITEM_ID 
                            LEFT OUTER JOIN RUBRO ON ITEM.ITEM_RUBRO_ID = RUBRO.RUBRO_ID 
                            LEFT OUTER JOIN CATEGORIA ON ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID = CATEGORIA.CATEGORIA_ID 
                            LEFT OUTER JOIN UNIDAD ON ITEM_DETALLE.ITEM_DETALLE_UNIDAD_ID = UNIDAD.UNIDAD_ID 
                        WHERE ITEM_DETALLE.ITEM_DETALLE_CATEGORIA_ID = ${parseInt(id)}`, 
        (err, results) => {
        //connection.query(queries.getItemsCategoriaId, [id], (err, results) => {
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