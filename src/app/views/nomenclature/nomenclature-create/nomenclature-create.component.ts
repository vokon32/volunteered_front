import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AModalBaseService } from '../../../services/a-modal-base.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-nomenclature-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nomenclature-create.component.html',
  styleUrl: './nomenclature-create.component.scss'
})
export class NomenclatureCreateComponent extends AModalBaseService {
}

