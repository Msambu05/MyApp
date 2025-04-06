import { Component } from '@angular/core';
import { Database, ref, set, get } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private db: Database) {}

  // Method to write data dynamically
  async writeData(path: string, data: any) {
    try {
      const dataRef = ref(this.db, path);
      await set(dataRef, data);
      console.log('Data written successfully!');
    } catch (error) {
      console.error('Error writing data: ', error);
    }
  }

  // Method to read data dynamically
  async readData(path: string) {
    try {
      const dataRef = ref(this.db, path);
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error reading data: ', error);
    }
  }
}