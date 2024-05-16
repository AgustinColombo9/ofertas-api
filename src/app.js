import express from "express";
import morgan from "morgan";
// Routes
import usuarioRoutes from "./routes/usuario.routes";
import itemRoutes from './routes/item.routes';
import categoriaRoutes from './routes/categoria.routes';
import rubroRoutes from './routes/rubro.routes';
import ciudadRoutes from './routes/ciudad.routes';
import provinciaRoutes from './routes/provincia.routes'; 
import inmuebleRoutes from './routes/inmueble.routes';
import inmueblePensionRoutes from './routes/inmueblepension.routes';
import inmuebleServicioRoutes from './routes/inmuebleservicio.routes';
import inmuebleTipoRoutes from './routes/inmuebletipo.routes';

import config from "./config";
const cors = require('cors')

const app = express();

// Settings
app.set("port", config.port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(cors())
// permite reciber formatos JSON
//app.use(express.json());

// Routes
app.use(usuarioRoutes);
app.use(itemRoutes);
app.use(rubroRoutes);
app.use(categoriaRoutes);
app.use(ciudadRoutes);
app.use(provinciaRoutes);
app.use(inmuebleRoutes);
app.use(inmueblePensionRoutes);
app.use(inmuebleServicioRoutes);
app.use(inmuebleTipoRoutes)

export default app;