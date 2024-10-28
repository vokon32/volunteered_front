import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { InvoiceService } from '../../services/invoice-service';
import { FilterComponent } from '../../shared/filter/filter.component';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [TableComponent, FilterComponent, ReactiveFormsModule],
  providers: [InvoiceService, DialogService],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
  profileForm!: FormGroup;
  selectedData!: any;

  constructor(public service: InvoiceService) {
    // service.createProfileForm = getCreateProfileForm();
    // service.editProfileForm = getEditProfileForm();
  }

  selectData(data: any) {
    this.selectedData = data;
    this.service.editProfileForm.patchValue(data);
  }

  update() {
    this.service.update(InvoiceComponent, this.selectedData.shortName, this.selectedData);
  }

  delete() {
    this.service.delete(this.selectedData.shortName, [this.selectedData.id]);
  }
}
