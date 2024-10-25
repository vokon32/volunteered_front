import { Component, Input } from '@angular/core';
import { ABaseTableService } from '../../services/a-base-service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  @Input() fields : string[] = [];
  @Input() service!: ABaseTableService;
  

  changeFilter(event: any, field : string){
    this.service.filter$.next(event.target.value);
    this.service.loadByFilter();
  }
}
