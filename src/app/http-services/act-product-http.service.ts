import { Injectable } from '@angular/core';
import { ABaseTableHttpService } from './a-base-http-directive';

@Injectable({
  providedIn: 'root',
})
export class ActProductHttpService extends ABaseTableHttpService {
    constructor() {
        super('ActProduct');
        
    }
}
