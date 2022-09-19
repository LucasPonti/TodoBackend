import mongoose from "mongoose";

const estudianteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    dni: { type: String, required: true, unique: true },
    curso: { type: String, required: true },
    nota: { type: Number, required: true },
    ingreso: {type: Boolean, default: false}
})

const EstudiantesModel = mongoose.model('estudiantes', estudianteSchema)
const URL= "mongodb+srv://LucasPonti:36345079@cluster0.1fhrqtq.mongodb.net/colegio?retryWrites=true&w=majority"

await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log('Base de datos conectada');

try {
    //Actualizar Dni
    console.log("Actualizar el DNI")
    const estudianteActualizado = await EstudiantesModel.updateOne(
        {nombre: 'Lucas', apellido: 'Blanco'}, 
        {dni: '20355875'}
    )
    console.log(estudianteActualizado)
    //Agregar Camopo Ingreso
    console.log('Agregar Campo Ingreso');
    const estudianteIngresoActualizado = await EstudiantesModel.updateMany({}, {ingreso: false})
    console.log(estudianteIngresoActualizado)

    //Ingreso true estudiantes 1 a
    console.log('Modificar Valor Ingreso');
    const estudianteIngresoTrueActualizado = await EstudiantesModel.updateMany({curso: '1A'}, {ingreso: true})
    console.log(estudianteIngresoTrueActualizado)

    //Listar Estudiantes aprobados
    console.log('Estudiantes aprobados')
    const estudiantesAprobados = await EstudiantesModel.find({nota: {$gte: 4}},{_id: 0, __v: 0})
    console.log(estudiantesAprobados)

    //Listar Contenido sin campo __v junto con fecha
    console.log('Listar Contenido de la coleccion estudiantes');
    const estudiantesTodos = await EstudiantesModel.find({},{__v: 0})
    
    estudiantesTodos.forEach(estudiante => {
        console.log(
            JSON.stringify(estudiante), 
            '-> Fecha creacion: ',
            new Date(estudiante._id.getTimestamp()).toLocaleString()
        )
    })


} catch (error) {
    console.log('Hubo un error', error)
} finally{
    await mongoose.disconnect();
}
