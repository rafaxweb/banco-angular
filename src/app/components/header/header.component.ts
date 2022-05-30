import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarChat: boolean = true;

  ocultarChat() {
    setTimeout(() => {
      this.mostrarChat = true;
    }, 0)
    this.mostrarChat = false;

  }
}
