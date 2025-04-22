import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material-module/material/material.module';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  imports: [CommonModule, RouterLink, MaterialModule, FormsModule],
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  public error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  public submitSignUp(event:NgForm): void {
    const ngFormData: {name:string,email: string,password: string} = event.value;
    const result = this.auth.signUp({
      name: ngFormData.name?.trim(),
      email: ngFormData.email?.trim(),
      password: ngFormData.password?.trim(),
    });
    if (result.success) {
      this.router.navigate(['/sign-in']);
    } else {
      this.error = result.message;
    }
  }
}
