import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from './modules/material-module/material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MaterialModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title = 'admin-dashboard';
  public isSideNavOpened = true;

  toggleSideNav(): void {
    this.isSideNavOpened = !this.isSideNavOpened;
  }
}
