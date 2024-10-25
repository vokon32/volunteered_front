import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  items: MenuItem[] = [];

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.items = [
      {
        label: 'Організація',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Організація',
            url: 'app/organisation',
            command: (event) => this.onItemClick(event, 'app/organisation'),
            icon: 'pi pi-fw pi-bookmark'
          },
          {
            label: 'Налаштування',
            url: 'app/settings',
            command: (event) => this.onItemClick(event, 'app/settings'),
            icon: 'pi pi-fw pi-video'
          }]
      },
      {
        label: 'Користувачі',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Записи',
            url: 'organisation',
            command: (event) => this.onItemClick(event, 'organisation'),
            icon: 'pi pi-fw pi-bookmark'
          },
          {
            label: 'Список користувачів',
            url: 'settings',
            command: (event) => this.onItemClick(event, 'settings'),
            icon: 'pi pi-fw pi-video'
          }
        ]
      },
      {
        label: 'Фонд',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Керування фондом',
            url: 'organisation',
            command: (event) => this.onItemClick(event, 'organisation'),
            icon: 'pi pi-fw pi-bookmark'
          }]
      },
      {
        label: 'Склад',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Номенклатура',
            url: 'organisation',
            command: (event) => this.onItemClick(event, 'organisation'),
            icon: 'pi pi-fw pi-bookmark'
          }]
      }

    ]
  }

  onItemClick(event: any, url: string) {
    event.originalEvent.preventDefault();
    this.router.navigateByUrl(url);
  }
}