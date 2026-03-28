import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Note {
  id: number;
  title: string;
  content: string;
  chapterId: number | null;
  color: string;
  createdAt: string;
  updatedAt: string;
}

const API = `${environment.apiUrl}/api/notes`;

@Injectable({ providedIn: 'root' })
export class NotesService {
  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<Note[]>(API);
  }

  create(note: { title: string; content: string; chapterId?: number; color?: string }) {
    return this.http.post<Note>(API, note);
  }

  update(id: number, note: { title?: string; content?: string; color?: string }) {
    return this.http.put(`${API}/${id}`, note);
  }

  delete(id: number) {
    return this.http.delete(`${API}/${id}`);
  }
}
