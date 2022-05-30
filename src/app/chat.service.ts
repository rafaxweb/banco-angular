import { MensajeChat } from './banco/modelos/mesajechat';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  //private servidorWebSocket = 'ws://alejandrotour.ddns.net:8081'
  private servidorWebSocket = 'ws://localhost:3000'
  private ws: WebSocket;

  constructor() {
    console.log('Constructor del Chat');
    this.ws = new WebSocket(this.servidorWebSocket)
    this.ws.onopen = this.onOpen;
    this.ws.onclose = this.onClose;
  }

  private onOpen() {
    console.log('Conexión establecida con éxito');
  }

  private onClose() {
    console.log('Conexión cerrada');
  }

  enviarMensaje(mensaje: MensajeChat): void {
    this.ws.send(JSON.stringify(mensaje));
  }

  escuchar(callback: Function): void {
    this.ws.onmessage = (evento: MessageEvent) => {
      callback(JSON.parse(evento.data));
    }
  }
}
