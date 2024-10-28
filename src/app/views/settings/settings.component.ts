import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { TableComponent } from '../../shared/table/table.component';
import { FilterComponent } from '../../shared/filter/filter.component';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TableComponent, FilterComponent],
  providers: [SettingsService, DialogService],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  constructor(public service: SettingsService) {
    
  }
}
