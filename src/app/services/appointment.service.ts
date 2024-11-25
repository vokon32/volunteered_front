import { Injectable } from "@angular/core";
import { AppointmentHttpService } from "../http-services/appointment-http.service";
import { ABaseTableService } from "./a-base-service";

@Injectable()
export class AppointmentService extends ABaseTableService {

    constructor(private httpService: AppointmentHttpService) {
        super([
            { name: 'Номер', value: 'number' },
            { name: 'Фонд', value: 'fundName' },
            { name: 'Дата', value: 'date', canSort: true },
        ], httpService);
    }


    getNextNumber() {
        return this.httpService.getNextNumber();
    }
    bindNomenclaturesToAppointment(appointmentId: string, nomenclatures: any[]) {
        return this.httpService.bindNomenclaturesToAppointment(appointmentId, nomenclatures);
    }

    endAppointment(appointmentId: string){
        return this.httpService.endAppointment(appointmentId);
    }
    getResults(appointmentId: string){
        return this.httpService.getResults(appointmentId);
    }
}