import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material-module/material/material.module';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, RouterLink, MaterialModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  public error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  public submitSignIn(event: NgForm): void {
    const ngFormData: { email: string; password: string } = event.value;
    const result = this.auth.signIn(ngFormData.email?.trim(), ngFormData.password?.trim());
    if (result.success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = result.message;
    }
  }
}
