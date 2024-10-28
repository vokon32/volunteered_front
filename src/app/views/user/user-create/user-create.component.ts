import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AModalBaseService } from '../../../services/a-modal-base.service';
import { FundService } from '../../../services/fund-service';

@Component({
  selector: 'app-user-create',
  standalone: true,
  providers: [FundService],
  imports: [ReactiveFormsModule, AsyncPipe, DropdownModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.scss'
})
export class UserCreateComponent extends AModalBaseService {

  constructor(public fundService: FundService) {
    super();
    
  }


}
