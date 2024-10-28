import { Injectable } from "@angular/core";
import { SettingsHttpService } from "../http-services/settings-http.service";
import { ABaseTableService } from "./a-base-service";
import { Field } from "../models/field";

@Injectable()
export class SettingsService extends ABaseTableService {

    constructor(httpService: SettingsHttpService) {
        super([
            { name: 'Назва', value: 'name', canSort: true },
            { name: 'Значення', value: 'value' }
        ], httpService);
    }
}