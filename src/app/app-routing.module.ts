import { NotfoundComponent } from './components/notfound/notfound.component';
import { GestoresComponent } from './components/gestores/gestores.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { ChatAmpliadoComponent } from './chat-ampliado/chat-ampliado.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'gestores', component: GestoresComponent },
  { path: 'mensajes', component: ChatAmpliadoComponent },
  { path: '**', component: NotfoundComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
