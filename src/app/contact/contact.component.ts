import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false,
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  submitContact() {
    // Handle contact form submission (e.g., send to an API)
    console.log('Contact submitted:', { name: this.name, email: this.email, message: this.message });
  }
}