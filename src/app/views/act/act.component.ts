import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { ActService } from '../../services/act-service';
import { FilterComponent } from '../../shared/filter/filter.component';
import { TableComponent } from '../../shared/table/table.component';
import { ActCreateComponent } from './act-create/act-create.component';
import { ActEditComponent } from './act-edit/act-edit.component';
import { getCreateProfileForm, getEditProfileForm } from './act-form';

@Component({
  selector: 'app-act',
  standalone: true,
  imports: [TableComponent, FilterComponent, ReactiveFormsModule],
  providers: [ActService, DialogService],
  templateUrl: './act.component.html',
  styleUrl: './act.component.scss'
})
export class ActComponent {
  profileForm!: FormGroup;
  selectedData!: any;

  constructor(public service: ActService) {
    service.createProfileForm = getCreateProfileForm();
    service.editProfileForm = getEditProfileForm();
  }

  selectData(data: any) {
    this.selectedData = data;
    this.service.editProfileForm.patchValue(data);
  }

  create() {
    this.service.nextNumber().subscribe((res: any) => {
      this.service.createProfileForm.reset();
      this.service.createProfileForm.patchValue({
        number: res.data,
        nomenclatures: []
      })
      this.service.create(ActCreateComponent, 'номенклатуру');

    })
  }

  update() {
    console.log(this.selectedData)
    this.service.update(ActEditComponent, this.selectedData.number, this.selectedData);
  }

  delete() {
    this.service.delete(this.selectedData.number, [this.selectedData.id]);
  }
}
