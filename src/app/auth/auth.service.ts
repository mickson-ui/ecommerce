import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockUser = {
    email: 'mick@example.com',
    password: '123456'
  }
  private userName: string | null = null;

  constructor() { }

  validateUser(email: string, password: string): boolean {
    return email === this.mockUser.email && password === this.mockUser.password;
  }

  setUserName(name: string): void{
    this.userName = name;
  }

  getUserName(): string | null {
    return this.userName;
  }

  clearUserName(): void {
    this.userName = null;
  }
}
