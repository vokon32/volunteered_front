import { Injectable } from '@angular/core';
import { ABaseTableHttpService } from './a-base-http-directive';

@Injectable({
  providedIn: 'root',
})
export class AppointmentHttpService extends ABaseTableHttpService {
  constructor() {
    super('Appointment');

  }


  getNextNumber() {
    return this.httpClient.get(`${this.apiUrl}/${this.controllerName}/nextNumber`);
  }
  bindNomenclaturesToAppointment(appointmentId: string, nomenclatures: any[]) {
    return this.httpClient.post(`${this.apiUrl}/${this.controllerName}/bindNomenclaturesToAppointment?appointmentId=${appointmentId}`, nomenclatures);
  }
}
