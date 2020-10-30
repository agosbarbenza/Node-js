const mongo = require('mongoose');
mongo.connect('mongodb://localhost:27017/bd_inmobiliaria', {useNewUrlParser: true, useUnifiedTopology: true});

const Inmuebles = mongo.model('Inmuebles', {
    tipoOperacion: String,
    tipoInmueble: String,
    direccion: Object,
    fotos: Array,
    ambientes: Number,
    metrosCuadrados: Number,
    descripcion: String,
    datosPropietario: Object 
});


// ------------------------------Crear registros-------------------------------//
let nuevo1 = {
    tipoOperacion: "Venta",
    tipoInmueble: "Departamento",
    direccion: {
        calle: "Charlone",
        numero: 555,
        piso: 1,
        depto: "B",
        barrio: "Chacarita"
    },
    fotos: ["https://a0.muscache.com/pictures/3cdec86a-5ff7-4674-a2b5-d1b33bbdc0ad.jpg", "https://a0.muscache.com/pictures/30883b52-58e8-43e0-84d6-42a2e14bd0a1.jpg"],
    ambientes: 2,
    metrosCuadrados: 15,
    descripcion: "Departamento de 2 ambientes con buena iluminacion, expensas bajas",
    datosPropietario: {
        nombre: "Agostina",
        apellido: "Barbenza",
        telefono: "1566667777",
    } 
}

/*const objeto1 = new Inmuebles(nuevo1);
objeto1.save();*/

let nuevo2 = {
    tipoOperacion: "Alquiler",
    tipoInmueble: "Casa",
    direccion: {
        calle: "Av. Melian",
        numero: 2345,
        piso: 0,
        depto: "Sin depto",
        barrio: "Coghlan"
    },
    fotos: ["https://mapio.net/images-p/65508662.jpg", "https://static.tokkobroker.com/pictures/78488122424656031584282342536150169562845822102859633312394918900123464436178.jpg"],
    ambientes: 10,
    metrosCuadrados: 200,
    descripcion: "Hermosa casa con jardín y pileta, amplios ambientes",
    datosPropietario: {
        nombre: "Bilbo",
        apellido: "Bolsón",
        telefono: "1565467677",
    } 
}

/*const objeto2 = new Inmuebles(nuevo2);
objeto2.save();*/

// ------------------------------Eliminar registros-------------------------------//

Inmuebles.deleteOne({tipoOperacion: 'Venta'}, function(err,res){
    console.log(res);
})


// ------------------------------Modificar registros-------------------------------//

/*Inmuebles.updateOne({ambientes: 10}, {ambientes: 9, pileta: "Si"}, function(err,res){
    console.log(res);
}); */

/*// -----------------------------Listar todos los registros-------------------------//
 Inmuebles.find().then(function(resultados){
     console.log(resultados);
 });*/