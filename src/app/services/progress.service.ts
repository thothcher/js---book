import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface ChapterProgress {
  chapterId: number;
  status: 'not_started' | 'in_progress' | 'completed';
  updatedAt: string;
}

export interface QuizResult {
  chapterId: number;
  bestScore: number;
  totalQuestions: number;
  attempts: number;
}

export interface GameScore {
  level: string;
  bestMoves: number;
  bestTime: number;
}

export interface UserProgress {
  chapters: ChapterProgress[];
  quizzes: QuizResult[];
  gameScores: GameScore[];
}

const API = `${environment.apiUrl}/api`;

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly http = inject(HttpClient);

  getProgress() {
    return this.http.get<UserProgress>(`${API}/progress`);
  }

  updateChapter(chapterId: number, status: string) {
    return this.http.post(`${API}/progress/chapter`, { chapterId, status });
  }

  submitQuiz(data: { chapterId: number; quizId: string; score: number; totalQuestions: number }) {
    return this.http.post(`${API}/quiz/submit`, data);
  }

  getQuizHistory(chapterId: number) {
    return this.http.get<any[]>(`${API}/quiz/history/${chapterId}`);
  }

  submitGameScore(data: { level: string; moves: number; timeSeconds: number }) {
    return this.http.post(`${API}/game/score`, data);
  }

  getLeaderboard(level: string) {
    return this.http.get<any[]>(`${API}/game/leaderboard/${level}`);
  }
}
