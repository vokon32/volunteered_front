import { Injectable } from "@angular/core";
import { AppointmentHttpService } from "../http-services/appointment-http.service";
import { ABaseTableService } from "./a-base-service";

@Injectable()
export class AppointmentService extends ABaseTableService {

    constructor(private httpService: AppointmentHttpService) {
        super([
            { name: 'Дата', value: 'date', canSort: true },
            { name: 'Фонд', value: 'fundName' },
            { name: 'Номер', value: 'number' },
        ], httpService);
    }


    getNextNumber() {
        return this.httpService.getNextNumber();
    }
    bindNomenclaturesToAppointment(appointmentId: string, nomenclatures: any[]) {
        return this.httpService.bindNomenclaturesToAppointment(appointmentId, nomenclatures);
    }
}