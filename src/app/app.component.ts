import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Component } from '@angular/core';

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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule { }