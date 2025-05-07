import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule, Location } from '@angular/common';
import { MaterialModule } from '../modules/material-module/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { ISideMenuListItems } from './../interfaces/main-layout.interface';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MaterialModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements OnInit {
  public title = 'admin-dashboard';
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
  ];

  constructor(
    private location: Location,
    private router: Router,
    private auth: AuthService,
  ) {}

  public ngOnInit(): void {
    this.showBackButton = this.currentUrl !== '/management/';
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showBackButton = event.url.includes('/management/');
      });
  }

  public toggleSideNav(): void {
    this.isSideNavOpened = !this.isSideNavOpened;
  }

  goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']); // Fallback route
    }
  }

  public logout(): void {
    this.auth.logout();
    this.router.navigate(['/sign-in']);
  }
}
