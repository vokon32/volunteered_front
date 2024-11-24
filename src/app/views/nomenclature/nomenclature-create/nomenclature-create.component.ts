import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AModalBaseService } from '../../../services/a-modal-base.service';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-nomenclature-create',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule],
  templateUrl: './nomenclature-create.component.html',
  styleUrl: './nomenclature-create.component.scss'
})
export class NomenclatureCreateComponent extends AModalBaseService {

  measures = [
    {name: 'Кілограми', value: 0},
    {name: 'Штуки', value: 1},
    {name: 'Літри', value: 2},
  ]
}

