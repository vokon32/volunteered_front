import { Component, EventEmitter, input, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ABaseTableService } from '../../services/a-base-service';
import { BehaviorSubject, first } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, AsyncPipe, PaginatorModule, CommonModule],
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
  @Input() public btnsTemplate!: TemplateRef<any>;
  @Input() datakey: string = 'id';
  @Input() usecheckbox = false;
  @Input() selectionMode: "single" | "multiple" = 'single';
  @Output() selectedData: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('table') table!: Table;
  

  constructor() { }

  ngOnInit() {
    this.data$ = this.service.data$;
    this.count$ = this.service.count$;
    this.loading$ = this.service.loading$;
    this.page$ = this.service.page$;
    this.pageItems$ = this.service.pageItems$;
    this.data$ = this.service.data$;

    this.fields = this.service.fields;

    this.selectionMode = this.usecheckbox ? 'multiple' : 'single';
  }

  onPageChange(event: any) {
    this.pageItems$.next(event.rows);

    this.page$.next(event.first / this.pageItems$.getValue() + 1);

    this.service.loadByFilter()
  }

  onRowSelect(event: any) {
    this.selectedData.emit(this.table.selection);
  }

  OnSort(event: any) {
    if (event.order === 1) {
      this.service.sort = `${event.field}Asc`
    }
    else {
      this.service.sort = `${event.field}Desc`
    }
    this.service.loadByFilter();
  }
}
