import mongoose from "mongoose";

const usersCollection = 'estudiantes';

const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true, max: 100},
    apellido: {type: String, required: true, max: 100},
    edad: {type: Number, required: true},
    dni: {type: String, required: true, unique: true},
    curso: {type: String, required: true},
    nota: {type: Number, required:  true}
});

export const students = mongoose.model(usersCollection, userSchema);