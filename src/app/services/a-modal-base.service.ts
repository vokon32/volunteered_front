import { inject, Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { enviroment } from "../../environments/environment";
import { ABaseTableService } from "./a-base-service";
import { tap } from "rxjs";

@Injectable()
export abstract class AModalBaseService {
    service!: ABaseTableService;
    dialogService!: DialogService
    ref!: DynamicDialogRef;
    config!: DynamicDialogConfig;
    profileForm!: FormGroup;

    messageService!: MessageService;

    constructor() {
        this.dialogService = inject(DialogService);
        this.ref = inject(DynamicDialogRef);
        this.config = inject(DynamicDialogConfig);
        this.profileForm = this.config.data.profileForm;
        this.service = this.config.data.service;
        this.messageService = inject(MessageService);
    }

    close() {
        this.ref.close();
    }

    create() {
        if (this.profileForm.valid) {
            this.service.create$([this.profileForm.getRawValue()]).pipe(tap(() => {
            })).subscribe({
                next: (res: any) => {
                    this.close();
                    this.messageService.add({
                        severity: 'success', summary: 'Успіх', detail: `Об\'єкт успішно створено`
                    })
                },
                error: (err: any) => {
                    this.messageService.add({ severity: 'error', summary: 'Помилка', detail: `${err.error.error}` })
                }
            });;
        }
        else {
            this.messageService.add({ severity: 'warn', summary: 'Увага!', detail: `Форма не валідна` })

        }

    }

    update() {
        if (this.profileForm.valid) {
            this.service.update$([this.profileForm.getRawValue()]).pipe(tap(() => {
            })).subscribe({
                next: (res: any) => {
                    this.close();
                    this.messageService.add({
                        severity: 'success', summary: 'Успіх', detail: `Об\'єкт успішно оновлено`
                    })
                },
                error: (err: any) => {
                    this.messageService.add({ severity: 'error', summary: 'Помилка', detail: `${err.error.error}` })
                }
            });;
        }
        else {
            this.messageService.add({ severity: 'warn', summary: 'Увага!', detail: `Форма не валідна` })

        }

    }
}