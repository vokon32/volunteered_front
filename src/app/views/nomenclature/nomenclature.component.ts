import { Component, Input } from '@angular/core';
import { NomenclatureService } from '../../services/nomenclature.service';
import { FilterComponent } from '../../shared/filter/filter.component';
import { TableComponent } from '../../shared/table/table.component';
import { DialogService } from 'primeng/dynamicdialog';
import { FormGroup } from '@angular/forms';
import { getCreateProfileForm, getEditProfileForm } from './nomencalture-form';
import { NomenclatureCreateComponent } from './nomenclature-create/nomenclature-create.component';
import { NomenclatureEditComponent } from './nomenclature-edit/nomenclature-edit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nomenclature',
  standalone: true,
  providers: [NomenclatureService, DialogService],
  imports: [TableComponent, FilterComponent, CommonModule],
  templateUrl: './nomenclature.component.html',
  styleUrl: './nomenclature.component.scss'
})
export class NomenclatureComponent {
  profileForm!: FormGroup;
  selectedData!: any;
  @Input() footer: any;

  constructor(public service: NomenclatureService) {
    service.createProfileForm = getCreateProfileForm();
    service.editProfileForm = getEditProfileForm();
  }

  selectData(data: any) {
    this.selectedData = data;
    this.service.editProfileForm.patchValue(data);
  }

  create(){
    this.service.create(NomenclatureCreateComponent, 'номенклатуру');
  }

  update(){
    this.service.update(NomenclatureEditComponent, this.selectedData.shortName, this.selectedData);
  }

  delete(){
    this.service.delete(this.selectedData.shortName, [this.selectedData.id]);
  }
}
