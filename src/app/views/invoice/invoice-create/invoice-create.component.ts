import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { Stepper, StepperModule } from 'primeng/stepper';
import { AModalBaseService } from '../../../services/a-modal-base.service';
import { InvoiceService } from '../../../services/invoice-service';
import { NomenclatureService } from '../../../services/nomenclature.service';
import { TableComponent } from "../../../shared/table/table.component";
import { NomenclatureComponent } from '../../nomenclature/nomenclature.component';


@Component({
  selector: 'app-invoice-create',
  standalone: true,
  imports: [ReactiveFormsModule, TableComponent, StepperModule, ButtonModule, CalendarModule],
  providers: [NomenclatureService],
  templateUrl: './invoice-create.component.html',
  styleUrl: './invoice-create.component.scss'
})
export class InvoiceCreateComponent extends AModalBaseService {

  selectedProduct: any;
  id!: string;
  productToAdd: any[] = [];
  @ViewChild('stepper') stepper! : Stepper;

  constructor(public nomenclatureService: NomenclatureService) {
    super();

  }

  createInvoice(event: any) {
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

  addProduct(){
    this.dialogService.open(NomenclatureComponent, {
      width: '50vw'
    })
  }

  bindProducts(){
    (this.service as InvoiceService).bindProductsToInvoice(this.id, this.productToAdd).subscribe({
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
