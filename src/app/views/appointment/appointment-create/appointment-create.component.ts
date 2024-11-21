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
import { FundService } from '../../../services/fund-service';
import { DropdownModule } from 'primeng/dropdown';
import { AsyncPipe } from '@angular/common';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-appointment-create',
  standalone: true,
  imports: [ReactiveFormsModule, TableComponent, AsyncPipe, StepperModule, ButtonModule, CalendarModule, DropdownModule],
  providers: [UserService, FundService, NomenclatureService],
  templateUrl: './appointment-create.component.html',
  styleUrl: './appointment-create.component.scss'
})
export class AppointmentCreateComponent extends AModalBaseService {
  users!: any[];
  nomenclatures!: any[];
  id!: string;
  @ViewChild('stepper') stepper!: Stepper;
  productToAdd!: any;
  productsToCreate: any[] = [];


  constructor(public userService: UserService, public fundService: FundService, public nomenclatureService: NomenclatureService) {
    super();

  }

  createAppointment(event: any) {
    if (!this.id) {
      this.service.create$([this.profileForm.getRawValue()]).subscribe({
        next: (res: any) => {
          this.id = res.data[0].id;
          this.profileForm.patchValue({
            id: this.id
          });
          this.profileForm.get('date')?.disable();
          this.profileForm.get('number')?.disable();
          this.profileForm.get('fundId')?.disable();
        },
        error: (err: any) => {
          console.log(err);
        }
      });
    }

  }

  addProduct() {
    this.dialogService.open(NomenclatureComponent, {
      width: '50vw'
    })
  }

  selectUser(users: any) {
    this.users = users;
  }

  selectNomenclatures(nomenclatures: any) {
    this.nomenclatures = nomenclatures;
  }

  bindUserToAppointment() {
    this.userService.bindUsersToAppointment(this.id, this.users).subscribe({
      next: (res: any) => {
      },
      error: (err: any) => {
        this.messageService.add({ severity: 'error', summary: 'Помилка', detail: `${err.error.error}` })
      }
    });
  }

  bindNomenclaturesToAppointment() {
    (this.service as AppointmentService).bindNomenclaturesToAppointment(this.id, this.nomenclatures).subscribe({
      next: (res: any) => {
        this.close()
        this.messageService.add({
          severity: 'success', summary: 'Успіх', detail: `Об\'єкт успішно створено`
        })
      },
      error: (err: any) => {
        this.messageService.add({ severity: 'error', summary: 'Помилка', detail: `${err.error.error}` })
      }
    });
  }
}
