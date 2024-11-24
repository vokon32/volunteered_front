import { Injectable } from "@angular/core";
import { ActProductHttpService } from "../http-services/act-product-http.service";
import { ABaseTableService } from "./a-base-service";

@Injectable()
export class ActProductService extends ABaseTableService{

    constructor(httpService: ActProductHttpService) {
        super([
            { name: 'Назва', value: 'name', canSort: true },
            { name: 'Одиниця виміру', value: 'measure' },
            { name: 'Кількість', value: 'amount', canEdit: true },
        ],httpService);
    }
}