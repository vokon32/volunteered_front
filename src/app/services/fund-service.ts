import { Injectable } from "@angular/core";
import { NomenclatureHttpService } from "../http-services/nomenclature-http.service";
import { ABaseTableService } from "./a-base-service";
import { FundHttpService } from "../http-services/fund-http.service";

@Injectable()
export class FundService extends ABaseTableService{

    constructor(httpService: FundHttpService) {
        super([
            { name: 'Назва', value: 'shortName', canSort: true },
            { name: 'Одиниця виміру', value: 'measure' },
            { name: 'Кількість', value: 'number' },
        ],httpService);
    }
}