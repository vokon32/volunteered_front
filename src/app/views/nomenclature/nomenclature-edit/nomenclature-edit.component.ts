import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AModalBaseService } from '../../../services/a-modal-base.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-nomenclature-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nomenclature-edit.component.html',
  styleUrl: './nomenclature-edit.component.scss'
})
export class NomenclatureEditComponent extends AModalBaseService {

}
