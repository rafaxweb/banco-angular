import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() mostrarChat: boolean = true;

  ocultarChat() {
    setTimeout(() => {
      this.mostrarChat = true;
    }, 0)
    this.mostrarChat = false;
  }

}
