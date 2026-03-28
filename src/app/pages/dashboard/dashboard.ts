import { Component, ChangeDetectionStrategy, inject, OnInit, signal, computed, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GamificationService, Badge } from '../../services/gamification.service';
import { LanguageService } from '../../services/language.service';
import { ProgressService, UserProgress } from '../../services/progress.service';
import { CHAPTERS } from '../../data/book-data';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <!-- Greeting -->
        <div class="greeting">
          <div class="greeting-text">
            <h1>{{ t.t('dashboard.greeting', { name: auth.currentUser()?.displayName ?? '' }) }}</h1>
            <p class="greeting-sub">{{ t.t('dashboard.greetingSub') }}</p>
          </div>
          @if (gam.streak().currentStreak > 0) {
            <div class="streak-badge">
              <iconify-icon icon="mdi:fire" width="22" height="22"></iconify-icon>
              <span>{{ gam.streak().currentStreak }} {{ t.t('dashboard.dayStreak') }}</span>
            </div>
          }
        </div>

        <!-- Quick Stats -->
        <div class="stats-grid">
          <div class="stat-card xp-card">
            <iconify-icon icon="mdi:star-four-points" width="28" height="28"></iconify-icon>
            <div class="stat-body">
              <span class="stat-number">{{ gam.totalXp() }}</span>
              <span class="stat-label">{{ t.t('dashboard.totalXp') }}</span>
            </div>
          </div>
          <div class="stat-card level-card">
            <iconify-icon icon="mdi:shield-star" width="28" height="28"></iconify-icon>
            <div class="stat-body">
              <span class="stat-number">{{ t.lang() === 'ka' ? gam.level().titleKa : gam.level().titleEn }}</span>
              <span class="stat-label">{{ t.t('dashboard.level') }} {{ gam.level().level }}</span>
            </div>
          </div>
          <div class="stat-card streak-card">
            <iconify-icon icon="mdi:fire" width="28" height="28"></iconify-icon>
            <div class="stat-body">
              <span class="stat-number">{{ gam.streak().currentStreak }}</span>
              <span class="stat-label">{{ t.t('dashboard.streak') }}</span>
            </div>
          </div>
          <div class="stat-card badge-card">
            <iconify-icon icon="mdi:medal" width="28" height="28"></iconify-icon>
            <div class="stat-body">
              <span class="stat-number">{{ gam.earnedBadges().length }}</span>
              <span class="stat-label">{{ t.t('dashboard.badges') }}</span>
            </div>
          </div>
        </div>

        <!-- Level progress bar -->
        @if (gam.level().nextLevelXp) {
          <div class="level-progress-section">
            <div class="level-progress-header">
              <span>{{ t.t('dashboard.level') }} {{ gam.level().level }}</span>
              <span>{{ gam.totalXp() }} / {{ gam.level().nextLevelXp }} XP</span>
            </div>
            <div class="level-bar">
              <div class="level-fill" [style.width.%]="xpPercent()"></div>
            </div>
          </div>
        }

        <div class="dashboard-grid">
          <!-- Continue learning -->
          <section class="dash-section">
            <h2 class="section-title">
              <iconify-icon icon="mdi:book-open-page-variant" width="20" height="20"></iconify-icon>
              {{ t.t('dashboard.continueLearning') }}
            </h2>
            @if (nextChapter(); as ch) {
              <a [routerLink]="['/chapters', ch.id]" class="continue-card card">
                <div class="continue-icon">
                  <iconify-icon [icon]="ch.icon" width="32" height="32"></iconify-icon>
                </div>
                <div class="continue-info">
                  <span class="continue-chapter">{{ t.t('dashboard.chapter') }} {{ ch.id }}</span>
                  <span class="continue-title">{{ t.lang() === 'ka' ? ch.titleKa : ch.title }}</span>
                  <div class="continue-progress-bar">
                    <div class="continue-fill" [style.width.%]="chapterPercent(ch.id)"></div>
                  </div>
                </div>
                <iconify-icon icon="mdi:chevron-right" width="24" height="24" class="continue-arrow"></iconify-icon>
              </a>
            } @else {
              <div class="card empty-card">
                <iconify-icon icon="mdi:check-all" width="32" height="32"></iconify-icon>
                <p>{{ t.t('dashboard.allComplete') }}</p>
              </div>
            }
          </section>

          <!-- Quick Actions -->
          <section class="dash-section">
            <h2 class="section-title">
              <iconify-icon icon="mdi:lightning-bolt" width="20" height="20"></iconify-icon>
              {{ t.t('dashboard.quickActions') }}
            </h2>
            <div class="actions-grid">
              <a routerLink="/chapters" class="action-card card">
                <iconify-icon icon="mdi:map-marker-path" width="24" height="24"></iconify-icon>
                <span>{{ t.t('nav.chapters') }}</span>
              </a>
              <a routerLink="/memory-game" class="action-card card">
                <iconify-icon icon="mdi:cards-outline" width="24" height="24"></iconify-icon>
                <span>{{ t.t('nav.memoryGame') }}</span>
              </a>
              <a routerLink="/flashcards" class="action-card card">
                <iconify-icon icon="mdi:cards-outline" width="24" height="24"></iconify-icon>
                <span>{{ t.t('nav.flashcards') }}</span>
              </a>
              <a routerLink="/notes" class="action-card card">
                <iconify-icon icon="mdi:notebook-outline" width="24" height="24"></iconify-icon>
                <span>{{ t.t('nav.notes') }}</span>
              </a>
            </div>
          </section>
        </div>

        <!-- Chapter progress overview -->
        <section class="dash-section">
          <h2 class="section-title">
            <iconify-icon icon="mdi:chart-bar" width="20" height="20"></iconify-icon>
            {{ t.t('dashboard.progressOverview') }}
          </h2>
          <div class="chapter-grid">
            @for (ch of chapters; track ch.id) {
              <a [routerLink]="['/chapters', ch.id]" class="chapter-mini" [class.completed]="chapterStatus(ch.id) === 'completed'" [class.in-progress]="chapterStatus(ch.id) === 'in_progress'">
                <span class="ch-num">{{ ch.id }}</span>
                <span class="ch-name">{{ t.lang() === 'ka' ? ch.titleKa : ch.title }}</span>
                @if (chapterStatus(ch.id) === 'completed') {
                  <iconify-icon icon="mdi:check-circle" width="16" height="16" class="ch-done"></iconify-icon>
                }
              </a>
            }
          </div>
        </section>

        <!-- Achievements Section -->
        <section class="dash-section achievements-section">
          <h2 class="section-title">
            <iconify-icon icon="mdi:trophy-outline" width="20" height="20"></iconify-icon>
            {{ t.t('achievements.title') }}
          </h2>
          <p class="achievements-subtitle">{{ t.t('achievements.subtitle') }}</p>

          <!-- Level progress card -->
          <div class="level-card-full card">
            <div class="level-header-full">
              <span class="level-title-full">{{ t.t('achievements.level') }} {{ gam.level().level }}</span>
              <span class="level-name-full">{{ t.lang() === 'ka' ? gam.level().titleKa : gam.level().titleEn }}</span>
            </div>
            @if (gam.level().nextLevelXp) {
              <div class="level-progress-full">
                <div class="progress-bar-full">
                  <div class="progress-fill-full" [style.width.%]="xpPercent()"></div>
                </div>
                <span class="progress-text-full">{{ gam.totalXp() }} / {{ gam.level().nextLevelXp }} XP</span>
              </div>
            } @else {
              <p class="max-level">{{ t.t('achievements.maxLevel') }}</p>
            }
          </div>

          <!-- Badge categories -->
          @for (cat of categories; track cat.key) {
            <div class="badge-category">
              <h3 class="category-heading">
                <iconify-icon [icon]="cat.icon" width="18" height="18"></iconify-icon>
                {{ t.lang() === 'ka' ? cat.nameKa : cat.nameEn }}
              </h3>
              <div class="badges-grid">
                @for (badge of getBadgesByCategory(cat.key); track badge.id) {
                  <div class="badge-card" [class.earned]="isEarned(badge.id)" [attr.title]="t.lang() === 'ka' ? badge.descriptionKa : badge.descriptionEn">
                    <div class="badge-icon" [class.locked]="!isEarned(badge.id)">
                      <iconify-icon [icon]="badge.icon" width="32" height="32"></iconify-icon>
                    </div>
                    <span class="badge-name">{{ t.lang() === 'ka' ? badge.nameKa : badge.nameEn }}</span>
                    <span class="badge-desc">{{ t.lang() === 'ka' ? badge.descriptionKa : badge.descriptionEn }}</span>
                    @if (isEarned(badge.id)) {
                      <span class="badge-earned-tag">
                        <iconify-icon icon="mdi:check-circle" width="14" height="14"></iconify-icon>
                        {{ t.t('achievements.earned') }}
                      </span>
                    } @else {
                      <span class="badge-locked-tag">
                        <iconify-icon icon="mdi:lock-outline" width="14" height="14"></iconify-icon>
                      </span>
                    }
                  </div>
                }
              </div>
            </div>
          }
        </section>
      </div>
    </div>
  `,
  styles: `
    .greeting {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    .greeting h1 { font-size: 1.8rem; font-weight: 800; color: var(--color-primary); margin: 0; }
    .greeting-sub { color: var(--color-text-muted); margin-top: 0.25rem; }
    .streak-badge {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      background: linear-gradient(135deg, #ff6b35, #ff8c42);
      color: #fff;
      padding: 0.6rem 1.25rem;
      border-radius: var(--radius-xl);
      font-weight: 700;
      font-size: 1rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .stat-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 1.25rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: transform 0.2s;
    }
    .stat-card:hover { transform: translateY(-2px); }
    .stat-body { display: flex; flex-direction: column; }
    .stat-number { font-size: 1.4rem; font-weight: 800; color: var(--color-primary); }
    .stat-label { font-size: 0.78rem; color: var(--color-text-muted); font-weight: 500; }
    .xp-card iconify-icon { color: #667eea; }
    .level-card iconify-icon { color: #764ba2; }
    .streak-card iconify-icon { color: #ff6b35; }
    .badge-card iconify-icon { color: #4caf50; }

    .level-progress-section { margin-bottom: 2rem; }
    .level-progress-header {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-text-muted);
      margin-bottom: 0.4rem;
    }
    .level-bar {
      width: 100%;
      height: 10px;
      background: var(--color-border);
      border-radius: 5px;
      overflow: hidden;
    }
    .level-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 5px;
      transition: width 0.6s ease;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .section-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--color-primary);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    .dash-section { margin-bottom: 1.5rem; }

    .continue-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem;
      text-decoration: none;
      transition: all 0.2s;
    }
    .continue-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
    .continue-icon {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      background: rgba(102, 126, 234, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .continue-info { flex: 1; }
    .continue-chapter { font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600; text-transform: uppercase; }
    .continue-title { display: block; font-size: 1rem; font-weight: 700; color: var(--color-primary); margin-top: 0.15rem; }
    .continue-progress-bar { width: 100%; height: 6px; background: var(--color-border); border-radius: 3px; margin-top: 0.5rem; overflow: hidden; }
    .continue-fill { height: 100%; background: #667eea; border-radius: 3px; }
    .continue-arrow { color: var(--color-text-muted); flex-shrink: 0; }

    .empty-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      padding: 2rem;
      color: var(--color-text-muted);
      text-align: center;
    }

    .actions-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }
    .action-card {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 1rem;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      color: var(--color-primary);
      transition: all 0.2s;
    }
    .action-card:hover { transform: translateY(-2px); border-color: var(--color-accent); }

    .recent-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
    }
    .recent-badge {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(102, 126, 234, 0.1);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-md);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-primary);
    }
    .view-all-link {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-accent);
      text-decoration: none;
    }
    .view-all-link:hover { text-decoration: underline; }

    .chapter-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.5rem;
    }
    .chapter-mini {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      padding: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      text-decoration: none;
      font-size: 0.8rem;
      color: var(--color-text-light);
      transition: all 0.15s;
    }
    .chapter-mini:hover { border-color: var(--color-accent); transform: translateY(-1px); }
    .chapter-mini.completed { border-color: #4caf50; background: rgba(76, 175, 80, 0.06); }
    .chapter-mini.in-progress { border-color: #667eea; background: rgba(102, 126, 234, 0.06); }
    .ch-num {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: var(--color-border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 700;
      flex-shrink: 0;
    }
    .completed .ch-num { background: #4caf50; color: #fff; }
    .in-progress .ch-num { background: #667eea; color: #fff; }
    .ch-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }
    .ch-done { color: #4caf50; flex-shrink: 0; }

    @media (max-width: 768px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .dashboard-grid { grid-template-columns: 1fr; }
      .chapter-grid { grid-template-columns: repeat(2, 1fr); }
      .greeting { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
      .badges-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .stats-grid { grid-template-columns: 1fr; }
    }

    /* Achievements section */
    .achievements-section { margin-top: 1rem; }
    .achievements-subtitle { color: var(--color-text-muted); margin: -0.5rem 0 1.5rem; font-size: 0.9rem; }

    .level-card-full {
      padding: 1.5rem 2rem;
      margin-bottom: 2rem;
      background: linear-gradient(135deg, #667eea22 0%, #764ba222 100%);
    }
    .level-header-full { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
    .level-title-full { font-size: 1.1rem; font-weight: 700; color: var(--color-primary); }
    .level-name-full { font-size: 1rem; font-weight: 600; color: #764ba2; }
    .progress-bar-full {
      width: 100%;
      height: 12px;
      background: var(--color-border);
      border-radius: 6px;
      overflow: hidden;
    }
    .progress-fill-full {
      height: 100%;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 6px;
      transition: width 0.5s ease;
    }
    .progress-text-full { font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.4rem; display: block; }
    .max-level { color: #764ba2; font-weight: 600; margin: 0; }

    .badge-category { margin-bottom: 1.5rem; }
    .category-heading {
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-primary);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .badges-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 1rem;
    }
    .badge-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 1.25rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.3rem;
      position: relative;
      transition: all 0.2s;
    }
    .badge-card.earned {
      border-color: #667eea;
      box-shadow: 0 0 0 1px #667eea33;
    }
    .badge-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
    .badge-icon { font-size: 2rem; margin-bottom: 0.25rem; }
    .badge-icon.locked { opacity: 0.35; filter: grayscale(1) contrast(0.5); }
    .badge-name { font-size: 0.9rem; font-weight: 700; color: var(--color-primary); }
    .badge-desc { font-size: 0.75rem; color: var(--color-text-muted); line-height: 1.3; }
    .badge-earned-tag {
      font-size: 0.72rem;
      font-weight: 600;
      color: #4caf50;
      display: flex;
      align-items: center;
      gap: 0.2rem;
      margin-top: 0.25rem;
    }
    .badge-locked-tag { color: var(--color-text-muted); opacity: 0.5; margin-top: 0.25rem; }
  `
})
export class DashboardPage implements OnInit {
  protected readonly auth = inject(AuthService);
  protected readonly gam = inject(GamificationService);
  protected readonly t = inject(LanguageService);
  private readonly progressService = inject(ProgressService);

  readonly chapters = CHAPTERS;
  readonly progress = signal<UserProgress | null>(null);

  readonly categories = [
    { key: 'quiz', nameEn: 'Quiz Achievements', nameKa: 'ვიქტორინის მიღწევები', icon: 'mdi:help-circle-outline' },
    { key: 'learning', nameEn: 'Learning Achievements', nameKa: 'სწავლის მიღწევები', icon: 'mdi:book-open-page-variant' },
    { key: 'streak', nameEn: 'Streak Achievements', nameKa: 'სტრიკის მიღწევები', icon: 'mdi:fire' },
    { key: 'milestone', nameEn: 'XP Milestones', nameKa: 'XP მაილსტოუნები', icon: 'mdi:star-shooting' },
    { key: 'game', nameEn: 'Game Achievements', nameKa: 'თამაშის მიღწევები', icon: 'mdi:puzzle' },
  ];

  private earnedSet = new Set<string>();

  readonly nextChapter = computed(() => {
    const p = this.progress();
    if (!p) return CHAPTERS[0];
    const completedIds = new Set(p.chapters.filter(c => c.status === 'completed').map(c => c.chapterId));
    const inProgress = p.chapters.find(c => c.status === 'in_progress');
    if (inProgress) return CHAPTERS.find(ch => ch.id === inProgress.chapterId) ?? null;
    return CHAPTERS.find(ch => !completedIds.has(ch.id)) ?? null;
  });

  ngOnInit() {
    this.gam.loadStats().subscribe(() => {
      this.earnedSet = new Set(this.gam.earnedBadges().map(b => b.id));
    });
    this.progressService.getProgress().subscribe(p => this.progress.set(p));
  }

  getBadgesByCategory(category: string): Badge[] {
    return this.gam.allBadges().filter(b => b.category === category);
  }

  isEarned(badgeId: string): boolean {
    return this.earnedSet.has(badgeId) || this.gam.earnedBadges().some(b => b.id === badgeId);
  }

  chapterStatus(chapterId: number): string {
    const ch = this.progress()?.chapters.find(c => c.chapterId === chapterId);
    return ch?.status ?? 'not_started';
  }

  chapterPercent(chapterId: number): number {
    const status = this.chapterStatus(chapterId);
    if (status === 'completed') return 100;
    if (status === 'in_progress') return 50;
    return 0;
  }

  xpPercent(): number {
    const lvl = this.gam.level();
    if (!lvl.nextLevelXp) return 100;
    const levels = [0, 100, 300, 600, 1000, 1500, 2200, 3000, 4000, 5500];
    const prevXp = levels[lvl.level - 1] ?? 0;
    const range = lvl.nextLevelXp - prevXp;
    if (range <= 0) return 100;
    return Math.min(100, ((lvl.currentXp - prevXp) / range) * 100);
  }
}
