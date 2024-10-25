import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ABaseTableHttpService } from "../http-services/a-base-http-directive";
import { enviroment } from "../../environments/environment";
import { Field } from "../models/field";

@Injectable()
export abstract class ABaseTableService{
    data$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    count$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    loading$: BehaviorSubject<boolean> = new BehaviorSubject<any>(true);
    page$: BehaviorSubject<any> = new BehaviorSubject<any>(1);
    pageItems$: BehaviorSubject<any> = new BehaviorSubject<any>(5);
    filter$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    fields: Field[] = [];
    service!: ABaseTableHttpService;

    apiUrl: string = enviroment.apiUrl;

    constructor(fields: Field[], service: ABaseTableHttpService) {
        this.service = service;
        this.loadByFilter();
        this.fields = fields;
    }
    loadByFilter(){
        this.service.loadData(this.page$.getValue(), this.pageItems$.getValue(), this.filter$.getValue()).subscribe((res: any) => {
            this.data$.next(res.data);
            this.count$.next(res.paging.totalCount);
        })
        
    }
}