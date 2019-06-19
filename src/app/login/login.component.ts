import { Component } from '@angular/core';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'LoginComponente',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    private mensajesService: MensajesService,
  ) { }

  email: string;
  password: string;

  identificarUsuario(): void {
    var resObservable
      = this.mensajesService.identificarUsuario(this.email, this.password);

    resObservable.subscribe(
      res => {
        console.log("LoginComponent - Ir a la lista de mensajes");
      },
      error => {
        console.log("LoginComponent - Mensaje de error");
      }
    );
  };

  identificarUsuarioPro(){
    var promesa 
      = this.mensajesService.identificarUsuarioPro(this.email, this.password);
        
     promesa.then( 
        retorno => {
            if ( retorno ){
                console.log("Login Promesa- Ir a la lista de canciones");
            } else {
                console.log("Login Promesa - Mensaje de error");
            }
        }
    );      
}
}