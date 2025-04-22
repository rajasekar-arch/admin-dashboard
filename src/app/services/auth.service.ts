import { Injectable } from '@angular/core';
import { User } from './../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private storageKey = 'users';

  public signUp(user: User): { success: boolean; message: string } {
    const users: User[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    const userExists = users.find((u) => u.email === user.email && u.password === user.password);

    if (userExists) {
      return { success: false, message: 'Email already registered.' };
    }

    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, message: 'Sign up successful!' };
  }

  public signIn(email: string, password: string): { success: boolean; message: string } {
    const users: User[] = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return { success: false, message: 'Invalid email or password.' };
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, message: 'Sign in successful!' };
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
  }
}
