import { Component, ChangeDetectionStrategy, inject, OnInit, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GamificationService, Badge } from '../../services/gamification.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-achievements',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">
            <iconify-icon icon="mdi:trophy-outline" style="vertical-align: -0.125em"></iconify-icon>
            {{ t.t('achievements.title') }}
          </h1>
          <p class="page-subtitle">{{ t.t('achievements.subtitle') }}</p>
        </div>

        <!-- Stats bar -->
        <div class="stats-bar">
          <div class="stat-item">
            <iconify-icon icon="mdi:star-four-points" width="22" height="22"></iconify-icon>
            <div class="stat-info">
              <span class="stat-value">{{ gam.totalXp() }}</span>
              <span class="stat-label">{{ t.t('achievements.totalXp') }}</span>
            </div>
          </div>
          <div class="stat-item">
            <iconify-icon icon="mdi:shield-star" width="22" height="22"></iconify-icon>
            <div class="stat-info">
              <span class="stat-value">{{ t.lang() === 'ka' ? gam.level().titleKa : gam.level().titleEn }}</span>
              <span class="stat-label">{{ t.t('achievements.level') }} {{ gam.level().level }}</span>
            </div>
          </div>
          <div class="stat-item">
            <iconify-icon icon="mdi:fire" width="22" height="22"></iconify-icon>
            <div class="stat-info">
              <span class="stat-value">{{ gam.streak().currentStreak }}</span>
              <span class="stat-label">{{ t.t('achievements.streak') }}</span>
            </div>
          </div>
          <div class="stat-item">
            <iconify-icon icon="mdi:medal" width="22" height="22"></iconify-icon>
            <div class="stat-info">
              <span class="stat-value">{{ gam.earnedBadges().length }} / {{ gam.allBadges().length }}</span>
              <span class="stat-label">{{ t.t('achievements.badges') }}</span>
            </div>
          </div>
        </div>

        <!-- Level progress -->
        <div class="level-card card">
          <div class="level-header">
            <span class="level-title">{{ t.t('achievements.level') }} {{ gam.level().level }}</span>
            <span class="level-name">{{ t.lang() === 'ka' ? gam.level().titleKa : gam.level().titleEn }}</span>
          </div>
          @if (gam.level().nextLevelXp) {
            <div class="level-progress">
              <div class="progress-bar">
                <div class="progress-fill" [style.width.%]="xpPercent()"></div>
              </div>
              <span class="progress-text">{{ gam.totalXp() }} / {{ gam.level().nextLevelXp }} XP</span>
            </div>
          } @else {
            <p class="max-level">{{ t.t('achievements.maxLevel') }}</p>
          }
        </div>

        <!-- Badge categories -->
        @for (cat of categories; track cat.key) {
          <section class="badge-section">
            <h2 class="section-heading">
              <iconify-icon [icon]="cat.icon" width="20" height="20"></iconify-icon>
              {{ t.lang() === 'ka' ? cat.nameKa : cat.nameEn }}
            </h2>
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
          </section>
        }
      </div>
    </div>
  `,
  styles: `
    .stats-bar {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .stat-item {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .stat-info { display: flex; flex-direction: column; }
    .stat-value { font-size: 1.3rem; font-weight: 800; color: var(--color-primary); }
    .stat-label { font-size: 0.78rem; color: var(--color-text-muted); font-weight: 500; }

    .level-card {
      padding: 1.5rem 2rem;
      margin-bottom: 2.5rem;
      background: linear-gradient(135deg, #667eea22 0%, #764ba222 100%);
    }
    .level-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
    .level-title { font-size: 1.1rem; font-weight: 700; color: var(--color-primary); }
    .level-name { font-size: 1rem; font-weight: 600; color: #764ba2; }
    .progress-bar {
      width: 100%;
      height: 12px;
      background: var(--color-border);
      border-radius: 6px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 6px;
      transition: width 0.5s ease;
    }
    .progress-text { font-size: 0.8rem; color: var(--color-text-muted); margin-top: 0.4rem; display: block; }
    .max-level { color: #764ba2; font-weight: 600; margin: 0; }

    .section-heading {
      font-size: 1.15rem;
      font-weight: 700;
      color: var(--color-primary);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    .badge-section { margin-bottom: 2rem; }

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

    @media (max-width: 768px) {
      .stats-bar { grid-template-columns: repeat(2, 1fr); }
      .badges-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 480px) {
      .stats-bar { grid-template-columns: 1fr; }
    }
  `
})
export class AchievementsPage implements OnInit {
  protected readonly gam = inject(GamificationService);
  protected readonly t = inject(LanguageService);

  readonly categories = [
    { key: 'quiz', nameEn: 'Quiz Achievements', nameKa: 'ვიქტორინის მიღწევები', icon: 'mdi:help-circle-outline' },
    { key: 'learning', nameEn: 'Learning Achievements', nameKa: 'სწავლის მიღწევები', icon: 'mdi:book-open-page-variant' },
    { key: 'streak', nameEn: 'Streak Achievements', nameKa: 'სტრიკის მიღწევები', icon: 'mdi:fire' },
    { key: 'milestone', nameEn: 'XP Milestones', nameKa: 'XP მაილსტოუნები', icon: 'mdi:star-shooting' },
    { key: 'game', nameEn: 'Game Achievements', nameKa: 'თამაშის მიღწევები', icon: 'mdi:puzzle' },
  ];

  private earnedSet = new Set<string>();

  ngOnInit() {
    this.gam.loadStats().subscribe(() => {
      this.earnedSet = new Set(this.gam.earnedBadges().map(b => b.id));
    });
  }

  getBadgesByCategory(category: string): Badge[] {
    return this.gam.allBadges().filter(b => b.category === category);
  }

  isEarned(badgeId: string): boolean {
    return this.earnedSet.has(badgeId) || this.gam.earnedBadges().some(b => b.id === badgeId);
  }

  xpPercent(): number {
    const lvl = this.gam.level();
    if (!lvl.nextLevelXp) return 100;
    // Find previous level threshold
    const levels = [0, 100, 300, 600, 1000, 1500, 2200, 3000, 4000, 5500];
    const prevXp = levels[lvl.level - 1] ?? 0;
    const range = lvl.nextLevelXp - prevXp;
    if (range <= 0) return 100;
    return Math.min(100, ((lvl.currentXp - prevXp) / range) * 100);
  }
}
