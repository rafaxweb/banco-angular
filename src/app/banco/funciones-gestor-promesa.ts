import { Gestor } from './modelos/gestor';
import { Respuesta } from './modelos/respuesta';
import { ajax } from "./http";

const servicioUrl = '/api'

export function obtenerGestoresPromisify(): Promise<Gestor[]> {

    return new Promise((resolve, reject) => {

        // petición para autenticarnos como gestor
        ajax({
            url: `${servicioUrl}/login/gestor/`,
            method: 'POST',
            body: 'usuario=gestor1&password=gestor1',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            }
        }, (datos: any) => {
            // Tranformar objeto
            const objetoJSON = JSON.parse(datos);

            const token = localStorage.getItem("token");

            // // Petición para obtener gestores
            ajax({
                url: `${servicioUrl}/gestores/`,
                method: 'GET',
                body: 'usuario=gestor1&password=gestor1',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${token}`
                }
            }, (datos2: any) => {
                const objetoJSON2 = JSON.parse(datos2);
                resolve(objetoJSON2.data);
            });

        });

    });
}

export function loginGestor(usuario: string, contraseña: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        ajax({
            url: `${servicioUrl}/login/gestor/`,
            method: 'POST',
            body: `usuario=${usuario}&password=${contraseña}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }, (respuesta: any) => {

            const responseLogin: Respuesta = JSON.parse(respuesta);

            // Obtener el token
            const token = responseLogin.data.token;

            // Guardar el token en local storage
            localStorage.setItem("token", token);

            // Respuesta
            resolve(responseLogin.ok);
        })
    })
}

/* Forma complicada gestor por id
export function obtenereGestorPorId(id: number) {
    
    return new Promise((resolve, reject) => {

        // petición para autenticarnos como gestor
        ajax({
            url: `${servicioUrl}/login/gestor/`,
            method: 'POST',
            body: 'usuario=gestor1&password=gestor1',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'

            }
        }, (datos) => {
            // Tranformar objeto
            const objetoJSON = JSON.parse(datos);

            const token = localStorage.getItem("token");
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
            }, (datos2) => {
                
                const response: Respuesta = JSON.parse(datos2);

                response.data.forEach(gestor => {
                    if (gestor.id === id) {
                        resolve(gestor);
                    }
                });
            });
        });
    });
}
*/

export function obtenereGestorPorId(id: number): Promise<Gestor> {

    return new Promise((resolve, reject) => {

        const token = localStorage.getItem('token');

        // petición para autenticarnos como gestor
        ajax({
            url: `${servicioUrl}/gestores/` + id,
            method: 'GET',
            headers: {
                Authorization: `Basic ${token}`

            }
        }, (datos: any) => {
            // Tranformar objeto
            const response: Respuesta = JSON.parse(datos);

            // Devolver gestor
            resolve(response.data)

        });
    });
};
