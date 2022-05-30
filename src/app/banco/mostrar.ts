import { Cliente } from './modelos/cliente';
import { Gestor } from './modelos/gestor';

// Gestores 
export function mostrarGestores(array: Gestor[]) {
    console.log("\nGestores:");
    array.forEach((gestor:any) => {
        console.log(' - - - '); // Separar gestores             
        mostrarGestor(gestor);
    });
}

// Clientes
export function mostrarClientes(array: Cliente[]) {
    console.log("\nClientes:")
    array.forEach((cliente:any) => {
        console.log(' - - - '); // Separar clientes
        mostrarCliente(cliente);
    });
}

export function mostrarGestor(gestor: Gestor[]) {
    for (const key in gestor) {
        console.log(`${key}: ${gestor[key]}`);
    }
}

export function mostrarCliente(cliente: Cliente[]) {
    for (const key in cliente) {
        console.log(`${key}: ${cliente[key]}`);
    }
}