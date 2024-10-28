import { Injectable } from "@angular/core";
import { AppointmentHttpService } from "../http-services/appointment-http.service";
import { ABaseTableService } from "./a-base-service";

@Injectable()
export class AppointmentService extends ABaseTableService{

    constructor(httpService: AppointmentHttpService) {
        super([
            { name: 'Дата', value: 'date', canSort: true },
            { name: 'Фонд', value: 'fundName' },
            { name: 'Користувач', value: 'userName' },
        ],httpService);
    }
}