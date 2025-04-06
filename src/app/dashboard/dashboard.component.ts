import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false,
})
export class DashboardComponent  implements OnInit {

  totalPoints = 120;

  constructor() {}

  viewRewards() {
    // Navigate to rewards page
  }

  upcomingEvents() {
    // Navigate to events page
  }

  ngOnInit() {}

}
