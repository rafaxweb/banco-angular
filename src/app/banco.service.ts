import { Injectable } from '@angular/core';
import { ajax } from './banco/http';
import { Gestor } from './banco/modelos/gestor';
import { Respuesta } from './banco/modelos/respuesta';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  private servicioUrl = 'api';
  private usuario = 'gestor1';
  private contra = 'gestor1';

  constructor() {
    console.log('Constructor del servicio banco service');
    this.loginGestor(this.usuario ,this.contra).then(ok => {
      console.log('Autenticación:' ,ok);
      
    });
  }

  loginGestor(usuario: string, contraseña: string): Promise<boolean> {
    
    return new Promise((resolve, reject) => {
      ajax({
        url: `${this.servicioUrl}/login/gestor/`,
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

  /* Obtener gestores */
  obtenerGestoresPromisify(): Promise<Gestor[]> {

    return new Promise((resolve, reject) => {

      // petición para autenticarnos como gestor
      ajax({
        url: `${this.servicioUrl}/login/gestor/`,
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
          url: `${this.servicioUrl}/gestores/`,
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

  obtenereGestorPorId(id: number): Promise<Gestor> {

    return new Promise((resolve, reject) => {

      const token = localStorage.getItem('token');

      // petición para autenticarnos como gestor
      ajax({
        url: `${this.servicioUrl}/gestores/` + id,
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

  obtenerGestorPorUsuario(usuario: string): Promise<Gestor> {

    return new Promise((resolve, reject) => {

      const token = localStorage.getItem('token');

      // petición para obtener todos los gestores
      ajax({
        url: `${this.servicioUrl}/gestores/` + usuario,
        method: 'GET',
        cabeceras: {
          Authorization: `Basic ${token}`
        }
      }, (datos: any) => {
        const respuesta: Respuesta = JSON.parse(datos);
        const gestor: Gestor = respuesta.data;
        resolve(gestor);
      });
    });
  }

  agregarGestor(gestor: Gestor): Promise<boolean> {
    return new Promise((resolve, reject) => {
      
      const token = localStorage.getItem('token');
      ajax({
        url: `${this.servicioUrl}/gestores/`,
        method: 'POST', 
        cabeceras: {
          Authorization: `Basic ${token}`
        },
        body: JSON.stringify(gestor)
      }, () => {

      })

    });
  } 

}
