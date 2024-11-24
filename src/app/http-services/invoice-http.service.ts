import { Injectable } from '@angular/core';
import { ABaseTableHttpService } from './a-base-http-directive';

@Injectable({
  providedIn: 'root',
})
export class InvoiceHttpService extends ABaseTableHttpService {
    constructor() {
        super('Invoice');
        
    }

    bindProductsToInvoice(invoiceId: string, nomenclatures: any[]) {
      return this.httpClient.post(`${this.apiUrl}/${this.controllerName}/bindProductsToInvoice?invoiceId=${invoiceId}`, nomenclatures);
    }
    nextNumber(){
      return this.httpClient.get(`${this.apiUrl}/${this.controllerName}/nextNumber`);
    }
}
