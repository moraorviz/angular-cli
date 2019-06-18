import { Component } from '@angular/core';

@Component({
  selector: 'LoginComponente',
  templateUrl: './login.component.html'
})
export class LoginComponent {
    email: string;
    password: string;
    
    identificarUsuario(): void {
      console.log("Email:"+this.email+" Password:"+this.password);
    }; 
}