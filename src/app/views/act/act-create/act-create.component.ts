import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { Stepper, StepperModule } from 'primeng/stepper';
import { NomenclatureService } from '../../../services/nomenclature.service';
import { TableComponent } from '../../../shared/table/table.component';
import { NomenclatureComponent } from '../../nomenclature/nomenclature.component';
import { AModalBaseService } from '../../../services/a-modal-base.service';

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
  @ViewChild('stepper') stepper!: Stepper;
  productToAdd!: any;
  productsToCreate: any[] = [];


  constructor(public nomenclatureService: NomenclatureService, private cdr: ChangeDetectorRef) {
    super();

  }

  createAct(event: any) {
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
}
