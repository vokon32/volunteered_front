import { Injectable } from "@angular/core";
import { ABaseTableService } from "./a-base-service";
import { InvoiceProductHttpService } from "../http-services/invoice-product-http.service";

@Injectable()
export class InvoiceProductService extends ABaseTableService{

    constructor(protected httpService: InvoiceProductHttpService) {
        super([
            { name: 'Назва', value: 'name', canSort: true },
            { name: 'Одиниця виміру', value: 'measure' },
            { name: 'Кількість', value: 'amount', canEdit: true },
        ],httpService);
    }
}