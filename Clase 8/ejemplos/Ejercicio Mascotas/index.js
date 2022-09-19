const express = require('express');
const {Router} = express;

const app = express();

app.use(express.static('public'));




/*----------------- ROUTER PERSONAS -------------*/
const routerPersonas = new Router();
routerPersonas.use(express.json())
routerPersonas.use(express.urlencoded({extended: true}))

const personas = []

routerPersonas.get('/' , (req, res) => {
    res.json(personas);
});

routerPersonas.post('/' , (req, res) => {
    personas.push(req.body);
    res.json(req.body);
})

/*---------------- ROUTER MASCOTAS ------------ */
const routerMascotas = new Router();
routerMascotas.use(express.json())
routerMascotas.use(express.urlencoded({extended: false}));

const mascotas = []


routerMascotas.get('/' , (req, res) => {
    res.json(mascotas);
});

routerMascotas.post('/' , (req, res) => {
    mascotas.push(req.body);
    res.json(req.body);
})
/*--------------- CARGO LOS ROUTERS ----------------*/ 
app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);

/*---------------- SERVER LISTEN -------------------*/
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
app.use('/api' , routerPersonas, routerMascotas);
