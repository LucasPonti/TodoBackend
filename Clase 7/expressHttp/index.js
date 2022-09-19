const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/mensajes', (req, res) => {
    console.log('HTTP GET');
    res.json({MSJ: "Hola Mundo"});
});

//query params opcionales
app.get('/api/mensajes-query-params',  (req, res) => {
    console.log('GET con query params');
    if (Object.entries(req.query).length > 0) {
        res.json({
            result: 'GET with query params',
            query: req.query
        })
    } else {
        res.json({
            result: 'GET all ok'
        });
    }
});

//path params
app.get('/api/mensajes/:id', (req, res) => {
    res.json({
        result: 'Recurso buscado',
        pathParam: req.params.id
    })
})


app.post('/api/mensajes', (req, res) => {
    res.json(req.body);
});

app.listen(8080);



