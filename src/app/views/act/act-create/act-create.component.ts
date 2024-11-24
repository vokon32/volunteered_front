import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { Stepper, StepperModule } from 'primeng/stepper';
import { NomenclatureService } from '../../../services/nomenclature.service';
import { TableComponent } from '../../../shared/table/table.component';
import { NomenclatureComponent } from '../../nomenclature/nomenclature.component';
import { AModalBaseService } from '../../../services/a-modal-base.service';
import { ActService } from '../../../services/act-service';

@Component({
  selector: 'app-act-create',
  standalone: true,
  imports: [ReactiveFormsModule, TableComponent, StepperModule, ButtonModule, CalendarModule, NomenclatureComponent],
  providers: [NomenclatureService],
  templateUrl: './act-create.component.html',
  styleUrl: './act-create.component.scss'
})
export class ActCreateComponent extends AModalBaseService {

  selectedProduct: any;
  id!: string;
  productToAdd: any[] = [];

  constructor(public nomenclatureService: NomenclatureService) {
    super();

  }

  createAct(event: any) {
    this.service.create$([this.profileForm.getRawValue()]).subscribe({
      next: (res: any) => {
        this.id = res.data[0].id;
        this.nomenclatureService.loadByFilter();
      },
      error: (err: any) => {
        this.messageService.add({ severity: 'error', summary: 'Помилка', detail: `${err.error.error}` })
      }
    });
  }

  bindProducts(){
    (this.service as ActService).bindProductsToAct(this.id, this.productToAdd).subscribe({
      next: (res: any) => {
        this.close()
        this.messageService.add({
          severity: 'success', summary: 'Успіх', detail: `Об\'єкт успішно створено`
        })
      },
      error: (err: any) => {
        this.messageService.add({ severity: 'error', summary: 'Помилка', detail: `${err.error.error}` })
      }
    });
  }

  selectProduct(product : any){
    this.productToAdd = product;
  }
}
