import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { FilterComponent } from '../../shared/filter/filter.component';
import { TableComponent } from '../../shared/table/table.component';
import { AppointmentService } from '../../services/appointment.service';
import { AppointmentCreateComponent } from './appointment-create/appointment-create.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { getCreateProfileForm, getEditProfileForm } from './appointment-form';

@Component({
  selector: 'app-appointment',
  standalone: true,
  providers: [AppointmentService, DialogService],
  imports: [TableComponent, FilterComponent, ReactiveFormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  profileForm!: FormGroup;
  selectedData!: any;

  constructor(public service: AppointmentService) {
    service.createProfileForm = getCreateProfileForm();
    service.editProfileForm = getEditProfileForm();
  }

  selectData(data: any) {
    this.selectedData = data;
    this.service.editProfileForm.patchValue(data);
  }

  create() {
    this.service.getNextNumber().subscribe((res: any) => {

      this.service.createProfileForm.patchValue({
        number: res.data
      })
      this.service.create(AppointmentCreateComponent, 'номенклатуру');
    })
  }

  update() {
    this.service.getNextNumber().subscribe((res: any) => {

      this.service.editProfileForm.patchValue({
        number: res.data
      })

      this.service.update(AppointmentEditComponent, this.selectedData.number, this.selectedData);
    })
  }

  delete() {
    this.service.delete(this.selectedData.number, [this.selectedData.id]);
  }

}
