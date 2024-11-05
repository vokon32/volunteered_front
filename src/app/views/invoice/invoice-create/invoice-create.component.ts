import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AModalBaseService } from '../../../services/a-modal-base.service';
import { TableComponent } from "../../../shared/table/table.component";
import { NomenclatureService } from '../../../services/nomenclature.service';
import { Stepper, StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { NomenclatureComponent } from '../../nomenclature/nomenclature.component';


@Component({
  selector: 'app-invoice-create',
  standalone: true,
  imports: [ReactiveFormsModule, TableComponent, StepperModule, ButtonModule, CalendarModule, NomenclatureComponent],
  providers: [NomenclatureService],
  templateUrl: './invoice-create.component.html',
  styleUrl: './invoice-create.component.scss'
})
export class InvoiceCreateComponent extends AModalBaseService {

  selectedProduct: any;
  id!: string;
  @ViewChild('stepper') stepper!: Stepper;
  productToAdd!: any;
  productsToCreate: any[] =[];


  constructor(public nomenclatureService: NomenclatureService, private cdr: ChangeDetectorRef) {
    super();

  }

  ngOnInit() {
  }

  createInvoice(event: any) {
    this.service.create$([this.profileForm.getRawValue()]).subscribe({
      next: (res: any) => {
        this.id = res.data[0].id;

        this.nomenclatureService.filter$.next(this.id);
        this.nomenclatureService.loadByFilter();

        this.stepper.nextCallback(event, 1);
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  addProduct(){
    this.dialogService.open(NomenclatureComponent, {
      width: '50vw'
    })
  }

  selectProduct(product : any){
    this.productToAdd = product;
  }

}
