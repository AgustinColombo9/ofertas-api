import express from "express";
import morgan from "morgan";
// Routes
import usuarioRoutes from "./routes/usuario.routes";
import config from "./config";

const app = express();

// Settings
app.set("port", config.port);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use(usuarioRoutes);

export default app;