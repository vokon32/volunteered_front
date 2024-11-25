import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-appointment-result',
  standalone: true,
  imports: [],
  templateUrl: './appointment-result.component.html',
  styleUrl: './appointment-result.component.scss'
})
export class AppointmentResultComponent {
  data: any;
  ref: DynamicDialogRef;
  constructor(config: DynamicDialogConfig, ref: DynamicDialogRef) {

    this.data = config.data
    this.ref = ref;
    
  }
  close(){
    this.ref.close();
  }

}
