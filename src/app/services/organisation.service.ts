import { Injectable } from "@angular/core";
import { OrganisationHttpService } from "../http-services/organisation-http.service";
import { ABaseTableService } from "./a-base-service";

@Injectable()
export class OrganisationService extends ABaseTableService{

    constructor(httpService: OrganisationHttpService) {
        super([
            { name: 'Назва', value: 'name', canSort: true },
        ],httpService);
    }
}