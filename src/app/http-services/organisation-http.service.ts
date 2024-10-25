import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../environments/environment';
import { ABaseTableHttpService } from './a-base-http-directive';

@Injectable({
  providedIn: 'root',
})
export class OrganisationHttpService extends ABaseTableHttpService {
    constructor() {
        super('Organisation');
        
    }
}
