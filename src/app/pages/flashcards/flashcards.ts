import { Component, ChangeDetectionStrategy, inject, OnInit, signal, computed, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FlashcardService, Flashcard } from '../../services/flashcard.service';
import { GamificationService } from '../../services/gamification.service';
import { LanguageService } from '../../services/language.service';
import { CHAPTERS } from '../../data/book-data';

@Component({
  selector: 'app-flashcards',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">
            <iconify-icon icon="mdi:cards-outline" style="vertical-align: -0.125em"></iconify-icon>
            {{ t.t('flashcards.title') }}
          </h1>
          @if (chapter(); as ch) {
            <p class="page-subtitle">{{ t.lang() === 'ka' ? ch.titleKa : ch.title }}</p>
          }
        </div>

        @if (!chapterId()) {
          <!-- Chapter selection grid -->
          <div class="chapter-grid">
            @for (ch of chapters; track ch.id) {
              <a [routerLink]="['/flashcards', ch.id]" class="chapter-card card">
                <iconify-icon [icon]="ch.icon" width="28" height="28"></iconify-icon>
                <div class="card-info">
                  <span class="card-chapter">{{ t.t('flashcards.chapter') }} {{ ch.id }}</span>
                  <span class="card-title">{{ t.lang() === 'ka' ? ch.titleKa : ch.title }}</span>
                </div>
                <iconify-icon icon="mdi:chevron-right" width="20" height="20" class="card-arrow"></iconify-icon>
              </a>
            }
          </div>
        } @else {
          <!-- Flashcard study mode -->
          @if (cards().length === 0) {
            <div class="empty-state card">
              <iconify-icon icon="mdi:cards-outline" width="48" height="48"></iconify-icon>
              <p>{{ t.t('flashcards.noCards') }}</p>
              <a routerLink="/flashcards" class="btn btn-accent">{{ t.t('flashcards.backToChapters') }}</a>
            </div>
          } @else {
            <!-- Progress indicator -->
            <div class="study-progress">
              <span>{{ currentIndex() + 1 }} / {{ cards().length }}</span>
              <div class="progress-bar">
                <div class="progress-fill" [style.width.%]="((currentIndex() + 1) / cards().length) * 100"></div>
              </div>
            </div>

            <!-- Flashcard -->
            <div class="flashcard-container">
              <div class="flashcard" [class.flipped]="flipped()" (click)="flip()" (keydown.enter)="flip()" (keydown.space)="flip()" tabindex="0" role="button" [attr.aria-label]="t.t('flashcards.flipCard')">
                <div class="flashcard-inner">
                  <div class="flashcard-front">
                    <span class="card-category">{{ currentCard()!.category }}</span>
                    <p class="card-text">{{ t.lang() === 'ka' ? currentCard()!.frontKa : currentCard()!.frontEn }}</p>
                    <span class="flip-hint">
                      <iconify-icon icon="mdi:rotate-3d-variant" width="16" height="16"></iconify-icon>
                      {{ t.t('flashcards.tapToFlip') }}
                    </span>
                  </div>
                  <div class="flashcard-back">
                    <p class="card-text">{{ t.lang() === 'ka' ? currentCard()!.backKa : currentCard()!.backEn }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Difficulty buttons (show after flip) -->
            @if (flipped()) {
              <div class="difficulty-buttons">
                <p class="diff-prompt">{{ t.t('flashcards.howWell') }}</p>
                <div class="diff-row">
                  <button class="btn-diff hard" (click)="rate('hard')">
                    <iconify-icon icon="mdi:emoticon-sad-outline" width="20" height="20"></iconify-icon>
                    {{ t.t('flashcards.hard') }}
                  </button>
                  <button class="btn-diff medium" (click)="rate('medium')">
                    <iconify-icon icon="mdi:emoticon-neutral-outline" width="20" height="20"></iconify-icon>
                    {{ t.t('flashcards.medium') }}
                  </button>
                  <button class="btn-diff easy" (click)="rate('easy')">
                    <iconify-icon icon="mdi:emoticon-happy-outline" width="20" height="20"></iconify-icon>
                    {{ t.t('flashcards.easy') }}
                  </button>
                </div>
              </div>
            }

            <!-- Navigation -->
            <div class="card-nav">
              <button class="btn btn-ghost" (click)="prev()" [disabled]="currentIndex() === 0">
                <iconify-icon icon="mdi:chevron-left" width="20" height="20"></iconify-icon>
                {{ t.t('flashcards.prev') }}
              </button>
              @if (currentIndex() < cards().length - 1) {
                <button class="btn btn-accent" (click)="next()">
                  {{ t.t('flashcards.next') }}
                  <iconify-icon icon="mdi:chevron-right" width="20" height="20"></iconify-icon>
                </button>
              } @else {
                <button class="btn btn-accent" (click)="finishSession()">
                  <iconify-icon icon="mdi:check" width="20" height="20"></iconify-icon>
                  {{ t.t('flashcards.finish') }}
                </button>
              }
            </div>

            <!-- Session complete overlay -->
            @if (sessionDone()) {
              <div class="session-overlay">
                <div class="session-card card">
                  <iconify-icon icon="mdi:party-popper" width="48" height="48"></iconify-icon>
                  <h2>{{ t.t('flashcards.sessionComplete') }}</h2>
                  <p>{{ t.t('flashcards.reviewed', { count: cards().length.toString() }) }}</p>
                  <div class="session-stats">
                    <span class="stat easy-count">
                      <iconify-icon icon="mdi:emoticon-happy-outline" width="16" height="16"></iconify-icon>
                      {{ t.t('flashcards.easy') }}: {{ easyCnt() }}
                    </span>
                    <span class="stat medium-count">
                      <iconify-icon icon="mdi:emoticon-neutral-outline" width="16" height="16"></iconify-icon>
                      {{ t.t('flashcards.medium') }}: {{ mediumCnt() }}
                    </span>
                    <span class="stat hard-count">
                      <iconify-icon icon="mdi:emoticon-sad-outline" width="16" height="16"></iconify-icon>
                      {{ t.t('flashcards.hard') }}: {{ hardCnt() }}
                    </span>
                  </div>
                  <div class="session-actions">
                    <button class="btn btn-accent" (click)="restart()">{{ t.t('flashcards.studyAgain') }}</button>
                    <a routerLink="/flashcards" class="btn btn-ghost">{{ t.t('flashcards.backToChapters') }}</a>
                  </div>
                </div>
              </div>
            }
          }
        }
      </div>
    </div>
  `,
  styles: `
    .chapter-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    .chapter-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem;
      text-decoration: none;
      transition: all 0.2s;
    }
    .chapter-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); border-color: var(--color-accent); }
    .card-info { flex: 1; display: flex; flex-direction: column; }
    .card-chapter { font-size: 0.72rem; font-weight: 600; color: var(--color-text-muted); text-transform: uppercase; }
    .card-title { font-size: 0.95rem; font-weight: 700; color: var(--color-primary); }
    .card-arrow { color: var(--color-text-muted); }

    .study-progress {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-text-muted);
    }
    .progress-bar {
      flex: 1;
      height: 6px;
      background: var(--color-border);
      border-radius: 3px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
      border-radius: 3px;
      transition: width 0.3s ease;
    }

    .flashcard-container {
      perspective: 1200px;
      max-width: 520px;
      margin: 0 auto 1.5rem;
    }
    .flashcard {
      width: 100%;
      aspect-ratio: 3 / 2;
      cursor: pointer;
      outline: none;
    }
    .flashcard:focus-visible { box-shadow: 0 0 0 3px rgba(59,130,246,0.3); border-radius: var(--radius-lg); }
    .flashcard-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.5s ease;
    }
    .flashcard.flipped .flashcard-inner { transform: rotateY(180deg); }

    .flashcard-front,
    .flashcard-back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      border-radius: var(--radius-lg);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: center;
    }
    .flashcard-front {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
      color: #fff;
    }
    .flashcard-back {
      background: var(--color-surface);
      border: 2px solid var(--color-accent);
      transform: rotateY(180deg);
    }
    .card-category {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: rgba(255,255,255,0.2);
      padding: 0.2rem 0.6rem;
      border-radius: 8px;
      font-size: 0.72rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    .card-text { font-size: 1.2rem; font-weight: 700; line-height: 1.5; }
    .flashcard-back .card-text { color: var(--color-primary); font-size: 1rem; font-weight: 600; }
    .flip-hint {
      position: absolute;
      bottom: 1rem;
      font-size: 0.75rem;
      opacity: 0.7;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    .difficulty-buttons {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    .diff-prompt { font-size: 0.9rem; color: var(--color-text-muted); font-weight: 600; margin-bottom: 0.75rem; }
    .diff-row {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
    }
    .btn-diff {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.6rem 1.25rem;
      border-radius: var(--radius-md);
      border: 2px solid transparent;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-diff.hard { background: #ffebee; color: #c62828; border-color: #ef9a9a; }
    .btn-diff.hard:hover { background: #ffcdd2; }
    .btn-diff.medium { background: #fff8e1; color: #f57f17; border-color: #ffe082; }
    .btn-diff.medium:hover { background: #ffecb3; }
    .btn-diff.easy { background: #e8f5e9; color: #2e7d32; border-color: #a5d6a7; }
    .btn-diff.easy:hover { background: #c8e6c9; }

    .card-nav {
      display: flex;
      justify-content: space-between;
      max-width: 520px;
      margin: 0 auto;
    }

    .session-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }
    .session-card {
      max-width: 420px;
      padding: 2.5rem;
      text-align: center;
    }
    .session-card h2 { font-size: 1.4rem; margin-top: 0.5rem; color: var(--color-primary); }
    .session-card p { color: var(--color-text-muted); }
    .session-stats {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin: 1rem 0;
    }
    .session-stats .stat {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-weight: 600;
      font-size: 0.85rem;
    }
    .easy-count { color: #2e7d32; }
    .medium-count { color: #f57f17; }
    .hard-count { color: #c62828; }
    .session-actions {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .empty-state {
      max-width: 400px;
      margin: 2rem auto;
      text-align: center;
      padding: 3rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      color: var(--color-text-muted);
    }

    @media (max-width: 768px) {
      .chapter-grid { grid-template-columns: 1fr; }
      .flashcard { aspect-ratio: 4 / 3; }
      .diff-row { flex-direction: column; align-items: center; }
    }
  `
})
export class FlashcardsPage implements OnInit {
  protected readonly t = inject(LanguageService);
  private readonly flashcardService = inject(FlashcardService);
  private readonly gam = inject(GamificationService);
  private readonly route = inject(ActivatedRoute);

  readonly chapters = CHAPTERS;
  readonly chapterId = signal<number | null>(null);
  readonly chapter = computed(() => this.chapterId() ? CHAPTERS.find(c => c.id === this.chapterId()) : null);
  readonly cards = signal<Flashcard[]>([]);
  readonly currentIndex = signal(0);
  readonly flipped = signal(false);
  readonly sessionDone = signal(false);

  readonly currentCard = computed(() => this.cards()[this.currentIndex()] ?? null);

  // Rating counts
  readonly ratings = signal<Map<number, string>>(new Map());
  readonly easyCnt = computed(() => [...this.ratings().values()].filter(r => r === 'easy').length);
  readonly mediumCnt = computed(() => [...this.ratings().values()].filter(r => r === 'medium').length);
  readonly hardCnt = computed(() => [...this.ratings().values()].filter(r => r === 'hard').length);

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['chapterId']) {
        const id = Number(params['chapterId']);
        this.chapterId.set(id);
        this.flashcardService.getCards(id).subscribe(cards => this.cards.set(cards));
      }
    });
  }

  flip() { this.flipped.update(v => !v); }

  rate(difficulty: 'hard' | 'medium' | 'easy') {
    const card = this.currentCard();
    if (!card) return;
    this.flashcardService.reviewCard(card.id, difficulty).subscribe();
    this.ratings.update(m => { const nm = new Map(m); nm.set(card.id, difficulty); return nm; });
    this.next();
  }

  next() {
    if (this.currentIndex() < this.cards().length - 1) {
      this.currentIndex.update(i => i + 1);
      this.flipped.set(false);
    }
  }

  prev() {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(i => i - 1);
      this.flipped.set(false);
    }
  }

  finishSession() {
    const cid = this.chapterId();
    if (cid) {
      this.flashcardService.completeSession(cid).subscribe(res => {
        if (res.gamification) this.gam.processResult(res.gamification);
      });
    }
    this.sessionDone.set(true);
  }

  restart() {
    this.currentIndex.set(0);
    this.flipped.set(false);
    this.sessionDone.set(false);
    this.ratings.set(new Map());
  }
}
