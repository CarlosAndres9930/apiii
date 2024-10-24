import mongoose, { version } from 'mongoose';

const { Schema } = mongoose;

const MedicinaSchema = new Schema({
    NombreMedicina    : {
        type: String,
        required: true
    },
    Cantidad: {
        type: String,
        required: true
    },
    Dosis: {
        type: String,
        required: true
    },
    HorarioAdministracion: {
        type: String,
        required: true
    },
    Estado: {
        type: String,
        required: true
    }
},
{
    versionKey: false 
}
);

const Medicina = mongoose.model('Medicina', MedicinaSchema,'medicinas');

export default Medicina;
