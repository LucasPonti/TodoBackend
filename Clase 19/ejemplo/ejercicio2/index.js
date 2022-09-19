const mongoose = require('mongoose');

const estudiantesSchema = new mongoose.Schema({
    nombre: {type: String, required: true, max: 100},
    apellido: {type: String, required: true, max: 100},
    edad: {type: Number, required: true},
    dni: {type: String, required: true, unique: true},
    curso: {type: String, required: true},
    nota: {type: Number, required:  true}
})

const estudiantesModel = mongoose.model('estudiantes', estudiantesSchema);
const URL = 'mongodb://localhost/colegio';

await mongoose.connect(URL, {
    useNewUrlPsrser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Base de datos conectada');
    estudiantesModel.find({}).sort({nombre: 1})
    .then(estudiantes => {
        estudiantesModel.forEach(estudiante => {
            console.log(estudiante);            
        });
        return estudiantesModel.find({}).sort({edad: 1}).skip(1).limit(1);
    })
    .then(estudiantes => {
        estudiantes.forEach(estudiante => {
            console.log(estudiante)
        })
        return estudiantesModel.find({curso: '2A'})
    })
    .then(estudiantes => {
        estudiantes.forEach(estudiante => {
            console.log(estudiante);
        })
    })
})