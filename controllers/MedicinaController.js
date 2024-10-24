import Medicina from '../models/medicina.js';

export async function getMedicina(req, res) {
    try {
        const medicina = await Medicina.find();
        res.json(medicina);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los empleados' }); // Manejo de errores
    }
}

export async function addMedicina(req, res) {
    try {
        const newMedicina = new Medicina(req.body);
        await newMedicina.save();
        res.status(201).json(newMedicina);
    } catch (error) {
        console.error(error); // Agrega esto para ver el error en la consola
        res.status(400).json({ message: 'Error al añadir medicina', error });
    }
}



export async function deleteMedicina(req, res) {
    try {
        const { id } = req.params;
        const deletedMedicina = await Medicina.findByIdAndDelete(id);
        if (!deletedMedicina) {
            return res.status(404).json({ message: 'Medicina no encontrada' }); // Manejo de caso no encontrado
        }
        res.json({ message: 'Empleado eliminado' }); // Responder confirmando eliminación
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la medicina' }); // Manejo de errores
    }
}

export async function updateMedicina(req, res) {
    try {
        const { id } = req.params;
        const updatedMedicina = await Medicina.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMedicina) {
            return res.status(404).json({ message: 'Medicina no encontrada' }); // Manejo de caso no encontrado
        }
        res.json(updatedMedicina); // Responder con el empleado actualizado
    } catch (error) {
        res.status(400).json({ message: 'Error al editar la medicina' }); // Manejo de errores
    }
}

