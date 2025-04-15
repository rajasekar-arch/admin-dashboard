import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material-module/material/material.module';
import { CommonModule } from '@angular/common';
import { IMenuItemsList } from '../../../interfaces/dashboard.interface';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, RouterLink, MaterialModule],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public menuListItems: IMenuItemsList[] = [
    {
      name: 'Leave management',
      routerLink: '/dashboard/leaves-management',
      subTitle: '',
    },
    {
      name: 'Personal Information',
      routerLink: '/dashboard/personal-info',
      subTitle: '',
    },
    {
      name: 'Users Information',
      routerLink: '/dashboard/users-info',
      subTitle: '',
    },
  ];
}
