import { Component, OnInit } from '@angular/core';

interface Reward {
  name: string;
  cost: number;
  available: boolean; // Ensure this property is included
}

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss'],
  standalone: false,
})
export class RewardsComponent implements OnInit {
  points = 120;
  rewards: Reward[] = [
    { name: 'Reusable Bag', cost: 100, available: true }, // Added available property
    { name: 'Discount Coupon', cost: 200, available: false }
  ];

  constructor() {}

  ngOnInit() {
    // Initialization logic if needed
  }

  redeem(reward: Reward) {
    // Logic to redeem reward
    if (reward.available) {
      console.log(`Redeemed: ${reward.name}`);
    } else {
      console.log(`${reward.name} is not available for redemption.`);
    }
  }
}