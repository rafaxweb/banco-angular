import { ChatService } from './chat.service';
import { Gestor } from './banco/modelos/gestor';
import { Component, OnInit } from '@angular/core';
import { BancoService } from './banco.service';
import { loginGestor, obtenereGestorPorId, obtenerGestoresPromisify } from './banco/funciones-gestor-promesa';
import { mostrarGestor } from './banco/mostrar';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  gestores: Gestor[] = [];
  
  constructor(
    private bancoService: BancoService,
    ) {}

  ngOnInit(): void {
    this.obtenerGestores();

  }
  
  async obtenerGestores() {
    const gestores = await this.bancoService.obtenerGestoresPromisify();
    this.gestores = gestores
  }

}


// // en funciones-gestor
// obtenerGestores((gestores) => {
//     mostrarGestores(gestores)
// } );


// promesas
// async function inicio() {

//     // Loguearse. Devuelve una promesa
//     const loginOk = await loginGestor("gestor1", 'gestor1');
//     console.log(loginOk);
    
//     // Si no hay login correcto
//     if (!loginOk) {
//         console.log('Autenticación incorrecta');
//         return;
//     }

//     // ---------------------------------------- 
//     // Si la autentificación es correcta:
//     // ---------------------------------------- 

//     const gestores = await obtenerGestoresPromisify(); // Adaptada a promesas
//     //console.log(gestores);
//     //mostrarGestores(gestores)

//     const gestorID:any = await obtenereGestorPorId(1);
//     mostrarGestor(gestorID);
// }

// inicio();




