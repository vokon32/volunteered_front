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
      }
    ],
 
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
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
