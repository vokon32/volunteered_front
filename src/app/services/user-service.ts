import { Injectable } from "@angular/core";
import { NomenclatureHttpService } from "../http-services/nomenclature-http.service";
import { ABaseTableService } from "./a-base-service";
import { UserHttpService } from "../http-services/user-http.service";

@Injectable()
export class UserService extends ABaseTableService{

    constructor(httpService: UserHttpService) {
        super([
            { name: 'Пошта', value: 'email'},
            { name: 'ПІБ', value: 'name', canSort: true },
            { name: 'Адреса', value: 'address' },
            { name: 'Номер', value: 'cardNumber' },
            { name: 'Реферальне посилання', value: 'referralLink' },
        ],httpService);
    }
}