import { Injectable } from '@angular/core';
import { ABaseTableHttpService } from './a-base-http-directive';

@Injectable({
  providedIn: 'root',
})
export class InvoiceHttpService extends ABaseTableHttpService {
    constructor() {
        super('Invoice');
        
    }
}
