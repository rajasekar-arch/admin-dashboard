import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

import { MaterialModule } from '../../material-module/material/material.module';
import { CommonModule } from '@angular/common';
import { IMenuItemsList } from '../../../interfaces/dashboard.interface';
import * as _ from 'lodash';

@Component({
  selector: 'app-manage-home',
  imports: [CommonModule, RouterModule, RouterLink, MaterialModule],
  templateUrl: './manage-home.component.html',
  styleUrl: './manage-home.component.scss',
})
export class ManageHomeComponent {
  public menuListItems: IMenuItemsList[] = _.sortBy(
    [
      {
        name: 'Leave management',
        routerLink: '/management/leaves-management',
        subTitle: '',
      },
      {
        name: 'Personal Information',
        routerLink: '/management/personal-info',
        subTitle: '',
      },
      {
        name: 'Users Information',
        routerLink: '/management/users-info',
        subTitle: '',
      },
      {
        name: 'Learning Center',
        routerLink: '/management/learning-center',
        subTitle: '',
      },
      {
        name: 'Documents',
        routerLink: '/management/documents',
        subTitle: '',
      },
      {
        name: 'Goals',
        routerLink: '/management/goals',
        subTitle: '',
      },
      {
        name: 'Policies',
        routerLink: '/management/policies',
        subTitle: '',
      },
      {
        name: 'Employees Book',
        routerLink: '/management/employees-book',
        subTitle: '',
      },
    ],
    (res: IMenuItemsList) => res.name,
  );
}
