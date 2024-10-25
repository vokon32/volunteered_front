import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { tap } from "rxjs";
import { AuthHttpService } from "../http-services/auth-http.service";
import { ABaseTableService } from "./a-base-service";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root',
})
export class AuthService  {
    
    constructor(private httpService: AuthHttpService, private router : Router) {
    }

    signup(data: any) {
        return this.httpService.signup(data);
    }

    login(data: any) {
        return this.httpService.login(data);
    }

    logout() {
       localStorage.removeItem('authUser');
       this.router.navigateByUrl('login');
    }

    isLoggedIn() {
        return localStorage.getItem('authUser') !== null;
    }

}