import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: false,
})
export class ProfileComponent implements OnInit {
  userProfile: any;

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit() {
    const userId = this.userService.getCurrentUserId();
    if (userId) {
      this.userService.getUserProfile(userId).subscribe(
        profile => {
          this.userProfile = profile; // Update userProfile with data from Firestore
        },
        error => {
          console.error('Error fetching user profile:', error);
        }
      );
    }
  }

  updateProfile() { // No parameters needed
    const userId = this.userService.getCurrentUserId();
    if (userId) {
      this.userService.updateUserProfile(userId, this.userProfile) // Use the userProfile directly
        .then(() => {
          console.log('Profile updated successfully!');
        })
        .catch(error => {
          console.error('Failed to update profile:', error);
        });
    }
  }
}