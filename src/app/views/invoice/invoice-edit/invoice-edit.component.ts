import { Component } from '@angular/core';
import { TableComponent } from "../../../shared/table/table.component";
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { StepperModule } from 'primeng/stepper';
import { InvoiceService } from '../../../services/invoice-service';
import { NomenclatureService } from '../../../services/nomenclature.service';
import { AModalBaseService } from '../../../services/a-modal-base.service';

@Component({
  selector: 'app-invoice-edit',
  standalone: true,
  providers: [InvoiceService, NomenclatureService],
  imports: [ReactiveFormsModule, TableComponent, StepperModule, ButtonModule, CalendarModule],
  templateUrl: './invoice-edit.component.html',
  styleUrl: './invoice-edit.component.scss'
})
export class InvoiceEditComponent extends AModalBaseService {

  /**
   *
   */
  constructor(public nomenclatureService: NomenclatureService) {
    super();
    this.nomenclatureService.filter$.next(this.profileForm.get('id')?.value);
    this.nomenclatureService.loadByFilter();
  }

  ngOnInit() {
  }

}
