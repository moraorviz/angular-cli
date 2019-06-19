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

    eliminarMensaje(id){
        var resObservable = this.mensajesService.eliminarMensaje(id);
        resObservable.subscribe(
            res => { 
                this.mensajes = this.mensajes.filter(mensaje => mensaje._id != id);
                // filtramos y conservamos los mensajes con _id distinto al borrado
            },
            error => {
                console.log("Error");
            }
          );
    };
}