const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://agosb:bilbo22@localhost:3306/bandas');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Servidor iniciado");
})

//Mostrar todas las canciones de la base de datos

app.get('/canciones', (req, res)=>{
    sequelize.query('SELECT * FROM canciones',
    {type: sequelize.QueryTypes.SELECT}).then(function(resultados){
        console.log(resultados);
        res.json(resultados);
    }); 
})

//Buscar canciones por su nombre

app.get('/canciones/:nombre', (req, res)=>{
    let name = req.params.nombre; 
    sequelize.query('SELECT * FROM canciones WHERE nombre = :nombre',
    {replacements: {nombre : name}, type: sequelize.QueryTypes.SELECT}).then(function(resultados){
        console.log(resultados);
        res.json(resultados);
    }); 
})

// AGREGAR UNA CANCION A LA BASE DE DATOS A TRAVES DEL BODY

app.post('/canciones', (req, res)=>{
    console.log(req.body);
    const {nombre, duracion, album, banda} = req.body;
    sequelize.query('INSERT INTO canciones (nombre, duracion, album, banda) VALUES (:nombre, :duracion, :album, :banda)',
{replacements: {nombre : nombre, duracion: duracion, album: album, banda: banda}}).then(function(resultados){
    res.sendStatus(200);
    console.log(resultados);
})
});


// Eliminar una canción por el ID

app.delete('/canciones/:id', (req, res)=>{
    const id = req.params.id; 
    sequelize.query('DELETE FROM canciones WHERE id = :id',
{replacements: {id : id}}).then(function(resultados){
    res.sendStatus(200);
    console.log(resultados);
})

});

//Modificar una canción por su ID

app.put('/canciones/:id', (req,res)=>{
    const id = req.params.id;
    const {nombre, duracion, album, banda} = req.body; 
    sequelize.query('UPDATE canciones SET nombre= :nombre, duracion = :duracion, album= :album, banda = :banda WHERE id = :id',
{replacements: {nombre : nombre, duracion: duracion, album: album, banda: banda, id: id}}).then(function(resultados){
    res.sendStatus(200);
    console.log(resultados);
})
})




/*
 ======================== MÉTODO QUERY ======================== 
sequelize.query('SELECT * FROM bandas WHERE id > 3',
{type: sequelize.QueryTypes.SELECT}).then(function(resultados){
    console.log(resultados);
});*/


/* 
======================== REEMPLAZOS ========================
2 formas:
1) Utilizando ?

sequelize.query('SELECT * FROM bandas WHERE pais = ?',
{replacements: ['Inglaterra'], type: sequelize.QueryTypes.SELECT}).then(function(resultados){
    console.log(resultados);
});

2) Utilizando :campo

sequelize.query('SELECT * FROM bandas WHERE pais = :pais',
{replacements: {pais : 'Argentina'}, type: sequelize.QueryTypes.SELECT}).then(function(resultados){
    console.log(resultados);
});*/