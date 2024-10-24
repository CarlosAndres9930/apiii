import Router from "express";

const medicinaRoutes = Router();

import {
    getMedicina,
    addMedicina,
    deleteMedicina,
    updateMedicina
} from '../controllers/MedicinaController.js'; // Asegúrate de que la ruta sea correcta

medicinaRoutes.get('/', getMedicina); // Listar todas las medicinas
medicinaRoutes.post('/', addMedicina); // Añadir una medicina
medicinaRoutes.delete('/:id', deleteMedicina); // Eliminar una medicina
medicinaRoutes.put('/:id', updateMedicina); // Editar una medicina




export default medicinaRoutes;
