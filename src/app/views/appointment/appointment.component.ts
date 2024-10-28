import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { FilterComponent } from '../../shared/filter/filter.component';
import { TableComponent } from '../../shared/table/table.component';
import { AppointmentService } from '../../services/appointment.service';

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
    // service.createProfileForm = getCreateProfileForm();
    // service.editProfileForm = getEditProfileForm();
  }

  selectData(data: any) {
    this.selectedData = data;
    this.service.editProfileForm.patchValue(data);
  }

  update() {
    this.service.update(AppointmentComponent, this.selectedData.shortName, this.selectedData);
  }

  delete() {
    this.service.delete(this.selectedData.shortName, [this.selectedData.id]);
  }

}
