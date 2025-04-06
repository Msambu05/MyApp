import { Injectable } from '@angular/core';
import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  // Get user profile by user ID
  getUserProfile(userId: string): Observable<any> {
    const userDoc = doc(this.firestore, `users/${userId}`);
    return from(getDoc(userDoc)).pipe(
      map(docSnapshot => docSnapshot.data())
    );
  }

  // Update user profile by user ID
  updateUserProfile(userId: string, data: any): Promise<void> {
    const userDoc = doc(this.firestore, `users/${userId}`);
    return setDoc(userDoc, data, { merge: true })
      .catch(error => {
        console.error('Error updating user profile:', error);
        throw error; // Rethrow the error for further handling
      });
  }

  // Get the currently authenticated user's ID
  getCurrentUserId(): string | null {
    const user = this.authService.getCurrentUser();
    return user ? user.uid : null; // Return the user ID or null
  }
}