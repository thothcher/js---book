import { Component, ChangeDetectionStrategy, signal, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';
import { GamificationService, LeaderboardEntry } from '../../services/gamification.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title"><iconify-icon icon="mdi:account-circle-outline" style="vertical-align: -0.125em"></iconify-icon> {{ t.t('profile.title') }}</h1>
        </div>

        <div class="profile-grid">
          <!-- User info -->
          <section class="profile-card card">
            <div class="avatar-section">
              <button class="avatar-wrapper" (click)="avatarInput.click()" aria-label="Change profile picture">
                @if (authService.currentUser()?.avatar) {
                  <img [src]="authService.currentUser()?.avatar" alt="Profile picture" class="avatar-img" />
                } @else {
                  <iconify-icon icon="mdi:account-circle" width="80" height="80" class="avatar-placeholder"></iconify-icon>
                }
                <span class="avatar-overlay"><iconify-icon icon="mdi:camera" width="20" height="20"></iconify-icon></span>
              </button>
              <input #avatarInput type="file" accept="image/*" hidden (change)="onAvatarSelect($event)" />
              @if (avatarUploading()) {
                <span class="avatar-status">Uploading...</span>
              }
            </div>
            <h2>{{ t.t('profile.accountInfo') }}</h2>
            @if (authService.currentUser(); as user) {
              @if (!editing()) {
                <div class="info-row">
                  <span class="info-label">{{ t.t('profile.displayName') }}</span>
                  <span class="info-value">{{ user.displayName || user.username }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">{{ t.t('profile.username') }}</span>
                  <span class="info-value">{{ user.username }}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">{{ t.t('profile.email') }}</span>
                  <span class="info-value">{{ user.email }}</span>
                </div>
                <button class="btn btn-outline" style="margin-top: 1rem" (click)="startEditing()"><iconify-icon icon="mdi:pencil-outline" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('profile.editProfile') }}</button>
              } @else {
                <div class="form-group">
                  <label class="form-label" for="displayName">{{ t.t('profile.displayName') }}</label>
                  <input id="displayName" class="form-input" [(ngModel)]="editName" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="editEmail">{{ t.t('profile.email') }}</label>
                  <input id="editEmail" class="form-input" type="email" [(ngModel)]="editEmail" />
                </div>
                <div class="form-actions">
                  <button class="btn btn-accent" (click)="saveProfile()"><iconify-icon icon="mdi:content-save-outline" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('profile.save') }}</button>
                  <button class="btn btn-ghost" (click)="editing.set(false)"><iconify-icon icon="mdi:close" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>{{ t.t('profile.cancel') }}</button>
                </div>
                @if (saveError()) {
                  <p class="error" role="alert">{{ saveError() }}</p>
                }
              }
            }
          </section>

          <!-- Progress -->
          <section class="progress-card card">
            <h2>{{ t.t('profile.myProgress') }}</h2>
            @if (progressData(); as data) {
              <div class="progress-stats">
                <div class="progress-stat">
                  <span class="stat-num">{{ data.chaptersCompleted }}</span>
                  <span class="stat-text">{{ t.t('profile.chaptersCompleted') }}</span>
                </div>
                <div class="progress-stat">
                  <span class="stat-num">{{ data.quizzesTaken }}</span>
                  <span class="stat-text">{{ t.t('profile.quizzesTaken') }}</span>
                </div>
                <div class="progress-stat">
                  <span class="stat-num">{{ data.avgScore }}%</span>
                  <span class="stat-text">{{ t.t('profile.avgQuizScore') }}</span>
                </div>
                <div class="progress-stat">
                  <span class="stat-num">{{ data.notesCount }}</span>
                  <span class="stat-text">{{ t.t('profile.notesWritten') }}</span>
                </div>
              </div>
            } @else {
              <p class="text-muted">{{ t.t('profile.loadingProgress') }}</p>
            }
          </section>

          <!-- Leaderboard -->
          <section class="leaderboard-card card">
            <h2><iconify-icon icon="mdi:trophy-outline" style="vertical-align: -0.125em; margin-right: 0.3rem"></iconify-icon>Leaderboard</h2>
            @if (leaderboard().length > 0) {
              <div class="leaderboard-list">
                @for (entry of leaderboard(); track entry.rank) {
                  <div class="lb-row" [class.lb-me]="entry.username === authService.currentUser()?.username">
                    <span class="lb-rank">
                      @if (entry.rank === 1) {
                        <iconify-icon icon="mdi:trophy" width="18" height="18" style="color: #f5a623"></iconify-icon>
                      } @else if (entry.rank === 2) {
                        <iconify-icon icon="mdi:trophy" width="18" height="18" style="color: #aab2bd"></iconify-icon>
                      } @else if (entry.rank === 3) {
                        <iconify-icon icon="mdi:trophy" width="18" height="18" style="color: #cd7f32"></iconify-icon>
                      } @else {
                        #{{ entry.rank }}
                      }
                    </span>
                    <span class="lb-name">{{ entry.displayName || entry.username }}</span>
                    <span class="lb-xp">{{ entry.totalXp }} XP</span>
                    <span class="lb-streak" title="Streak">
                      <iconify-icon icon="mdi:fire" width="14" height="14" style="color: #e74c3c; vertical-align: -0.15em"></iconify-icon>
                      {{ entry.currentStreak }}
                    </span>
                  </div>
                }
              </div>
            } @else {
              <p class="text-muted">No leaderboard data yet.</p>
            }
          </section>
        </div>
      </div>
    </div>
  `,
  styles: `
    .profile-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    .profile-card, .progress-card, .sub-card {
      padding: 1.5rem;
    }

    .avatar-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 1.25rem;
    }
    .avatar-wrapper {
      position: relative;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      border: 3px solid var(--color-border);
      background: var(--color-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      transition: border-color var(--transition-normal);
    }
    .avatar-wrapper:hover { border-color: var(--color-accent); }
    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .avatar-placeholder { color: var(--color-text-muted); }
    .avatar-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      opacity: 0;
      transition: opacity var(--transition-fast);
    }
    .avatar-wrapper:hover .avatar-overlay { opacity: 1; }
    .avatar-status {
      font-size: 0.8rem;
      color: var(--color-text-muted);
      margin-top: 0.5rem;
    }
    .sub-card {
      grid-column: 1 / -1;
    }

    .leaderboard-card {
      grid-column: 1 / -1;
    }
    .leaderboard-list {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
    }
    .lb-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.55rem 0.75rem;
      border-radius: var(--radius-md);
      font-size: 0.88rem;
      transition: background var(--transition-fast);
    }
    .lb-row:hover { background: var(--color-bg); }
    .lb-me {
      background: rgba(192, 57, 43, 0.06);
      font-weight: 600;
    }
    .lb-rank {
      width: 32px;
      text-align: center;
      font-weight: 700;
      font-size: 0.82rem;
      color: var(--color-text-muted);
      flex-shrink: 0;
    }
    .lb-name {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--color-text);
    }
    .lb-xp {
      font-weight: 700;
      color: var(--color-accent);
      font-size: 0.82rem;
      flex-shrink: 0;
    }
    .lb-streak {
      font-size: 0.8rem;
      color: var(--color-text-muted);
      flex-shrink: 0;
    }

    h2 {
      color: var(--color-primary);
      font-size: 1.15rem;
      margin-bottom: 1.25rem;
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--color-border);
    }

    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 0.6rem 0;
      border-bottom: 1px dashed var(--color-border);
    }
    .info-label {
      color: var(--color-text-muted);
      font-size: 0.9rem;
    }
    .info-value {
      font-weight: 600;
      color: var(--color-text);
      font-size: 0.9rem;
    }

    .form-actions { display: flex; gap: 0.75rem; margin-top: 1rem; }
    .error { color: #e74c3c; font-size: 0.85rem; margin-top: 0.5rem; }

    .progress-stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .progress-stat {
      text-align: center;
      padding: 1rem;
      background: var(--color-bg);
      border-radius: var(--radius-md);
    }
    .stat-num {
      display: block;
      font-size: 1.75rem;
      font-weight: 800;
      color: var(--color-accent);
    }
    .stat-text {
      font-size: 0.8rem;
      color: var(--color-text-muted);
    }

    .sub-info p {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--color-text-light);
      margin-bottom: 0.5rem;
    }

    .trial-countdown {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.5rem 1rem;
      border-radius: var(--radius-md);
      background: #fff8e1;
      color: #f57f17;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    .trial-countdown strong {
      font-size: 1.25rem;
    }

    @media (max-width: 640px) {
      .profile-grid { grid-template-columns: 1fr; }
    }
  `
})
export class ProfilePage implements OnInit {
  protected readonly authService = inject(AuthService);
  private readonly progressService = inject(ProgressService);
  private readonly gamService = inject(GamificationService);
  protected readonly t = inject(LanguageService);

  protected readonly editing = signal(false);
  protected readonly saveError = signal('');
  protected readonly avatarUploading = signal(false);
  protected readonly leaderboard = signal<LeaderboardEntry[]>([]);
  protected readonly progressData = signal<{
    chaptersCompleted: number;
    quizzesTaken: number;
    avgScore: number;
    notesCount: number;
  } | null>(null);

  protected editName = '';
  protected editEmail = '';

  ngOnInit() {
    this.loadProgress();
    this.loadLeaderboard();
  }

  startEditing() {
    const user = this.authService.currentUser();
    if (user) {
      this.editName = user.displayName || user.username;
      this.editEmail = user.email;
      this.editing.set(true);
      this.saveError.set('');
    }
  }

  onAvatarSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (file.size > 500 * 1024) {
      alert('Image too large. Max 500KB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      this.avatarUploading.set(true);
      this.authService.uploadAvatar(base64).subscribe({
        next: () => this.avatarUploading.set(false),
        error: () => this.avatarUploading.set(false),
      });
    };
    reader.readAsDataURL(file);
    input.value = '';
  }

  saveProfile() {
    this.authService.updateProfile({
      displayName: this.editName,
      email: this.editEmail
    }).subscribe({
      next: () => {
        this.editing.set(false);
        this.authService.refreshProfile().subscribe();
      },
      error: (err: { error?: { error?: string } }) => {
        this.saveError.set(err.error?.error || 'Failed to update profile');
      }
    });
  }

  private loadProgress() {
    this.progressService.getProgress().subscribe({
      next: (data) => {
        const completed = data.chapters?.filter(c => c.status === 'completed').length || 0;
        const quizzes = data.quizzes?.length || 0;
        const avgScore = quizzes > 0
          ? Math.round(data.quizzes.reduce((sum, q) => sum + q.bestScore, 0) / quizzes)
          : 0;
        this.progressData.set({
          chaptersCompleted: completed,
          quizzesTaken: quizzes,
          avgScore,
          notesCount: 0
        });
      },
      error: () => {
        this.progressData.set({ chaptersCompleted: 0, quizzesTaken: 0, avgScore: 0, notesCount: 0 });
      }
    });
  }

  private loadLeaderboard() {
    this.gamService.getLeaderboard().subscribe({
      next: (data) => this.leaderboard.set(data.slice(0, 10)),
      error: () => {},
    });
  }
}
