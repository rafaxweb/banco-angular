import { mostrarClientes, mostrarGestores } from "./mostrar.js";

// --- --- Ejercicio 1, datos en datos.js --- --- //

// -- Medir tamaño -- //
const propiedades = Object.keys(gestor1)

for (let i = 0; i < propiedades.length; i++) {
    console.log(i)
}


// --- --- Ejercicio 2 --- --- //

// --- Recorrer arrays y mostrar propiedades de los objetos, mostrar.js --- //
mostrarClientes(clientes);
mostrarGestores(gestores);


// --- --- Ejercicio 3 --- --- //

// Convertir a JSON
const gestoresJSON = JSON.stringify(gestores);
const clientesJSON = JSON.stringify(clientes);
// Mostrar datos JSON
console.log(gestoresJSON);
console.log(clientesJSON);

// Volver a convertir a array
const gestoresArray = JSON.parse(gestoresJSON);
const clientesArray = JSON.parse(clientesJSON);
// Mostrar datos Array
console.log(gestoresArray);
console.log(clientesArray);
