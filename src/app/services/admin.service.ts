import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface AdminUser {
  id: number;
  email: string;
  username: string;
  displayName: string;
  role: string;
  createdAt: string;
  lastLogin: string | null;
}

export interface AdminStats {
  totalUsers: number;
  totalQuizzes: number;
  totalNotes: number;
}

const API = `${environment.apiUrl}/api/admin`;

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);

  getUsers() {
    return this.http.get<AdminUser[]>(`${API}/users`);
  }

  getStats() {
    return this.http.get<AdminStats>(`${API}/stats`);
  }

  deleteUser(userId: number) {
    return this.http.delete(`${API}/users/${userId}`);
  }
}
