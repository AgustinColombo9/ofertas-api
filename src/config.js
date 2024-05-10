import { config } from "dotenv";

config();

export default {
    host: process.env.DB_SERVER || "",
    port: process.env.DB_PORT || "3306", 
    database: process.env.DB_DATABASE || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "", 
    //uri: process.env.DB_URI || "" 
};
