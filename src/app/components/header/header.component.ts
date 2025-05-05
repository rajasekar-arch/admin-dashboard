import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material-module/material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ISideMenuListItems } from '../../interfaces/main-layout.interface';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MaterialModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchText = '';
  menuItems = ['Dashboard', 'Users', 'Leave Management', 'Documents', 'Goals', 'Contacts'];
  public isSideNavOpened = true;
  public showBackButton = false;
  public currentUrl = '';
  public sideMenuList: ISideMenuListItems[] = [
    {
      name: 'Dashboard',
      id: 1,
      routerName: '/dashboard',
      iconName: 'dashboard',
    },
    {
      name: 'Departments',
      id: 2,
      routerName: '/department',
      iconName: 'account_tree',
    },
    {
      name: 'Management',
      id: 3,
      routerName: '/management',
      iconName: 'manage_accounts',
    },
    {
      name: 'Settings',
      id: 4,
      routerName: '/settings',
      iconName: 'admin_panel_settings',
    },
    {
      name: 'Customization',
      id: 4,
      routerName: '/customize',
      iconName: 'admin_panel_settings',
    },
  ];
  onSearch() {
    console.log('Searching for:', this.searchText);
  }

  public toggleSideNav(): void {
    this.isSideNavOpened = !this.isSideNavOpened;
  }
}
