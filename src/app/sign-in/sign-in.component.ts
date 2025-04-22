import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material-module/material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, RouterLink, MaterialModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  public email = '';
  public password = '';
  public error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  public submitSignIn(): void {
    const result = this.auth.signIn(this.email, this.password);
    if (result.success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = result.message;
    }
  }
}
