import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MensajesService {
    constructor(
        private http: Http,
    ) { }

    token;
    urlBase = "http://localhost:8081/api";
    
    identificarUsuario(email, password) {
        var url = this.urlBase + "/autenticar";
        var body = { "email" : email, "password" : password };
        var headers = new Headers();
        headers.append('Content-Type', 'application/JSON');
        
        var resObservable = this.http.post(url, body, { headers: headers });
        
        resObservable.subscribe(
            res => { 
                this.token = res.json().token; 
                console.log(this.token);
            },
            error => { 
                console.log(error.json());
            }  
         );
         return resObservable;
    };

    identificarUsuarioPro(email, password) {
        console.log("MensajesService e:"+email+ " p:"+password);
        
        var url = this.urlBase + "/autenticar";
        var body = { "email" : email, "password" : password };
        var headers = new Headers();
        headers.append('Content-Type', 'application/JSON');
        
        return this.http.post(url, body, { headers: headers })
            .toPromise().then(
                res => { 
                    this.token = res.json().token;
                    return true;
                 },
                error => {
                    return false;
                 }
           );
    };
}