import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Flashcard {
  id: number;
  chapterId: number;
  frontEn: string;
  frontKa: string;
  backEn: string;
  backKa: string;
  category: string;
}

export interface FlashcardProgress {
  flashcardId: number;
  difficulty: string;
  reviewCount: number;
  nextReview: string;
  lastReviewed: string;
}

const API = `${environment.apiUrl}/api/flashcards`;

@Injectable({ providedIn: 'root' })
export class FlashcardService {
  private readonly http = inject(HttpClient);

  getCards(chapterId: number) {
    return this.http.get<Flashcard[]>(`${API}/${chapterId}`);
  }

  getProgress(chapterId: number) {
    return this.http.get<FlashcardProgress[]>(`${API}/${chapterId}/progress`);
  }

  reviewCard(flashcardId: number, difficulty: 'hard' | 'medium' | 'easy') {
    return this.http.post<{ success: boolean; nextReview: string }>(`${API}/review`, { flashcardId, difficulty });
  }

  completeSession(chapterId: number) {
    return this.http.post<{ success: boolean; gamification: any }>(`${API}/session-complete`, { chapterId });
  }

  getSummary() {
    return this.http.get<{ chapterId: number; count: number }[]>(`${API}/all/summary`);
  }
}
