import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  standalone: false,
})
export class EventsComponent implements OnInit {
  events = [
    { title: 'Clean-Up Day', date: 'April 15, 2025' },
    { title: 'Recycling Workshop', date: 'April 22, 2025' }
  ];

  constructor() {}

  ngOnInit() {
    // Initialization logic if needed
  }

  rsvp(event: { title: string }) {
    // Logic to RSVP for an event
    console.log(`RSVP for: ${event.title}`);
  }
}
