import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async signIn() {
    try {
      await this.authService.signIn(this.email, this.password);
      console.log('User signed in successfully!');
      this.router.navigate(['/dashboard']); // Navigate to dashboard or another route
    } catch (error) {
      console.error('Sign-in error:', error);
      // Handle error (e.g., show an alert)
    }
  }
}
