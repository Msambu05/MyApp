import { Injectable } from '@angular/core';
import { Auth, sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any = null; // Store user information

  constructor(private auth: Auth) {
    // Listen for authentication state changes
    onAuthStateChanged(this.auth, (user) => {
      this.user = user; // Update the user variable when auth state changes
    });
  }

  async signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async signOut() {
    return signOut(this.auth);
  }

  isAuthenticated(): boolean {
    return this.user !== null; // Check if a user is logged in
  }

  getCurrentUser() {
    return this.user; // Return the current user object
  }

  async resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }
}