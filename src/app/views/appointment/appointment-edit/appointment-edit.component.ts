import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { StepperModule } from 'primeng/stepper';
import { AModalBaseService } from '../../../services/a-modal-base.service';
import { FundService } from '../../../services/fund-service';
import { UserService } from '../../../services/user-service';
import { TableComponent } from '../../../shared/table/table.component';

@Component({
  selector: 'app-appointment-edit',
  standalone: true,
  providers: [UserService, FundService],
  imports: [ReactiveFormsModule, TableComponent, StepperModule, ButtonModule, AsyncPipe, CalendarModule, DropdownModule],
  templateUrl: './appointment-edit.component.html',
  styleUrl: './appointment-edit.component.scss'
})
export class AppointmentEditComponent extends AModalBaseService {

  constructor(public userService: UserService, public fundService: FundService) {
    super();
    this.userService.filter$.next(this.profileForm.get('id')?.value);
    this.userService.loadByFilter();
  }

  ngOnInit() {
  }

}
