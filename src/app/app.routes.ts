import { Routes } from '@angular/router';
import { AuthGuard } from './views/auth/auth.guard';

export const routes: Routes = [
  {
    path: 'app',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('../app/views/app-view/app-view.component').then(
        (m) => m.AppViewComponent
      ),
    children: [
      { path: '', redirectTo: 'organisation', pathMatch: 'full' },

      {
        path: 'settings',
        loadComponent: () =>
          import('../app/views/settings/settings.component').then(
            (m) => m.SettingsComponent
          ),
      },
      {
        path: 'organisation',
        loadComponent: () =>
          import('../app/views/organisation/organisation.component').then(
            (m) => m.OrganisationComponent
          ),
      },
      {
        path: 'nomenclature',
        loadComponent: () =>
          import('../app/views/nomenclature/nomenclature.component').then(
            (m) => m.NomenclatureComponent
          ),
      },
      {
        path: 'user',
        loadComponent: () =>
          import('../app/views/user/user.component').then(
            (m) => m.UserComponent
          ),
      },
      {
        path: 'appointment',
        loadComponent: () =>
          import('../app/views/appointment/appointment.component').then(
            (m) => m.AppointmentComponent
          ),
      },
      {
        path: 'fund-rule',
        loadComponent: () =>
          import('../app/views/fund-rule/fund-rule.component').then(
            (m) => m.FundRuleComponent
          ),
      },
      {
        path: 'act',
        loadComponent: () =>
          import('../app/views/act/act.component').then(
            (m) => m.ActComponent
          ),
      },
      {
        path: 'invoice',
        loadComponent: () =>
          import('../app/views/invoice/invoice.component').then(
            (m) => m.InvoiceComponent
          ),
      },
      {
        path: '**', redirectTo: 'organisation'
      }
    ],

  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('../app/views/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('../app/views/auth/registration/registration.component').then(
        (m) => m.RegistrationComponent
      ),
  }
]
