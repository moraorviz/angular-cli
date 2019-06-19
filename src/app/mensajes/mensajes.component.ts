import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'mensajes',
  templateUrl: './mensajes.component.html'
})
export class MensajesComponent implements OnInit {
    constructor(
        private mensajesService: MensajesService,
    ) { }
    
    mensajes;

    ngOnInit(): void {
        console.log("onInit - inicio");

        var resObservable = this.mensajesService.getMensajes();
        resObservable.subscribe(
            res => { 
                this.mensajes = res.json();
                console.log(this.mensajes);
            },
            error => {
                console.log("Error");
            }
          );

        console.log("onInit - final");
    };
    
}