import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material-module/material/material.module';
import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MaterialModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public title = 'admin-dashboard';
  public isSideNavOpened = true;
  public showBackButton = false;
  public currentUrl = '';

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.currentUrl = this.router.url;
      this.showBackButton = this.currentUrl !== '/dashboard';
    });
  }

  public toggleSideNav(): void {
    this.isSideNavOpened = !this.isSideNavOpened;
  }

  public goBack(): void {
    this.location.back();
  }
}
