import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: false,
})
export class SettingsComponent {
  // Add settings properties here, e.g., notifications, themes, etc.
  notificationsEnabled: boolean = false;  // To enable notifications
  darkModeEnabled: boolean = false;        // To enable dark mode
  emailNotificationsEnabled: boolean = false; // To enable email notifications
  accountPrivacy: string = 'public';       // Default privacy setting
  selectedLanguage: string = 'en';         // Default language setting

  saveSettings() {
    // Logic to save settings
    console.log('Settings saved:', {
      notificationsEnabled: this.notificationsEnabled,
      darkModeEnabled: this.darkModeEnabled,
      emailNotificationsEnabled: this.emailNotificationsEnabled,
      accountPrivacy: this.accountPrivacy,
      selectedLanguage: this.selectedLanguage,
    });
    // You can implement actual saving logic here
  }
}