import { Component } from '@angular/core';
import { AModalBaseService } from '../../../services/a-modal-base.service';
import { NomenclatureService } from '../../../services/nomenclature.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { StepperModule } from 'primeng/stepper';
import { InvoiceService } from '../../../services/invoice-service';
import { TableComponent } from '../../../shared/table/table.component';

@Component({
  selector: 'app-act-edit',
  standalone: true,
  providers: [InvoiceService, NomenclatureService],
  imports: [ReactiveFormsModule, TableComponent, StepperModule, ButtonModule, CalendarModule],
  templateUrl: './act-edit.component.html',
  styleUrl: './act-edit.component.scss'
})
export class ActEditComponent extends AModalBaseService {

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
