import express from "express";
import morgan from "morgan";
// Routes
import usuarioRoutes from "./routes/usuario.routes";
import itemRoutes from './routes/item.routes';
import categoriaRoutes from './routes/categoria.routes';
import rubroRoutes from './routes/rubro.routes';

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

export default app;