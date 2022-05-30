import { ajax } from "./http.js";


export function obtenerGestores(callback: any) {
    // petición para autenticarnos como gestor
    ajax({
        url: 'http://127.0.0.1:8085/login/gestor/',
        method: 'POST',
        body: 'usuario=gestor1&password=gestor1',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'

        }
    }, (datos: any) => {
        // Tranformar objeto
        const objetoJSON = JSON.parse(datos);

        const token = objetoJSON.data.token;
        console.log(token);


        // // Petición para obtener gestores
        ajax({
            url: 'http://127.0.0.1:8085/gestores/',
            method: 'GET',
            body: 'usuario=gestor1&password=gestor1',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${token}`
            }
        }, (datos2: any) => {
            const objetoJSON2 = JSON.parse(datos2);
            callback(objetoJSON2.data);
        });

    });
}