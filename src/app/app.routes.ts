import { Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NotFoundRedirectComponent } from './shared/not-found-redirect/not-found-redirect.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'settings',
        loadComponent: () =>
          import('./modules/settings/settings.component').then((m) => m.SettingsComponent), // child route component that the router renders
      },
      {
        path: 'management/leaves-management', // child route path
        title: 'Leave-Management',
        loadComponent: () =>
          import('./modules/dashboard/leaves-management/leaves-management.component').then(
            (m) => m.LeavesManagementComponent,
          ), // child route component that the router renders
      },
      {
        path: 'management/personal-info', // child route path
        title: 'Personal Info',
        loadComponent: () =>
          import('./modules/dashboard/personal-information/personal-information.component').then(
            (m) => m.PersonalInformationComponent,
          ), // child route component that the router renders
      },
      {
        path: 'management/users-info', // child route path
        title: 'Users Management',
        providers: [HttpClientModule],
        loadComponent: () =>
          import('./modules/dashboard/users-list/users-list.component').then(
            (m) => m.UsersListComponent,
          ), // child route component that the router renders
      },
      {
        path: 'management/learning-center',
        title: 'Learning Center',
        loadComponent: () =>
          import('./modules/dashboard/learning-center/learning-center.component').then(
            (m) => m.LearningCenterComponent,
          ),
      },
      {
        path: 'management/goals',
        title: 'Goals',
        loadComponent: () =>
          import('./modules/dashboard/goals/goals.component').then((m) => m.GoalsComponent),
      },
      {
        path: 'management/documents',
        title: 'Documents',
        loadComponent: () =>
          import('./modules/dashboard/document-center/document-center.component').then(
            (m) => m.DocumentCenterComponent,
          ),
      },
      {
        path: 'management/policies',
        title: 'Documents',
        loadComponent: () =>
          import('./modules/dashboard/policies/policies.component').then(
            (m) => m.PoliciesComponent,
          ),
      },
      {
        path: 'management/employees-book',
        title: 'Employees Book',
        loadComponent: () =>
          import('./modules/dashboard/employees-book/employees-book.component').then(
            (m) => m.EmployeesBookComponent,
          ),
      },
      {
        path: 'management/calendar',
        title: 'Calendar',
        loadComponent: () =>
          import('./modules/dashboard/calendar/calendar.component').then(
            (m) => m.CalendarComponent,
          ),
      },
      {
        path: 'management/contacts',
        title: 'Contacts',
        loadComponent: () =>
          import('./modules/dashboard/contacts/contacts.component').then(
            (m) => m.ContactsComponent,
          ),
      },
      {
        path: 'management/help-desk',
        title: 'Help Desk',
        loadComponent: () =>
          import('./modules/dashboard/help-desk/help-desk.component').then(
            (m) => m.HelpDeskComponent,
          ),
      },
      {
        path: 'management',
        title: 'Management',
        loadComponent: () =>
          import('./modules/management/manage-home/manage-home.component').then(
            (m) => m.ManageHomeComponent,
          ),
      },
    ],
  },
  { path: '**', component: NotFoundRedirectComponent }
];
