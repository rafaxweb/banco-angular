import { Router } from '@angular/router';
import { BancoService } from './../../banco.service';
import { Gestor } from './../../banco/modelos/gestor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestores',
  templateUrl: './gestores.component.html',
  styleUrls: ['./gestores.component.css']
})
export class GestoresComponent implements OnInit {

  gestores: Gestor[] = [];
  agregarGestorRespuesta: boolean = true;

  constructor(private bancoService: BancoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerGestores();
  }

  async obtenerGestores() {
    const gestores = await this.bancoService.obtenerGestoresPromisify();
    this.gestores = gestores;
  }

  async onAgregarGestor(user: HTMLInputElement, pass: HTMLInputElement, email: HTMLInputElement) {
    const usuario:string = user.value;
    const contra:string = pass.value;
    const correo:string = email.value;

    const gestor:Gestor = {
      usuario: usuario,
      password: contra,
      correo: correo,
    }
    
    const respuesta = await this.bancoService.agregarGestor(gestor);
    
    if (!respuesta) {
      this.agregarGestorRespuesta = false;
    }

    else if (respuesta) {
      this.agregarGestorRespuesta = true;
      window.location.reload();
    }
  }
}
