import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { StepperModule, Stepper } from 'primeng/stepper';
import { NomenclatureService } from '../../../services/nomenclature.service';
import { TableComponent } from '../../../shared/table/table.component';
import { NomenclatureComponent } from '../../nomenclature/nomenclature.component';
import { UserService } from '../../../services/user-service';
import { AModalBaseService } from '../../../services/a-modal-base.service';
import { UserComponent } from '../../user/user.component';
import { FundService } from '../../../services/fund-service';
import { DropdownModule } from 'primeng/dropdown';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-appointment-create',
  standalone: true,
  imports: [ReactiveFormsModule, TableComponent, AsyncPipe, StepperModule, ButtonModule, CalendarModule, DropdownModule, UserComponent],
  providers: [UserService, FundService],
  templateUrl: './appointment-create.component.html',
  styleUrl: './appointment-create.component.scss'
})
export class AppointmentCreateComponent extends AModalBaseService {
  selectedUser: any;
  id!: string;
  @ViewChild('stepper') stepper!: Stepper;
  productToAdd!: any;
  productsToCreate: any[] = [];


  constructor(public userService: UserService, public fundService: FundService, private cdr: ChangeDetectorRef) {
    super();

  }

  ngOnInit() {
  }

  createAppointment(event: any) {
    this.service.create$([this.profileForm.getRawValue()]).subscribe({
      next: (res: any) => {
        this.id = res.data[0].id;
        this.profileForm.patchValue({
          id: this.id
        })
        // this.userService.filter$.next(this.id);
        // this.userService.loadByFilter();

        this.stepper.nextCallback(event, 1);
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  addProduct() {
    this.dialogService.open(NomenclatureComponent, {
      width: '50vw'
    })
  }

  selectUser(user: any) {
    this.selectedUser = user;
    this.profileForm.patchValue({
      users: [user]
    })

  }
}
