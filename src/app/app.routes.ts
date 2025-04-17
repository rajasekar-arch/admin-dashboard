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
  {
    path: 'dashboard/learning-center',
    title: 'Learning Center',
    loadComponent: () =>
      import('./modules/dashboard/learning-center/learning-center.component').then(
        (m) => m.LearningCenterComponent,
      ),
  },
  {
    path: 'dashboard/goals',
    title: 'Goals',
    loadComponent: () =>
      import('./modules/dashboard/goals/goals.component').then((m) => m.GoalsComponent),
  },
  {
    path: 'dashboard/documents',
    title: 'Documents',
    loadComponent: () =>
      import('./modules/dashboard/document-center/document-center.component').then(
        (m) => m.DocumentCenterComponent,
      ),
  },
  {
    path: 'dashboard/policies',
    title: 'Documents',
    loadComponent: () =>
      import('./modules/dashboard/policies/policies.component').then((m) => m.PoliciesComponent),
  },
  {
    path: 'dashboard/employees-book',
    title: 'Employees Book',
    loadComponent: () =>
      import('./modules/dashboard/employees-book/employees-book.component').then(
        (m) => m.EmployeesBookComponent,
      ),
  },
  { path: '**', redirectTo: '/dashboard' }, // fallback route
];
