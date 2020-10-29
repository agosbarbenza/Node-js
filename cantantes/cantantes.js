const express = require('express');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());

server.listen(3000, ()=>{
    console.log("Servidor iniciado");
})

let cantantes = [
    {
        id: 1,
        nombre: "Jon",
        apellido: "Bon Jovi",
        fechaNacimiento: "02/03/1962",
        albumes: [
            {
                id: 1,
                titulo: "Keep the Faith",
                anio: 1992
            },
            {
                id: 2,
                titulo: "Sleepery when wet",
                anio: 1980
            }
        ]
    },
    {
        id: 2,
        nombre: "Bruce",
        apellido: "Dickinson",
        fechaNacimiento: "07/08/1958",
        albumes: [
            {
                id: 1,
                titulo: "The Number of the Beast",
                anio: 1982
            },
            {
                id: 2,
                titulo: "Fear of the Dark",
                anio: 1992
            },
            {
                id: 3,
                titulo: "Seventh son of a seventh son",
                anio: 1988
            }
        ]
    },
    {
        id: 3,
        nombre: "James",
        apellido: "Hetfield",
        fechaNacimiento: "03/08/1963",
        albumes: [
            {
                id: 1,
                titulo: "And justice for all",
                anio: 1988
            },
            {
                id: 2,
                titulo: "Ride the lightning",
                anio: 1984
            },
            {
                id: 3,
                titulo: "Kill 'em all",
                anio: 1983
            },
            {
                id: 4,
                titulo: "Master of puppets",
                anio: 1986
            },
        ]
    },
    {
        id: 4,
        nombre: "Dave",
        apellido: "Mustaine",
        fechaNacimiento: "13/09/1961",
        albumes: [
            {
                id: 1,
                titulo: "Rust in peace",
                anio: 1990
            },
            {
                id: 2,
                titulo: "Countdown to extinction",
                anio: 1992
            },
            {
                id: 3,
                titulo: "Endgame",
                anio: 2009
            },
            {
                id: 4,
                titulo: "Youthanasia",
                anio: 1994
            }
        ]
    },
    {
        id: 5,
        nombre: "Tarja",
        apellido: "Turunen",
        fechaNacimiento: "17/08/1977",
        albumes: [
            {
                id: 1,
                titulo: "Oceanborn",
                anio: 1998
            },
            {
                id: 2,
                titulo: "Century Child",
                anio: 2002
            },
            {
                id: 3,
                titulo: "Once",
                anio: 2004
            },
            {
                id: 4,
                titulo: "Dark Passion Play",
                anio: 2007

            }
        ]
    }
]

//Muestra el array de cantantes
server.get('/cantantes', (req, res)=>{
    res.json(cantantes);
})

//Busca al cantante segun el id ingresado.
server.get('/cantantes/:id', (req, res)=>{
    let id = req.params.id;
    let cantante = cantantes.find((c)=> 
    c.id == id);
    res.json(cantante);
})