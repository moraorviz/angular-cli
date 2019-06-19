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

        this.mensajes =  [
            {"_id": 1, "emisor" : "Jhon", "destino" : "Wick", "texto": "I do appear in Cyberpunk", "leido": "yes" },
            {"_id": 1, "emisor" : "Mortadelo", "destino" : "Filemón", "texto": "Nos llama el inspector", "leido": "no" },
        ];

        console.log("onInit - final");
    };
    
}