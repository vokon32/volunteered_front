import { Component } from '@angular/core';
import { OrganisationService } from '../../services/organisation.service';
import { TableComponent } from '../../shared/table/table.component';
import { FilterComponent } from '../../shared/filter/filter.component';

@Component({
  selector: 'app-organisation',
  standalone: true,
  imports: [TableComponent, FilterComponent],
  providers: [OrganisationService],
  templateUrl: './organisation.component.html',
  styleUrl: './organisation.component.scss'
})
export class OrganisationComponent {
  constructor(public service: OrganisationService) {
    
  }
}
