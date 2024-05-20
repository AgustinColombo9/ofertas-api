import { connection, mysql } from '../database/connection.js'
//import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const getOfertas = async (req, res) => {
    try {
        connection.query(queries.getOfertas, (err, results) => {
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
/*
export const getItemsCategoriaId= async (req, res) => {
    try {
        const id = req.params.id; 

        connection.query(`SELECT OFERTA_ID,
                            OFERTA_FECHA,
                            OFERTA_EMPAQUE_ID, 
                            EMPAQUE.EMPAQUE_DESCRIPCION, 
                            OFERTA_DESCRIPCION,
                            OFERTA_PRODUCTO_IMAGEN_UNO,
                            OFERTA_PRODUCTO_IMAGEN_DOS,
                            OFERTA_PRODUCTO_IMAGEN_TRES,
                            OFERTA_STATUS,
                            OFERTA_CANTIDAD,
                            OFERTA_DISPONIBLE,
                            OFERTA_MINIMO,
                            OFERTA_PRECIO_MINORISTA,
                            OFERTA_PRECIO_MAYORISTA,
                            OFERTA_USUARIO_ID,
                            USUARIO.USUARIO_RAZON_SOCIAL, 
                            OFERTA_LOCAL_DESCRIPCION, 
                            OFERTA_DOMICILIO_RETIRO, 
                            OFERTA_HORARIO_RETIRO, 
                            OFERTA_CELULAR 
                        FROM OFERTA 
                            LEFT OUTER JOIN EMPAQUE ON OFERTA.OFERTA_EMPAQUE_ID = EMPAQUE.EMPAQUE_ID 
                            LEFT OUTER JOIN USUARIO ON OFERTA.OFERTA_USUARIO_ID = USUARIO.USUARIO_ID 
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
*/
/*
export const getOfertas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .query(queries.getOfertas);

        res.status(200).json(result.recordset);
    } catch (error) {

        console.log("ERROR");

        res.status(500);
        res.send(error.message);
    }
};
*/