import { Injectable } from '@angular/core';

const Token_key = 'auth-Token';
const User_key = 'auth-User';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }
  saveToken(token: string): void {
    window.sessionStorage.removeItem(Token_key);
    window.sessionStorage.setItem(Token_key, token);
  }
  getToken(): string | null {
    return window.sessionStorage.getItem(Token_key);
  }
  saveUser(userkey: any): void {
    window.sessionStorage.removeItem(User_key);
    window.sessionStorage.setItem(User_key, JSON.stringify(userkey));
  }
  getUser(): any {
    const sam = window.sessionStorage.getItem(User_key);
    if (sam) {
      return JSON.parse(sam);
    }
    return {};
  }
}
