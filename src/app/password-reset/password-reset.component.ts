import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Adjust path if necessary
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
  standalone: false,
})
export class PasswordResetComponent {
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async resetPassword() {
    try {
      await this.authService.resetPassword(this.email);
      console.log('Password reset email sent!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error sending reset email:', error);
      // Optionally, display an error message to the user
      alert('Failed to send reset email. Please check your email address and try again.');
    }
  }
}