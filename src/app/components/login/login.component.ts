import { Router } from '@angular/router';
import { BancoService } from './../../banco.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private bancoService :BancoService,
    private router: Router
    ) { }
  
  authMessage = false;
  

  ngOnInit(): void {
  }

  async onLogin(user: HTMLInputElement, password: HTMLInputElement) {
   
    const usuario: string = user.value;
    const constraseña: string = password.value;

    const auth = await this.bancoService.loginGestor(usuario, constraseña);
    console.log(auth);
  
    if (auth) {
      this.router.navigate(['gestores'])
    }

    if (!auth) {
      this.authMessage = true;
      
      setTimeout(() => {
        this.authMessage = false;
      }, 5000)
    }
    
  }


}
