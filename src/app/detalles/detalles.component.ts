import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MensajesService } from '../services/mensajes.service';

@Component({
    selector: 'detalles',
    templateUrl: './detalles.component.html'
})

export class DetallesComponent implements OnInit {
    constructor(
        private mensajesService: MensajesService,
        private route: ActivatedRoute
    ) { }

    mensaje = { "_id": 1, "emisor": "Emily", "destinatario": "Noel", "texto": "How are you, man?", "leido": "no" };

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            let id = params['id'];
            console.log(id);

            var resObservable = this.mensajesService.getMensaje(id);
            resObservable.subscribe(
                res => {
                    this.mensaje = res.json();
                },
                error => {
                    console.log("Error");
                }
            );
        });
    }
}
