const mongo = require('mongoose');
/*mongo.connect('mongodb://localhost:27017/base_prueba', {useNewUrlParser: true, useUnifiedTopology: true});*/

 const Users = mongo.model('Users', {
     nombre: String,
     apellido: String,
     edad: Number
 });

 const Productos = mongo.model('Productos', {
     descripcion: String,
     precio: Number
 });

 /////////////////CREAR NUEVOS REGISTROS:

 /*let mis_datos = {nombre: "Juan", apellido: "Morena", edad: 27, direccion: {calle: "Acacia Avenue", numero: "22", ciudad: "Londres"}}
 const objeto_usuario = new Users(mis_datos);
 objeto_usuario.save();

 let mis_datos_productos = {descripcion: "Pepsi", precio: 100};
 const objeto_productos = new Productos(mis_datos_productos);
 objeto_productos.save();

 let mis_datos_productos2 = {descripcion: "Coca-Cola", precio: 120};
 const objeto_productos2 = new Productos(mis_datos_productos2);
 objeto_productos2.save();*/
 
 
 /////////////// LISTAR REGISTROS DE UNA COLECCION

 /*Users.find().then(function(resultados){
     console.log(resultados);
 });*/

 /////////////////Buscar todos los registros con un dato específico
 /*Users.find({nombre: 'Juan'}).then(function(resultados){
    console.log(resultados);
});*/

/////////////////Buscar registros en base a criterio específico. En este caso no es case sensitive, pero si hago un find común sí. OJO
 /*Users.find({nombre: new RegExp('Bil', 'i')}).then(function(resultados){
    console.log(resultados);
});*/

/////////////////Trae uno solo
 /*Users.findOne({nombre: 'Juan'}).then(function(resultados){
    console.log(resultados);
});*/

/******* Si quisiera modificar el campo nombre, una forma es: 
Users.findOne({nombre: 'Juan'}).then(function(resultados){
    console.log(resultados);
    resultados.nombre = "Juanito"; //accedo al objeto
    resultados.save();
});*/

//Otra forma de modificar:
//El primer parametro es el que quiero modificar, el segundo es el valor que quiero modificar en ese registro y  tambien puedo agregarle otro campo.El tercero es un callback.
/*Users.updateOne({nombre: 'Juan'}, {nombre: 'Juanete', edad: 28}, function(err,res){
    console.log(res);
}); */

/////////////Para borrar un registro. OOOOJOOOO CON ESTE
/*Users.deleteOne({nombre: 'Juanete'}, function(err,res){
    console.log(res);
})*/

 

