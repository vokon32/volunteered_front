import { ComponentRef, inject, Injectable, Type } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogService } from 'primeng/dynamicdialog';
import { BehaviorSubject, switchMap, take, tap } from "rxjs";
import { enviroment } from "../../environments/environment";
import { ABaseTableHttpService } from "../http-services/a-base-http-directive";
import { Field } from "../models/field";
import { NomenclatureCreateComponent } from "../views/nomenclature/nomenclature-create/nomenclature-create.component";
import { NomenclatureEditComponent } from "../views/nomenclature/nomenclature-edit/nomenclature-edit.component";

@Injectable()
export abstract class ABaseTableService {
    data$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    count$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    loading$: BehaviorSubject<boolean> = new BehaviorSubject<any>(true);
    page$: BehaviorSubject<any> = new BehaviorSubject<any>(1);
    pageItems$: BehaviorSubject<any> = new BehaviorSubject<any>(5);
    filter$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    sort: string = '';
    fields: Field[] = [];
    service!: ABaseTableHttpService;
    dialogService!: DialogService;
    createProfileForm!: FormGroup;
    editProfileForm!: FormGroup;

    messageService!: MessageService;
    confirmationService!: ConfirmationService;

    apiUrl: string = enviroment.apiUrl;

    constructor(fields: Field[], service: ABaseTableHttpService) {
        this.service = service;
        this.loadByFilter();
        this.fields = fields;
        this.messageService = inject(MessageService);
        this.dialogService = inject(DialogService);
        this.confirmationService = inject(ConfirmationService);
    }
    loadByFilter() {
        this.service.loadData(this.page$.getValue(), this.pageItems$.getValue(), this.filter$.getValue(), this.sort).subscribe({
            next: (res: any) => {
                this.data$.next(res.data);
                this.count$.next(res.paging.totalCount);
            },
            error: (err : any) => {
                console.log(err.error);
            }
        })

    }
    create$(data: any[]) {
        return this.service.create$(data);
    }

    update$(data: any[]) {
        return this.service.update$(data);
    }


    create(component: Type<any>, name: string) {
        let ref = this.dialogService.open(component, {
            header: `Створити ${name}`,
            data: {
                profileForm: this.createProfileForm,
                service: this,
            },
            width: '50vw',
            modal: true
        })

        ref.onClose.pipe(take(1)).pipe(switchMap((res: any) => {
            return this.service.loadData(this.page$.getValue(), this.pageItems$.getValue(), this.filter$.getValue());

        })).subscribe((res: any) => {
            this.data$.next(res.data);
            this.count$.next(res.paging.totalCount);
        });

    }

    update(component: Type<any>, name: string, data: any) {
        let ref = this.dialogService.open(component, {
            header: `Редагувати ${name}`,
            data: {
                profileForm: this.editProfileForm,
                data: data,
                service: this
            },
            width: '50vw',
            modal: true
        })

        ref.onClose.pipe(take(1)).pipe(switchMap((res: any) => {
            return this.service.loadData(this.page$.getValue(), this.pageItems$.getValue(), this.filter$.getValue());

        })).subscribe((res: any) => {
            this.data$.next(res.data);
            this.count$.next(res.paging.totalCount);
        });
    }


    delete(name: string, ids: any[]) {
        let ref = this.confirmationService.confirm({
            message: `Ви впевнені, що хочете видалити ${name}`,
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            acceptIcon: "none",
            rejectIcon: "none",
            rejectButtonStyleClass: "p-button-text",
            accept: () => {

                this.service.delete$(ids).pipe(take(1)).pipe(
                    tap(() => {
                        this.messageService.add({ severity: 'info', summary: 'Успіх', detail: 'Об\єкт видалено' });

                    }),
                    switchMap((res: any) => {
                        return this.service.loadData(this.page$.getValue(), this.pageItems$.getValue(), this.filter$.getValue());

                    })).subscribe((res: any) => {
                        this.data$.next(res.data);
                        this.count$.next(res.paging.totalCount);
                    });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Помилка', detail: 'Виникла помилка', life: 3000 });
            },
            key: 'positionDialog'
        });
    }
}

