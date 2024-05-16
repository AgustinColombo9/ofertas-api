import { connection, mysql } from '../database/connection.js'
//import { getConnection, sql } from '../database/connection.js'
import { queries } from "../database/querys.js";

export const newInmueble = async (req, res) => {
    try {
        const { 
            inmueble_descripcion, 
            inmueble_direccion, 
            inmueble_ciudad_id, 
            inmueble_homologado, 
            inmueble_numero_habilitacion, 
            inmueble_tipo_inmueble_id, 
            inmueble_status, 
            inmueble_servicio_id, 
            inmueble_categoria, 
            inmueble_habitaciones, 
            inmueble_plantas, 
            inmueble_camas_dobles, 
            inmueble_camas_simples, 
            inmueble_ropa_blanca, 
            inmueble_toallas, 
            inmueble_adultos, 
            inmueble_ninios, 
            inmueble_cocina, 
            inmueble_tipo_pension_id, 
            inmueble_microhondas, 
            inmueble_cafetera, 
            inmueble_refrigerador, 
            inmueble_lavarropa, 
            inmueble_caja_fuerte, 
            inmueble_banios, 
            inmueble_cochera, 
            inmueble_cochera_autos, 
            inmueble_pileta, 
            inmueble_gimnasio, 
            inmueble_spa, 
            inmueble_parque_juegos, 
            inmueble_mascota, 
            inmueble_wifi, 
            inmueble_tv, 
            inmueble_alarma, 
            inmueble_calefaccion, 
            inmueble_aire_acondicionado, 
            inmueble_cancelacion_gratis, 
            inmueble_reserva_tarjeta, 
            inmueble_pago_adelantado, 
            inmueble_imagen_uno, 
            inmueble_imagen_dos, 
            inmueble_imagen_tres, 
            inmueble_imagen_cuatro, 
            inmueble_imagen_cinco,
            inmueble_usuario_id 
        } = req.body;

        let sqlSentence = `INSERT INTO INMUEBLE (INMUEBLE_DESCRIPCION, INMUEBLE_DIRECCION, INMUEBLE_CIUDAD_ID, INMUEBLE_HOMOLOGADO, INMUEBLE_NUMERO_HABILITACION, INMUEBLE_TIPO_INMUEBLE_ID, INMUEBLE_STATUS, INMUEBLE_SERVICIO_ID, INMUEBLE_CATEGORIA, INMUEBLE_HABITACIONES, INMUEBLE_PLANTAS, INMUEBLE_CAMAS_DOBLES, INMUEBLE_CAMAS_SIMPLES, INMUEBLE_ROPA_BLANCA, INMUEBLE_TOALLAS, INMUEBLE_ADULTOS, INMUEBLE_NINIOS, INMUEBLE_COCINA, INMUEBLE_TIPO_PENSION_ID, INMUEBLE_MICROHONDAS, INMUEBLE_CAFETERA, INMUEBLE_REFRIGERADOR, INMUEBLE_LAVARROPA, INMUEBLE_CAJA_FUERTE, INMUEBLE_BANIOS, INMUEBLE_COCHERA, INMUEBLE_COCHERA_AUTOS, INMUEBLE_PILETA, INMUEBLE_GIMNASIO, INMUEBLE_SPA, INMUEBLE_PARQUE_JUEGOS, INMUEBLE_MASCOTA, INMUEBLE_WIFI, INMUEBLE_TV, INMUEBLE_ALARMA, INMUEBLE_CALEFACCION, INMUEBLE_AIRE_ACONDICIONADO, INMUEBLE_CANCELACION_GRATIS, INMUEBLE_RESERVA_SIN_TARJETA, INMUEBLE_PAGO_ADELANTADO, INMUEBLE_IMAGEN_UNO, INMUEBLE_IMAGEN_DOS, INMUEBLE_IMAGEN_TRES, INMUEBLE_IMAGEN_CUATRO, INMUEBLE_IMAGEN_CINCO, INMUEBLE_USUARIO_ID)
        VALUES (${inmueble_descripcion} , ${inmueble_direccion}, ${inmueble_ciudad_id}, ${inmueble_homologado}, ${inmueble_numero_habilitacion}, ${inmueble_tipo_inmueble_id}, ${inmueble_status}, ${inmueble_servicio_id}, ${inmueble_categoria}, ${inmueble_habitaciones}, ${inmueble_plantas}, ${inmueble_camas_dobles}, ${inmueble_camas_simples}, ${inmueble_ropa_blanca}, ${inmueble_toallas}, ${inmueble_adultos}, ${inmueble_ninios}, ${inmueble_cocina}, ${inmueble_tipo_pension_id}, ${inmueble_microhondas}, ${inmueble_cafetera}, ${inmueble_refrigerador}, ${inmueble_lavarropa}, ${inmueble_caja_fuerte}, ${inmueble_banios}, ${inmueble_cochera}, ${inmueble_cochera_autos}, ${inmueble_pileta}, ${inmueble_gimnasio}, ${inmueble_spa}, ${inmueble_parque_juegos}, ${inmueble_mascota}, ${inmueble_wifi}, ${inmueble_tv}, ${inmueble_alarma}, ${inmueble_calefaccion}, ${inmueble_aire_acondicionado}, ${inmueble_cancelacion_gratis}, ${inmueble_reserva_tarjeta}, ${inmueble_pago_adelantado}, ${inmueble_imagen_uno}, ${inmueble_imagen_dos}, ${inmueble_imagen_tres}, ${inmueble_imagen_cuatro}, ${inmueble_imagen_cinco}, ${inmueble_usuario_id})`

        // Ejecuta la consulta SQL de inserción
        connection.query(sqlSentence, 
        //connection.query(queries.newInmueble, [inmueble_descripcion, inmueble_direccion, inmueble_ciudad_id, inmueble_homologado, inmueble_numero_habilitacion, inmueble_tipo_inmueble_id, inmueble_status, inmueble_servicio_id, inmueble_categoria, inmueble_habitaciones, inmueble_plantas, inmueble_camas_dobles, inmueble_camas_simples, inmueble_ropa_blanca, inmueble_toallas, inmueble_adultos, inmueble_ninios, inmueble_cocina, inmueble_tipo_pension_id, inmueble_microhondas, inmueble_cafetera, inmueble_refrigerador, inmueble_lavarropa, inmueble_caja_fuerte, inmueble_banios, inmueble_cochera, inmueble_cochera_autos, inmueble_pileta, inmueble_gimnasio, inmueble_spa, inmueble_parque_juegos, inmueble_mascota, inmueble_wifi, inmueble_tv, inmueble_alarma, inmueble_calefaccion, inmueble_aire_acondicionado, inmueble_cancelacion_gratis, inmueble_reserva_tarjeta, inmueble_pago_adelantado, inmueble_imagen_uno, inmueble_imagen_dos, inmueble_imagen_tres, inmueble_imagen_cuatro, inmueble_imagen_cinco, inmueble_usuario_id], (err, results) => {
            (err, results) => { 
                //connection.query(queries.getCategoriasRubroId, [parseInt(id)], (err, results) => { 
                if (err) {
                    console.error('Error al ejecutar la consulta:', err);
                    return;
                }

                console.log('Resultados de la consulta:', results);

                res.status(200).json(results);
            }
        );


    } catch (error) {
        console.error('Error al guardar nuevo inmueble:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const updateInmueble = async (req, res) => {
    
}

export const getInmuebles = async (req, res) => {
    try {
        connection.query(queries.getInmuebles, (err, results) => {
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

export const getInmueblesFiltroUno = async (req, res) => {
    try {
        let fechaDesde = req.params.fecha_desde; 
        let fechaHasta = req.params.fecha_hasta;
        let ciudadId = req.params.ciudad_id; 
        let habitaciones = req.params.habitaciones;
        let adultos = req.params.adultos;
        let ninios = req.params.ninios;

        console.log('HOSPEDAJE FILTRO: '+fechaDesde+' - '+fechaHasta+' - '+ciudadId+' - '+habitaciones+' - '+adultos+' - '+ninios)

        let adultosClause = adultos !== '0' ? `AND INMUEBLE_ADULTOS >= ${parseInt(adultos)} ` : '';
        let niniosClause = ninios !== '0' ? `AND INMUEBLE_NINIOS = ${parseInt(ninios)} ` : '';

        let sqlSentence = `SELECT INMUEBLE_ID, 
                            INMUEBLE_DESCRIPCION, 
                            INMUEBLE_DIRECCION, 
                            INMUEBLE_CIUDAD_ID, 
                            CIUDAD.CIUDAD_PROVINCIA_ID, 
                            PROVINCIA.PROVINCIA_DESCRIPCION, 
                            CIUDAD.CIUDAD_DESCRIPCION, 
                            INMUEBLE_HOMOLOGADO, 
                            INMUEBLE_NUMERO_HABILITACION, 
                            INMUEBLE_TIPO_INMUEBLE_ID, 
                            INMUEBLE_TIPO.INMUEBLE_TIPO_DESCRIPCION, 
                            INMUEBLE_STATUS,  
                            INMUEBLE.INMUEBLE_SERVICIO_ID, 
                            INMUEBLE_SERVICIO.INMUEBLE_SERVICIO_DESCRIPCION, 
                            INMUEBLE_CATEGORIA, 
                            INMUEBLE_HABITACIONES, 
                            INMUEBLE_PLANTAS, 
                            INMUEBLE_CAMAS_DOBLES, 
                            INMUEBLE_CAMAS_SIMPLES, 
                            INMUEBLE_ROPA_BLANCA, 
                            INMUEBLE_TOALLAS, 
                            INMUEBLE_ADULTOS, 
                            INMUEBLE_NINIOS, 
                            INMUEBLE_COCINA, 
                            INMUEBLE_TIPO_PENSION_ID, 
                            INMUEBLE_PENSION.INMUEBLE_PENSION_DESCRIPCION, 
                            INMUEBLE_MICROHONDAS, 
                            INMUEBLE_CAFETERA, 
                            INMUEBLE_REFRIGERADOR, 
                            INMUEBLE_LAVARROPA, 
                            INMUEBLE_CAJA_FUERTE, 
                            INMUEBLE_BANIOS, 
                            INMUEBLE_COCHERA, 
                            INMUEBLE_COCHERA_AUTOS, 
                            INMUEBLE_PILETA, 
                            INMUEBLE_GIMNASIO, 
                            INMUEBLE_SPA, 
                            INMUEBLE_PARQUE_JUEGOS, 
                            INMUEBLE_MASCOTA, 
                            INMUEBLE_WIFI, 
                            INMUEBLE_TV, 
                            INMUEBLE_ALARMA, 
                            INMUEBLE_CALEFACCION, 
                            INMUEBLE_AIRE_ACONDICIONADO, 
                            INMUEBLE_CANCELACION_GRATIS, 
                            INMUEBLE_RESERVA_SIN_TARJETA, 
                            INMUEBLE_PAGO_ADELANTADO, 
                            INMUEBLE_IMAGEN_UNO,
                            INMUEBLE_IMAGEN_DOS, 
                            INMUEBLE_IMAGEN_TRES, 
                            INMUEBLE_IMAGEN_CUATRO, 
                            INMUEBLE_IMAGEN_CINCO, 
                            INMUEBLE_USUARIO_ID, 
                            USUARIO.USUARIO_NOMBRE, 
                            USUARIO.USUARIO_APELLIDO, 
                            USUARIO.USUARIO_CELULAR 
                        FROM INMUEBLE 
                            LEFT OUTER JOIN CIUDAD ON INMUEBLE.INMUEBLE_CIUDAD_ID = CIUDAD.CIUDAD_ID 
                            LEFT OUTER JOIN PROVINCIA ON CIUDAD.CIUDAD_PROVINCIA_ID = PROVINCIA.PROVINCIA_ID 
                            LEFT OUTER JOIN INMUEBLE_SERVICIO ON INMUEBLE.INMUEBLE_SERVICIO_ID = INMUEBLE_SERVICIO.INMUEBLE_SERVICIO_ID 
                            LEFT OUTER JOIN USUARIO ON INMUEBLE.INMUEBLE_USUARIO_ID = USUARIO.USUARIO_ID 
                            LEFT OUTER JOIN INMUEBLE_TIPO ON INMUEBLE.INMUEBLE_TIPO_INMUEBLE_ID = INMUEBLE_TIPO.INMUEBLE_TIPO_ID 
                            LEFT OUTER JOIN INMUEBLE_PENSION ON INMUEBLE.INMUEBLE_TIPO_PENSION_ID = INMUEBLE_PENSION.INMUEBLE_PENSION_ID 
                        WHERE INMUEBLE_ID NOT IN (
                            SELECT DISTINCT A.ALQUILER_INMUEBLE_ID
                            FROM ALQUILER A
                            WHERE (
                                (${fechaDesde} BETWEEN A.ALQUILER_FECHA_DESDE AND A.ALQUILER_FECHA_HASTA)
                                OR
                                (${fechaHasta} BETWEEN A.ALQUILER_FECHA_DESDE AND A.ALQUILER_FECHA_HASTA)
                                OR
                                (A.ALQUILER_FECHA_DESDE BETWEEN ${fechaDesde} AND ${fechaHasta})
                                OR
                                (A.ALQUILER_FECHA_HASTA BETWEEN ${fechaDesde} AND ${fechaHasta})
                            )
                        )
                        AND INMUEBLE_CIUDAD_ID = ${parseInt(ciudadId)}  
                        AND INMUEBLE_HABITACIONES >= ${parseInt(habitaciones)}  
                        AND INMUEBLE_STATUS = 1 ${adultosClause} ${niniosClause}`

        console.log('SQL: '+sqlSentence)

        connection.query(sqlSentence,
                         
            (err, results) => { 
            //connection.query(queries.getCategoriasRubroId, [parseInt(id)], (err, results) => { 
                if (err) {
                    console.error('Error al ejecutar la consulta:', err);
                    return;
                }

                console.log('Resultados de la consulta:', results);

                res.status(200).json(results);
            }
        );

        // Cerrar la conexión cuando hayas terminado de usarla
        //connection.end();
    } catch (error) {
        console.error('Error al obtener categorias de rubro:', error); // Registra el error completo en la consola del servidor
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
