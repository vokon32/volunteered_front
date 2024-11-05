import { Component } from '@angular/core';
import { AppViewComponent } from "../app-view/app-view.component";
import { FieldsetModule } from 'primeng/fieldset';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-fund-rule',
  standalone: true,
  imports: [AppViewComponent, FieldsetModule, ChartModule],
  templateUrl: './fund-rule.component.html',
  styleUrl: './fund-rule.component.scss'
})
export class FundRuleComponent {

  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };


    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }

}
