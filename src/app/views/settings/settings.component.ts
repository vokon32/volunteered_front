import { Component } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { TableComponent } from '../../shared/table/table.component';
import { FilterComponent } from '../../shared/filter/filter.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [TableComponent, FilterComponent],
  providers: [SettingsService],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  constructor(public service: SettingsService) {
    
  }
}
