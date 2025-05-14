import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: false, 
})
export class SignupPage {
  // Variables bound to form fields
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  async signup() {
    try {
      await this.authService.signUp(this.email, this.password);
      console.log('User signed up successfully!');
      this.router.navigate(['/dashboard']); // Navigate to dashboard or another route
    } catch (error) {
      console.error('Sign-up error:', error);
      // Handle error (e.g., show an alert)
    }
  }

  navigateToLogin() {
    // Navigate to the login page
    this.router.navigateByUrl('/login');
  }

  cancel() {
    // Clear fields or navigate back
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    // Or navigate somewhere else if needed
    // this.navCtrl.navigateBack('/');
  }
}
