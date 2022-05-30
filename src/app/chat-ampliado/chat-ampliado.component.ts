import { Component, Input, OnInit } from '@angular/core';
import { MensajeChat } from '../banco/modelos/mesajechat';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-ampliado',
  templateUrl: './chat-ampliado.component.html',
  styleUrls: ['./chat-ampliado.component.css']
})
export class ChatAmpliadoComponent implements OnInit {


  mensajes: Array<MensajeChat> = [];

  @Input() mostrarChat? = false;

  constructor(private chatSevice: ChatService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    // this.chatSevice.enviarMensaje('Estoy en app component');
    // }, 1000);
    this.escucharMensajes();
  }

  async escucharMensajes() {
    const fecha = new Date()
    const minutos = (fecha.getMinutes().toString().length === 1) ? '0' + fecha.getMinutes().toString() : fecha.getMinutes();
    let hora = (fecha.getHours().toString().length === 1) ? '0' + fecha.getHours().toString() : fecha.getHours();
    const horaFormateada = `${hora}:${minutos}>> `

    this.chatSevice.escuchar((mensaje: MensajeChat) => {
      this.mensajes.push({
        usuario: mensaje.usuario,
        texto: `${horaFormateada} (${mensaje.usuario}) ${mensaje.texto}`
      });
    });
  }

  onEnviar(mensaje: HTMLInputElement) {
    if (mensaje.value.length > 0) {

      this.chatSevice.enviarMensaje({
        usuario: "Rafa",
        texto: mensaje.value
      })
      mensaje.value = '';
    }
  }

  onEnviarEnter(mensaje: HTMLInputElement, eventoTeclado: KeyboardEvent) {
    if (eventoTeclado.key == "Enter") {
      this.onEnviar(mensaje);
    }
  }

  ocultarChat() {
    if (this.mostrarChat) {
      this.mostrarChat = false;
    } else {
      this.mostrarChat = true;
    }
  }

}
