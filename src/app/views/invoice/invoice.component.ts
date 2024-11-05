import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { InvoiceService } from '../../services/invoice-service';
import { FilterComponent } from '../../shared/filter/filter.component';
import { TableComponent } from '../../shared/table/table.component';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { InvoiceEditComponent } from './invoice-edit/invoice-edit.component';
import { getCreateProfileForm, getEditProfileForm } from './invoice-form';

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
    service.createProfileForm = getCreateProfileForm();
    service.editProfileForm = getEditProfileForm();
  }

  selectData(data: any) {
    this.selectedData = data;
    this.service.editProfileForm.patchValue(data);
  }

  create() {
    this.service.create(InvoiceCreateComponent, 'номенклатуру');
  }

  update() {
    console.log(this.selectedData)
    this.service.update(InvoiceEditComponent, this.selectedData.number, this.selectedData);
  }

  delete() {
    this.service.delete(this.selectedData.number, [this.selectedData.id]);
  }
}
