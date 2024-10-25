import { Component, Input, TemplateRef } from '@angular/core';
import { ABaseTableService } from '../../services/a-base-service';
import { BehaviorSubject, first } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, AsyncPipe, JsonPipe, PaginatorModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  data$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  count$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  loading$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  page$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  pageItems$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  fields: any;
  @Input() service!: ABaseTableService;
  @Input() public toolbarTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    this.data$ = this.service.data$;
    this.count$ = this.service.count$;
    this.loading$ = this.service.loading$;
    this.page$ = this.service.page$;
    this.pageItems$ = this.service.pageItems$;
    this.data$ = this.service.data$;
    this.fields = this.service.fields;
    console.log('this service fields', this.service.fields)
  }

  onPageChange(event: any) {
    this.pageItems$.next(event.rows);

    this.page$.next(event.first / this.pageItems$.getValue() + 1);

    this.service.loadByFilter()
  }
}
