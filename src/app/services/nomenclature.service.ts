import { Injectable } from "@angular/core";
import { NomenclatureHttpService } from "../http-services/nomenclature-http.service";
import { ABaseTableService } from "./a-base-service";

@Injectable()
export class NomenclatureService extends ABaseTableService{

    constructor(httpService: NomenclatureHttpService) {
        super([
            { name: 'Назва', value: 'shortName', canSort: true },
            { name: 'Одиниця виміру', value: 'measure' },
            { name: 'Кількість', value: 'amount', canEdit: true },
        ],httpService);
    }
}