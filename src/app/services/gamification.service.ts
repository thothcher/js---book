import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

export interface GamificationLevel {
  level: number;
  titleEn: string;
  titleKa: string;
  currentXp: number;
  nextLevelXp: number | null;
}

export interface Badge {
  id: string;
  nameEn: string;
  nameKa: string;
  descriptionEn: string;
  descriptionKa: string;
  icon: string;
  category: string;
  earnedAt?: string;
  conditionType?: string;
  conditionValue?: number;
}

export interface Streak {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string | null;
}

export interface XpEvent {
  amount: number;
  source: string;
  sourceId: string;
  createdAt: string;
}

export interface GamificationStats {
  totalXp: number;
  todayXp: number;
  level: GamificationLevel;
  streak: Streak;
  earnedBadges: Badge[];
  allBadges: Badge[];
  recentXp: XpEvent[];
}

export interface GamificationResult {
  xpAwarded: number;
  totalXp: number;
  level: GamificationLevel;
  streak: Streak;
  newBadges: Badge[];
}

export interface LeaderboardEntry {
  rank: number;
  username: string;
  displayName: string;
  totalXp: number;
  level: GamificationLevel;
  currentStreak: number;
}

const API = `${environment.apiUrl}/api/gamification`;

@Injectable({ providedIn: 'root' })
export class GamificationService {
  private readonly http = inject(HttpClient);

  readonly stats = signal<GamificationStats | null>(null);
  readonly totalXp = computed(() => this.stats()?.totalXp ?? 0);
  readonly level = computed(() => this.stats()?.level ?? { level: 1, titleEn: 'Beginner', titleKa: 'დამწყები', currentXp: 0, nextLevelXp: 100 });
  readonly streak = computed(() => this.stats()?.streak ?? { currentStreak: 0, longestStreak: 0, lastActivityDate: null });
  readonly earnedBadges = computed(() => this.stats()?.earnedBadges ?? []);
  readonly allBadges = computed(() => this.stats()?.allBadges ?? []);

  /** XP toast queue */
  readonly pendingToast = signal<{ xp: number; badges: Badge[] } | null>(null);

  loadStats() {
    return this.http.get<GamificationStats>(API + '/stats').pipe(
      tap(stats => this.stats.set(stats))
    );
  }

  getLeaderboard() {
    return this.http.get<LeaderboardEntry[]>(API + '/leaderboard');
  }

  /** Process gamification result from any API response and show toast */
  processResult(result: GamificationResult | null | undefined) {
    if (!result) return;
    // Update local stats
    const current = this.stats();
    if (current) {
      this.stats.set({
        ...current,
        totalXp: result.totalXp,
        level: result.level,
        streak: result.streak,
        earnedBadges: [
          ...result.newBadges.map(b => ({ ...b, earnedAt: new Date().toISOString() })),
          ...current.earnedBadges,
        ],
      });
    }
    // Show toast
    this.pendingToast.set({
      xp: result.xpAwarded,
      badges: result.newBadges,
    });
  }

  dismissToast() {
    this.pendingToast.set(null);
  }
}
