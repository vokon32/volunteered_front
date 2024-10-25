import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { enviroment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthHttpService{
    protected apiUrl: string = enviroment.apiUrl;
    protected controllerName: string = 'Auth';
    constructor(private httpClient : HttpClient) {
    }

    signup(data: any) {
        return this.httpClient.post(`${this.apiUrl}/${this.controllerName}/register`, data);
    }

    login(data: any) {
        return this.httpClient.post(`${this.apiUrl}/${this.controllerName}/login`, data)
            .pipe(take(1));
    }
}
