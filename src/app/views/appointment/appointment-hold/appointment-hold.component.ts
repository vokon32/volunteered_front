import { DatePipe } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { StepperModule } from 'primeng/stepper';
import { AModalBaseService } from '../../../services/a-modal-base.service';
import { UserService } from '../../../services/user-service';
import { TableComponent } from '../../../shared/table/table.component';
import { AppointmentService } from '../../../services/appointment.service';
import { AppointmentResultComponent } from '../appointment-result/appointment-result.component';

@Component({
  selector: 'app-appointment-hold',
  standalone: true,
  providers: [UserService, AppointmentService],
  imports: [ReactiveFormsModule, TableComponent, DatePipe, StepperModule, ButtonModule, CalendarModule, DropdownModule],
  templateUrl: './appointment-hold.component.html',
  styleUrl: './appointment-hold.component.scss'
})
export class AppointmentHoldComponent extends AModalBaseService {

  isFinished : boolean;
  btns!: TemplateRef<any>
  constructor(protected appointmentService: AppointmentService) {
    super();

    this.isFinished = this.profileForm.get('isFinished')?.value;
  }

  markUser(data: any) {
    (this.service as UserService).markUser(this.profileForm.get('id')?.value, data).subscribe({
      next: (res: any) => {
        this.service.data$.next([
          ...this.service.data$.value.filter((item: any) => item.id !== data.id)
        ]);
        this.service.count$.next(this.service.count$.getValue() - 1);

        this.messageService.add({
          severity: 'success', summary: 'Успіх', detail: `Користувача успішно відмічено`
        })
      }
    });

  }

  getResults(){
    const appointmentId = this.profileForm.get('id')?.value;
  
    if (!appointmentId) {
      console.error('Appointment ID is not provided.');
      return;
    }
  
    this.appointmentService.getResults(appointmentId).subscribe({
      next: (res: any) => {
        this.close(); 
        const ref = this.service.dialogService.open(AppointmentResultComponent, {
          header: `Результати видачі ${this.profileForm.get('number')?.value}`,
          data: res.data, 
          width: '50vw',
          modal: true
        });
      },
      error: (err: any) => {
        console.error('Error ending appointment:', err);
      }
    });

  }

  endAppointment() {
    const appointmentId = this.profileForm.get('id')?.value;
  
    if (!appointmentId) {
      console.error('Appointment ID is not provided.');
      return;
    }
  
    this.appointmentService.endAppointment(appointmentId).subscribe({
      next: (res: any) => {
        this.close(); 
        const ref = this.service.dialogService.open(AppointmentResultComponent, {
          header: `Результати видачі ${this.profileForm.get('number')?.value}`,
          data: res.data, 
          width: '50vw',
          modal: true
        });
      },
      error: (err: any) => {
        console.error('Error ending appointment:', err);
      }
    });
  }
  

}
