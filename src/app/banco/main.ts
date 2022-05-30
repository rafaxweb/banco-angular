// // en funciones-gestor
// obtenerGestores((gestores) => {
//     mostrarGestores(gestores)
// } );

import { loginGestor, obtenerGestoresPromisify, obtenereGestorPorId } from "./funciones-gestor-promesa.js";
import { mostrarGestor } from "./mostrar.js";



// promesas
async function inicio() {

    // Loguearse. Devuelve una promesa
    const loginOk: boolean = await loginGestor("gestor1", 'gestor1');
    console.log(loginOk);
    
    // Si no hay login correcto
    if (!loginOk) {
        console.log('Autenticación incorrecta');
        return;
    }

    // ---------------------------------------- 
    // Si la autentificación es correcta:
    // ---------------------------------------- 

    const gestores = await obtenerGestoresPromisify(); // Adaptada a promesas
    //console.log(gestores);
    //mostrarGestores(gestores)

    const gestorID:any = await obtenereGestorPorId(1);
    mostrarGestor(gestorID);
    
}



inicio();




