import mongoose from 'mongoose'

const URL =  "mongodb+srv://LucasPonti:36345079@cluster0.1fhrqtq.mongodb.net/ecommerce?retryWrites=true&w=majority"

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: {type: String, unique: true}
})

const userModel = mongoose.model('usuarios', userSchema)

MongoAtlas();

async function MongoAtlas(){
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada')
    
        const users = await userModel.find({});
        console.log(users);
    
    } catch (error) {
        console.log('Error de coneccion')
    }
}
