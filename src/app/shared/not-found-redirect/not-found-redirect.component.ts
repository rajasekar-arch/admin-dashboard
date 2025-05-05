import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-not-found-redirect',
  imports: [RouterModule],
  templateUrl: './not-found-redirect.component.html',
  styleUrl: './not-found-redirect.component.scss',
})
export class NotFoundRedirectComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/sign-in']);
    }
  }
}
