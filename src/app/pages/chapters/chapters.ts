import { Component, ChangeDetectionStrategy, inject, signal, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CHAPTERS } from '../../data/book-data';
import { chapterText } from '../../data/chapter-i18n';
import { AuthService } from '../../services/auth.service';
import { ProgressService, ChapterProgress } from '../../services/progress.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-chapters',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title"><iconify-icon icon="mdi:map-marker-path" style="vertical-align: -0.125em"></iconify-icon> {{ t.t('chapters.title') }}</h1>
          <p class="page-subtitle">{{ t.t('chapters.subtitle') }}</p>
        </div>

        <div class="roadmap">
          @for (chapter of chapters; track chapter.id) {
            <div class="roadmap-item fade-in" [style.animation-delay]="(chapter.id * 50) + 'ms'">
              <div class="roadmap-line">
                <div class="roadmap-dot" [class.completed]="getStatus(chapter.id) === 'completed'"
                     [class.in-progress]="getStatus(chapter.id) === 'in_progress'">
                  <iconify-icon [attr.icon]="chapter.icon" width="20" height="20"></iconify-icon>
                </div>
                @if (chapter.id < chapters.length) {
                  <div class="roadmap-connector"></div>
                }
              </div>
              <div class="roadmap-card card">
                <div class="roadmap-card-header">
                  <span class="chapter-num">{{ t.t('chapters.chapter') }} {{ chapter.id }}</span>
                  @if (getStatus(chapter.id) === 'completed') {
                    <span class="badge badge-success"><iconify-icon icon="mdi:check-circle" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>{{ t.t('chapters.completed') }}</span>
                  } @else if (getStatus(chapter.id) === 'in_progress') {
                    <span class="badge badge-warning"><iconify-icon icon="mdi:progress-clock" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>{{ t.t('chapters.inProgress') }}</span>
                  }
                </div>
                <h2 class="chapter-title">{{ ct(chapter.id, 'title') }}</h2>
                <p class="chapter-desc">{{ ct(chapter.id, 'description') }}</p>
                <div class="chapter-topics">
                  @for (topic of ctArr(chapter.id, 'keyTopics'); track $index) {
                    <span class="topic-tag">{{ topic }}</span>
                  }
                </div>
                <div class="chapter-actions">
                  <a [routerLink]="['/chapters', chapter.id]" class="btn btn-outline"><iconify-icon icon="mdi:book-open-page-variant-outline" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('chapters.readSummary') }}</a>
                  <a [routerLink]="['/quiz', chapter.id]" class="btn btn-accent"><iconify-icon icon="mdi:head-question-outline" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('chapters.takeQuiz') }}</a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .roadmap {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .roadmap-item {
      display: flex;
      gap: 1.5rem;
    }

    .roadmap-line {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      width: 60px;
    }

    .roadmap-dot {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--color-border-light);
      border: 3px solid var(--color-border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      flex-shrink: 0;
      transition: all var(--transition-normal);
    }

    .roadmap-dot.completed {
      border-color: var(--color-secondary);
      background: #e8f5e9;
    }

    .roadmap-dot.in-progress {
      border-color: var(--color-accent);
      background: #fff3e0;
    }

    .roadmap-connector {
      width: 3px;
      flex: 1;
      min-height: 20px;
      background: var(--color-border);
    }

    .roadmap-card {
      flex: 1;
      margin-bottom: 1rem;
    }

    .roadmap-card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
    }

    .chapter-num {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--color-accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .chapter-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-primary);
    }

    .chapter-title-ka {
      color: var(--color-text-muted);
      font-size: 0.9rem;
      margin-top: 0.15rem;
    }

    .chapter-desc {
      color: var(--color-text-light);
      margin-top: 0.5rem;
      font-size: 0.9rem;
    }

    .chapter-topics {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.75rem;
    }

    .topic-tag {
      padding: 0.25rem 0.6rem;
      background: var(--color-border-light);
      border-radius: var(--radius-xl);
      font-size: 0.75rem;
      color: var(--color-text-light);
      font-weight: 500;
    }

    .chapter-actions {
      display: flex;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    @media (max-width: 640px) {
      .roadmap-line { width: 40px; }
      .roadmap-dot { width: 36px; height: 36px; font-size: 1rem; }
      .chapter-actions { flex-direction: column; }
    }
  `
})
export class ChaptersPage implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly progressService = inject(ProgressService);
  protected readonly t = inject(LanguageService);

  protected readonly chapters = CHAPTERS;
  protected readonly chapterProgress = signal<ChapterProgress[]>([]);
  protected readonly progressError = signal(false);

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.progressService.getProgress().subscribe({
        next: (p) => this.chapterProgress.set(p.chapters),
        error: () => this.progressError.set(true)
      });
    }
  }

  getStatus(chapterId: number): string {
    return this.chapterProgress().find(c => c.chapterId === chapterId)?.status || 'not_started';
  }

  ct(id: number, field: 'title' | 'description' | 'summary' | 'funFact' | 'realWorld'): string {
    return chapterText(id, field, this.t.lang()) as string;
  }

  ctArr(id: number, field: 'keyTopics' | 'keyPoints'): string[] {
    return chapterText(id, field, this.t.lang()) as string[];
  }
}
