import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class AuthSessionService {
  private tokenKey = 'auth-token';

  setToken(token: string): void {
    sessionStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    sessionStorage.removeItem(this.tokenKey);
    localStorage.removeItem('isAdminLoggedIn');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
