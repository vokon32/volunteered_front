import { Injectable } from '@angular/core';
import { ABaseTableHttpService } from './a-base-http-directive';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService extends ABaseTableHttpService {
    constructor() {
        super('User');
        
    }

    bindUsersToAppointment(appointmentId: string, users: any[]){
      return this.httpClient.post(`${this.apiUrl}/${this.controllerName}/bindUsersToAppointment?appointmentId=${appointmentId}`, users);
    }

    markUser(appointmentId: string, user: any){
      return this.httpClient.post(`${this.apiUrl}/${this.controllerName}/markUser?appointmentId=${appointmentId}`, user);
    }

}
