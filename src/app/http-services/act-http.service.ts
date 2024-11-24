import { Injectable } from '@angular/core';
import { ABaseTableHttpService } from './a-base-http-directive';

@Injectable({
  providedIn: 'root',
})
export class ActHttpService extends ABaseTableHttpService {
    constructor() {
        super('Act');
        
    }

    bindProductsToAct(actId: string, nomenclatures: any[]) {
      return this.httpClient.post(`${this.apiUrl}/${this.controllerName}/bindProductsToAct?actId=${actId}`, nomenclatures);
    }

    nextNumber(){
      return this.httpClient.get(`${this.apiUrl}/${this.controllerName}/nextNumber`);
    }
}
