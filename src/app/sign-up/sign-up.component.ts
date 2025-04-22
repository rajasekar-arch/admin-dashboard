import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material-module/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  imports: [CommonModule, RouterLink, MaterialModule, FormsModule],
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  public name = '';
  public email = '';
  public password = '';
  public error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  public submitForm(): void {
    const result = this.auth.signUp({
      name: this.name,
      email: this.email,
      password: this.password,
    });
    if (result.success) {
      this.router.navigate(['/sign-in']);
    } else {
      this.error = result.message;
    }
  }
}
