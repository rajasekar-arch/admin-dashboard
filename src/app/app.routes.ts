import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./modules/settings/settings.component').then((m) => m.SettingsComponent), // child route component that the router renders
  },
  {
    path: 'dashboard/leaves-management', // child route path
    title: 'Leave-Management',
    loadComponent: () =>
      import('./modules/dashboard/leaves-management/leaves-management.component').then(
        (m) => m.LeavesManagementComponent,
      ), // child route component that the router renders
  },
  {
    path: 'dashboard/personal-info', // child route path
    title: 'Personal Info',
    loadComponent: () =>
      import('./modules/dashboard/personal-information/personal-information.component').then(
        (m) => m.PersonalInformationComponent,
      ), // child route component that the router renders
  },
  {
    path: 'dashboard/users-info', // child route path
    title: 'Users Management',
    providers: [HttpClientModule],
    loadComponent: () =>
      import('./modules/dashboard/users-list/users-list.component').then(
        (m) => m.UsersListComponent,
      ), // child route component that the router renders
  },
  { path: '**', redirectTo: '/dashboard' }, // fallback route
];
