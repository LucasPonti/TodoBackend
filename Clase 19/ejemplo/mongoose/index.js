import mongoose, { connect } from "mongoose";
import * as model from "./models/usuario.js"

CRUD();

async function CRUD() {
    try {
        //Coneccion a base de datos
        const URL = 'mongodb://localhost:27017/ecommerce32065'
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada');

        //Create
        const user = {
            nombre: 'Lucas',
            apellido: 'Ponti',
            email: 'lucasponti22@gmail.com',
            usuario: 'Negruke',
            password: '36345079'
        };

        const userSaveModel = new model.users(user);
        const savedUser = await userSaveModel.save();
        console.log(savedUser);

        //Read
        const usersRead = await model.users.find({nombre: 'Lucas'});
        console.log(usersRead);

        //Update
        const updatedUser = await model.users.updateOne(
            {nombre: 'Lucas'}, {$set: {password: 555}}
            );

        console.log(updatedUser);
        

    } catch (error) {
        console.log(error);
    }
}