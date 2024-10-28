import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';
import { FilterComponent } from '../../shared/filter/filter.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { TableComponent } from '../../shared/table/table.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { getCreateProfileForm, getEditProfileForm } from './user-form';

@Component({
  selector: 'app-user',
  standalone: true,
  providers: [UserService, DialogService],
  imports: [TableComponent, FilterComponent, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  profileForm!: FormGroup;
  selectedData!: any;

  constructor(public service: UserService) {
    service.createProfileForm = getCreateProfileForm();
    service.editProfileForm = getEditProfileForm();
  }

  selectData(data: any) {
    this.selectedData = data;
    this.service.editProfileForm.patchValue(data);
  }

  create(){
    this.service.create(UserCreateComponent, 'користувача')
  }
  update() {
    this.service.update(UserEditComponent, this.selectedData.shortName, this.selectedData);
  }

  delete() {
    this.service.delete(this.selectedData.shortName, [this.selectedData.id]);
  }
}
