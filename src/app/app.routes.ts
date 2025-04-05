import { Routes } from '@angular/router';
import { SettingsComponent } from './modules/settings/settings.component';
import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '/dashboard' }, // fallback route
];
