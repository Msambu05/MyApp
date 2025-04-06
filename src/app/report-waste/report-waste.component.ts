import { Component, OnInit } from '@angular/core';
import { f } from '@angular/core/weak_ref.d-Bp6cSy-X';

@Component({
  selector: 'app-report-waste',
  templateUrl: './report-waste.component.html',
  styleUrls: ['./report-waste.component.scss'],
  standalone: false,
})
export class ReportWasteComponent {
  location: string = '';
  description: string = '';

  submitReport() {
    // Logic to submit report
  }
}
