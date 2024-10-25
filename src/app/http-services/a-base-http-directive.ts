import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { enviroment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class ABaseTableHttpService {
  protected apiUrl: string = enviroment.apiUrl;
  protected controllerName: string;
  protected httpClient : HttpClient;
  constructor(controllerName: string) {
    this.controllerName = controllerName;

    this.httpClient = inject(HttpClient);
  }

  loadData(page : number, pageSize: number, criteria: string): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/${this.controllerName}/readByFilter`, {
      page: page,
      pageSize: pageSize,
      criteria: criteria
    }).pipe(take(1));
  }
}
