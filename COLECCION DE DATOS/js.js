// // declaracion de arrays
//                 //0       1        2
// let frutas = [" Mango", " fresas", " banano"];
// //mostrar datos 
// document.write("Fruta: "+frutas[0]+"<br>");
// //recorrer dtos de un array
// for(let x = 0; x < frutas.length; x++){
//     document.write("fruta -> "+frutas[x]+"<br>");
// }
// //declaracion de objetos 
// let verduras = {
//     //clave : valor 
//     v1 : "Tomate",
//     v2 : "Cebolla",
//     v3 : "Zanahoria"
// };
// //mostrar los datos 
// document.write("verduras: "+verduras.v2+"<br>")
// //recorrer un objeto
// for(let ref in verduras){
//     document.write("verduras --> "+verduras[clave]+"<br>")
// }

//sancocho de datos en arrays 
// let sancocho = [
//     "texto",
//     true 
//     9890,
//     function(){
//         return "Hola :)";
//     },
//     ["sancocho 1", 666, false],
//     {
//         s1 : "sancocho 2",
//         s2 : 777
//     }
// ]
// //mostrar datos 
// document.write("datos :"+ sancocho[0]+"<br>");
// document.write("datos :"+ sancocho[1]+"<br>");
// document.write("datos :"+ sancocho[2]+"<br>");
// document.write("datos :"+ sancocho[3]()+"<br>");
// document.write("datos :"+ sancocho[4][1]+"<br>");
// document.write("datos :"+ sancocho[5].s2+"<br>");

//sancocho de datos con objeto
// let sancocho2 = {
//     s1 : "texto" ,
//     s2 : 9890, 
//     s3 : true,
//     s4 : function(){
//         return "Hola :)";
//     },
//     s5 : ["sancocho 1", 9090, true],
//     s6 :{
//         ss1: "sancocho 2",
//         ss2: 56366373
//     }
// };

// //mostrar datos 
// document.write("dato :"+sancocho2.s1+"<br>");
// document.write("dato :"+sancocho2.s2+"<br>");
// document.write("dato :"+sancocho2.s3+"<br>");
// document.write("dato :"+sancocho2.s4()+"<br>");
// document.write("dato :"+sancocho2.s5[1]+"<br>");
// document.write("dato :"+sancocho2.s6.ss1+"<br>");

//otras formas de declarar objetos
// let verduras = {
//     v1 : "Tomate",
//     "v2" : "Cebolla",
//     23 : "Zanahoria"
// };
// document.write("dato : "+ verduras["v2"] +"<br>");

//metodos de los array
// let frutas = ["sandia","mango","banano","uva"]
// //propiedades

// //length -> indica cuantos datos hay en el arrays
// document.write("Frutas :"+frutas+"<br>")

// //metodo pop() --> elima el ultimo dato
// frutas.pop();
// document.write("frutas :"+frutas+"<br>");
// document.write("Total frutas: "+frutas.length+"<br>")

// //metodo shift() -> elimina el primer dato 
// frutas.shift();
// document.write("frutas: "+frutas+"<br>");
// document.write("Total frutas: "+frutas.length+"<br>");

// //metodo unshift() -> agrega un dato en primera posicion 
// frutas.unshift("kiwi");
// document.write("frutas: "+frutas+"<br>");
// document.write("Total frutas: "+frutas.length+"<br>");

// //metodo ciclo forEach() -> es un ciclo integrado en los arrays
// frutas.forEach(function( frutas, pos){
//     document.write(frutas+"<--------->"+pos+"<br>");
// })

// //metodo slice() -> seleccionas datos especificos
// let frutasSeleccionadas = frutas.slice(2,4);
// document.write("frutas: "+frutasSeleccionadas+"<br>");

// //metodo splice() -> elimina o reemplaza un dato de la lista
// let frutasEliminada = frutas.splice(2, 1);
// document.write("frutas :"+frutas+"<br>");







