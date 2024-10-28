import { Injectable } from "@angular/core";
import { AppointmentHttpService } from "../http-services/appointment-http.service";
import { ABaseTableService } from "./a-base-service";
import { ActHttpService } from "../http-services/act-http.service";

@Injectable()
export class ActService extends ABaseTableService{

    constructor(httpService: ActHttpService) {
        super([
            { name: 'Дата', value: 'date', canSort: true },
            { name: 'Номер', value: 'number' },
        ],httpService);
    }
}