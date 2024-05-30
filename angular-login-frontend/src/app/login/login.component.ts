import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AuthloginService } from '../authlogin.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private AuthloginService: AuthloginService
  ) {}
 
  username: string = ''
  password: string = ''
  camposIncompletos: boolean = false; 
  autenticacionIncorrecta: boolean = false; 
  mensajeExito: string = ''; 

  OnClick() {
    if (!this.username || !this.password) { 
      this.camposIncompletos = true;
      return; 
    }


    this.AuthloginService.autent_login_user(this.username, this.password).subscribe(
      response => {
        console.log('Autenticado correctamente', response);
        this.mensajeExito = 'Credenciales correctas, redirigiendo..';
        this.autenticacionIncorrecta = false;

        setTimeout(() => {
          this.router.navigate(['/homeView']);
        }, 1000);        
      },
      error => {
        console.error('Error en la autenticación', error);
        this.autenticacionIncorrecta = true;
      }
    );
  }
  onRegisterClick(event: Event) {
    event.preventDefault(); 
    this.router.navigate(['/register']); 
  }
}
