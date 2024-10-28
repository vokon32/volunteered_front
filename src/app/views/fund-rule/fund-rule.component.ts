import { Component } from '@angular/core';
import { AppViewComponent } from "../app-view/app-view.component";
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-fund-rule',
  standalone: true,
  imports: [AppViewComponent, FieldsetModule],
  templateUrl: './fund-rule.component.html',
  styleUrl: './fund-rule.component.scss'
})
export class FundRuleComponent {

}
