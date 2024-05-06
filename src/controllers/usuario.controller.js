import { getConnection, mysql } from '../database/connection.js'
import { queries } from "../database/querys.js";
/*const jwt = require ("jsonwebtoken");

const TOKEN_KEY = "x4TvnErxRETbVcqal5dqMI115eNlp5y"

export const veriFyToken = (req, res, next) => {
    const authHeader = req.header["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(authHeader);
    if(token ==null) {
        return res.status(401).send ("Token requerido");
    }
    else {
        jwt.verify(token, TOKEN_KEY, (err, user) => {
            if (err) return res.status(403).send ("Token invalido");
            console.log(user);
            req.user = user;
            next();
        });
    }
};
*/
/*
export const loginUsuario = async (req, res) => {
    const { email, password } = req.body;
    if( email == null || password == null ) {
        res.status(400).json({msg: 'Bad Request, please fill all fields'});
    }

    console.log('PARAMS: '+email + '  -  ' +password)

    try {
        const pool = await getConnection();    
        const result = await pool.request()
            .input("USUARIO_EMAIL", sql.VarChar, email)
            .input("USUARIO_PASSWORD", sql.VarChar, password)
            .query(queries.loginUsuario);
    
        if (result.recordset[0] != null) {
            const datos = {
                usuario_id: result.recordset[0].USUARIO_ID, 
                usuario_email: result.recordset[0].USUARIO_EMAIL, 
                usuario_dni: result.recordset[0].USUARIO_DNI, 
                usuario_username: result.recordset[0].USUARIO_USERNAME, 
                usuario_password: result.recordset[0].USUARIO_PASSWORD, 
                usuario_tipo_id: result.recordset[0].USUARIO_TIPO_ID, 
                usuario_status: result.recordset[0].USUARIO_STATUS, 
                usuario_cliente_id: result.recordset[0].CLIENTE_ID, 
                usuario_cliente_razon_social: result.recordset[0].CLIENTE_RAZON_SOCIAL, 
                usuario_cliente_celular: result.recordset[0].CLIENTE_CELULAR, 
                usuario_cliente_email: result.recordset[0].USUARIO_EMAIL, 
                usuario_cliente_estado_id: result.recordset[0].CLIENTE_ESTADO_ID, 
                usuario_token_notificacion: result.recordset[0].USUARIO_TOKEN_NOTIFICACION 
            }
    
           const token = jwt.sign(
                {usuario_id: datos.usuario_id, 
                usuario_email: datos.usuario_email, 
                usuario_dni: datos.usuario_dni, 
                usuario_username: datos.usuario_username, 
                usuario_password: datos.usuario_password, 
                usuario_tipo_id: datos.usuario_tipo_id, 
                usuario_status: datos.usuario_status, 
                usuario_cliente_id: datos.usuario_cliente_id, 
                usuario_cliente_razon_social: datos.usuario_cliente_razon_social, 
                usuario_cliente_celular: datos.usuario_cliente_celular, 
                usuario_cliente_email: datos.usuario_email, 
                usuario_cliente_estado_id: datos.usuario_cliente_estado_id, 
                usuario_token_notificacion: datos.usuario_token_notificacion}, 
                TOKEN_KEY,
                {expiresIn: "2h"}
           );
            let nDatos = {...datos, token};

            res.status(200).json(nDatos);
            //return res.status(200).json({msg: 'Acceso correcto.'});
        }
        else {
            //res.status(400).json({status: '400'});
            const datos = {
                usuario_id: 0, 
                usuario_email: "", 
                usuario_dni: "", 
                usuario_username: "", 
                usuario_password: "", 
                usuario_tipo_id: 0, 
                usuario_status: false, 
                usuario_cliente_id: 0, 
                usuario_cliente_razon_social: "", 
                usuario_cliente_celular: "", 
                usuario_cliente_email: "", 
                usuario_cliente_estado_id: 0, 
                usuario_token_notificacion: ""
            }
            res.status(200).json(datos);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
*/
export const getUsuarios = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getUsuarios);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};