import express, { json } from 'express';
import dbConnection from '../database/config.js';
import 'dotenv/config';
import medicinaRoutes from '../routes/medicinaRoutes.js';
import cors from 'cors'

class Server {
    constructor() {
        this.app = express();
        this.listen();
        this.dbConnection();
        this.app.use(cors());
        this.pathMedicina = '/api/medicinas'; // Indica una ruta pública de una API 
        this.route();
    }

    async dbConnection() {
        try {
            await dbConnection();
            console.log('Base de datos conectada correctamente');
        } catch (error) {
            console.error('Error de conexión a la base de datos:', error);
        }
    }

    route() {
        this.app.use(json()); // Emplear json al req body
        this.app.use(this.pathMedicina, medicinaRoutes); // Usar .use para todas las rutas
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port: ${process.env.PORT}`);
        });
    }
}

export default Server; // Export the class Server
