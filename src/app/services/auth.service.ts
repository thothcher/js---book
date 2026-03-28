import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export interface User {
  id: number;
  email: string;
  username: string;
  displayName: string;
  role: 'user' | 'admin';
  createdAt?: string;
  lastLogin?: string;
  emailVerified?: boolean;
  avatar?: string | null;
}

interface AuthResponse {
  token: string;
  user: User;
  requiresVerification?: boolean;
}

const API_URL = `${environment.apiUrl}/api/auth`;

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  /** Current user signal */
  readonly currentUser = signal<User | null>(null);

  /** Computed auth state helpers */
  readonly isLoggedIn = computed(() => !!this.currentUser());
  readonly isAdmin = computed(() => this.currentUser()?.role === 'admin');
  readonly isEmailVerified = computed(() => !!this.currentUser()?.emailVerified);
  readonly token = signal<string | null>(null);

  constructor() {
    // Restore session from localStorage
    const savedToken = localStorage.getItem('jslearn_token') || localStorage.getItem('psy_token');
    const savedUser = localStorage.getItem('jslearn_user') || localStorage.getItem('psy_user');
    if (savedToken && savedUser) {
      this.token.set(savedToken);
      try {
        this.currentUser.set(JSON.parse(savedUser));
      } catch {
        this.logout();
      }
    }
  }

  register(email: string, username: string, password: string, displayName: string) {
    return this.http.post<AuthResponse>(`${API_URL}/register`, {
      email, username, password, displayName
    }).pipe(
      tap(res => this.handleAuth(res)),
      catchError(err => throwError(() => err))
    );
  }

  login(login: string, password: string) {
    return this.http.post<AuthResponse>(`${API_URL}/login`, { login, password }).pipe(
      tap(res => this.handleAuth(res)),
      catchError(err => throwError(() => err))
    );
  }

  verifyEmail(code: string) {
    return this.http.post<{ message: string; user: User }>(`${API_URL}/verify-email`, { code }).pipe(
      tap(res => {
        this.currentUser.set(res.user);
        localStorage.setItem('jslearn_user', JSON.stringify(res.user));
      }),
      catchError(err => throwError(() => err))
    );
  }

  resendVerification() {
    return this.http.post<{ message: string }>(`${API_URL}/resend-verification`, {}).pipe(
      catchError(err => throwError(() => err))
    );
  }

  forgotPassword(email: string) {
    return this.http.post<{ message: string }>(`${API_URL}/forgot-password`, { email }).pipe(
      catchError(err => throwError(() => err))
    );
  }

  resetPassword(email: string, code: string, newPassword: string) {
    return this.http.post<{ message: string }>(`${API_URL}/reset-password`, { email, code, newPassword }).pipe(
      catchError(err => throwError(() => err))
    );
  }

  logout() {
    this.currentUser.set(null);
    this.token.set(null);
    localStorage.removeItem('jslearn_token');
    localStorage.removeItem('jslearn_user');
    localStorage.removeItem('psy_token');
    localStorage.removeItem('psy_user');
    this.router.navigate(['/login']);
  }

  refreshProfile() {
    return this.http.get<User>(`${API_URL}/me`).pipe(
      tap(user => {
        this.currentUser.set(user);
        localStorage.setItem('jslearn_user', JSON.stringify(user));
      })
    );
  }

  updateProfile(data: { displayName?: string; email?: string }) {
    return this.http.put(`${API_URL}/me`, data);
  }

  uploadAvatar(avatar: string) {
    return this.http.put<{ message: string; avatar: string }>(`${API_URL}/me/avatar`, { avatar }).pipe(
      tap(res => {
        const user = this.currentUser();
        if (user) {
          const updated = { ...user, avatar: res.avatar };
          this.currentUser.set(updated);
          localStorage.setItem('jslearn_user', JSON.stringify(updated));
        }
      })
    );
  }

  private handleAuth(res: AuthResponse) {
    this.token.set(res.token);
    this.currentUser.set(res.user);
    localStorage.setItem('jslearn_token', res.token);
    localStorage.setItem('jslearn_user', JSON.stringify(res.user));
  }
}
