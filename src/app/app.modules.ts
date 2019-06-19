import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MensajesService } from './services/mensajes.service';
import { HttpModule } from '@angular/http'; 
import { MensajesComponent } from './mensajes/mensajes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',  component: LoginComponent },
      { path: 'login',  component: LoginComponent },
      { path: 'mensajes', component: MensajesComponent },
    ]),
    HttpModule
  ],
  providers: [MensajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
