import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material-module/material/material.module';
import { CommonModule } from '@angular/common';
import { IMenuItemsList } from '../../../interfaces/dashboard.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, RouterLink, MaterialModule],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  public menuListItems: IMenuItemsList[] = _.sortBy([
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
    {
      name: 'Learning Center',
      routerLink: '/dashboard/learning-center',
      subTitle: '',
    },
    {
      name: 'Documents',
      routerLink: '/dashboard/documents',
      subTitle: '',
    },
    {
      name: 'Goals',
      routerLink: '/dashboard/goals',
      subTitle: '',
    },
  ],(res:IMenuItemsList) => res.name);
}
