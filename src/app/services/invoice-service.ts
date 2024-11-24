import { Injectable } from "@angular/core";
import { ActHttpService } from "../http-services/act-http.service";
import { ABaseTableService } from "./a-base-service";
import { InvoiceHttpService } from "../http-services/invoice-http.service";

@Injectable()
export class InvoiceService extends ABaseTableService {

    constructor(protected httpService: InvoiceHttpService) {
        super([
            { name: 'Дата', value: 'date', canSort: true },
            { name: 'Номер', value: 'number' },
        ], httpService);
    }
    bindProductsToInvoice(invoiceId: string, nomenclatures: any[]) {
        return this.httpService.bindProductsToInvoice(invoiceId, nomenclatures);
    }

    nextNumber(){
        return this.httpService.nextNumber();
    }
}