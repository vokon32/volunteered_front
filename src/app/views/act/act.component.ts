import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from '../../shared/filter/filter.component';
import { TableComponent } from '../../shared/table/table.component';
import { ActService } from '../../services/act-service';
import { DialogService } from 'primeng/dynamicdialog';

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
    // service.createProfileForm = getCreateProfileForm();
    // service.editProfileForm = getEditProfileForm();
  }

  selectData(data: any) {
    this.selectedData = data;
    this.service.editProfileForm.patchValue(data);
  }

  update() {
    this.service.update(ActComponent, this.selectedData.shortName, this.selectedData);
  }

  delete() {
    this.service.delete(this.selectedData.shortName, [this.selectedData.id]);
  }
}
