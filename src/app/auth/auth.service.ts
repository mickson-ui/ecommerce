import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockUser = {
    email: 'mick@example.com',
    password: '123456'
  }

  constructor() { }

  validateUser(email: string, password: string): boolean {
    return email === this.mockUser.email && password === this.mockUser.password;
  }
}
