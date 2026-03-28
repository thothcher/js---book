import { Component, ChangeDetectionStrategy, signal, computed, inject, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MEMORY_CARDS, MemoryCard } from '../../data/book-data';
import { ProgressService } from '../../services/progress.service';
import { LanguageService } from '../../services/language.service';

interface GameCard {
  id: number;
  text: string;
  pairId: number;
  type: 'term' | 'definition';
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-memory-game',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title"><iconify-icon icon="mdi:cards-outline" style="vertical-align: -0.125em"></iconify-icon> {{ t.t('memoryGame.title') }}</h1>
          <p class="page-subtitle">{{ t.t('memoryGame.subtitle') }}</p>
        </div>

        @if (!gameStarted()) {
          <div class="level-select">
            <h2>{{ t.t('memoryGame.chooseDifficulty') }}</h2>
            <div class="level-cards">
              <button class="level-card card" (click)="startGame('easy')">
                <span class="level-icon"><iconify-icon icon="mdi:sprout" width="18" height="18"></iconify-icon></span>
                <h3>{{ t.t('memoryGame.easy') }}</h3>
                <p>{{ t.t('memoryGame.easyDesc') }}</p>
              </button>
              <button class="level-card card" (click)="startGame('medium')">
                <span class="level-icon"><iconify-icon icon="mdi:leaf" width="18" height="18"></iconify-icon></span>
                <h3>{{ t.t('memoryGame.medium') }}</h3>
                <p>{{ t.t('memoryGame.mediumDesc') }}</p>
              </button>
              <button class="level-card card" (click)="startGame('hard')">
                <span class="level-icon"><iconify-icon icon="mdi:tree" width="18" height="18"></iconify-icon></span>
                <h3>{{ t.t('memoryGame.hard') }}</h3>
                <p>{{ t.t('memoryGame.hardDesc') }}</p>
              </button>
            </div>
          </div>
        } @else {
          <!-- Game stats -->
          <div class="game-stats">
            <div class="stat">
              <span class="stat-label">{{ t.t('memoryGame.moves') }}</span>
              <span class="stat-value">{{ moves() }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">{{ t.t('memoryGame.matches') }}</span>
              <span class="stat-value">{{ matchCount() }} / {{ totalPairs() }}</span>
            </div>
            <div class="stat">
              <span class="stat-label">{{ t.t('memoryGame.time') }}</span>
              <span class="stat-value">{{ formatTime(elapsedSeconds()) }}</span>
            </div>
            <button class="btn btn-ghost" (click)="resetGame()"><iconify-icon icon="mdi:refresh" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>{{ t.t('memoryGame.reset') }}</button>
          </div>

          <!-- Game board -->
          <div class="game-board" [class.medium]="currentLevel() === 'medium'" [class.hard]="currentLevel() === 'hard'">
            @for (card of cards(); track card.id) {
              <button
                class="game-card"
                [class.flipped]="card.flipped"
                [class.matched]="card.matched"
                [class.term]="card.type === 'term'"
                [class.definition]="card.type === 'definition'"
                [disabled]="card.flipped || card.matched || isChecking()"
                [attr.aria-label]="card.flipped || card.matched ? card.text : 'Hidden card'"
                (click)="flipCard(card)">
                <div class="card-inner">
                  <div class="card-front">?</div>
                  <div class="card-back">{{ card.text }}</div>
                </div>
              </button>
            }
          </div>

          @if (gameWon()) {
            <div class="win-overlay">
              <div class="win-card card">
                <span class="win-icon"><iconify-icon icon="mdi:party-popper" width="40" height="40"></iconify-icon></span>
                <h2>{{ t.t('memoryGame.congratulations') }}</h2>
                <p>You matched all {{ totalPairs() }} pairs in {{ moves() }} moves and {{ formatTime(elapsedSeconds()) }}!</p>
                <div class="win-actions">
                  <button class="btn btn-accent" (click)="resetGame()"><iconify-icon icon="mdi:replay" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('memoryGame.playAgain') }}</button>
                  <button class="btn btn-outline" (click)="gameStarted.set(false)"><iconify-icon icon="mdi:swap-horizontal" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('memoryGame.changeLevel') }}</button>
                </div>
              </div>
            </div>
          }
        }
      </div>
    </div>
  `,
  styles: `
    /* Level selection */
    .level-select {
      text-align: center;
      padding: 2rem 0;
    }
    .level-select h2 {
      font-size: 1.3rem;
      color: var(--color-primary);
      margin-bottom: 1.5rem;
    }
    .level-cards {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    .level-card {
      padding: 2rem;
      min-width: 180px;
      text-align: center;
      cursor: pointer;
      transition: all var(--transition-normal);
    }
    .level-card:hover { border-color: var(--color-accent); }
    .level-icon { font-size: 2.5rem; display: block; margin-bottom: 0.75rem; }
    .level-card h3 { color: var(--color-primary); margin-bottom: 0.25rem; }
    .level-card p { color: var(--color-text-muted); font-size: 0.85rem; }

    /* Game stats */
    .game-stats {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 1.5rem;
      padding: 1rem 1.5rem;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
    }
    .stat-label { font-size: 0.8rem; color: var(--color-text-muted); display: block; }
    .stat-value { font-size: 1.25rem; font-weight: 700; color: var(--color-primary); }

    /* Game board */
    .game-board {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      max-width: 700px;
      margin: 0 auto;
    }
    .game-board.medium { grid-template-columns: repeat(6, 1fr); max-width: 900px; }
    .game-board.hard { grid-template-columns: repeat(8, 1fr); max-width: 1100px; gap: 0.6rem; }

    .game-card {
      aspect-ratio: 1;
      perspective: 800px;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
    }
    .game-board.hard .game-card {
      aspect-ratio: 3 / 2;
    }
    .game-card:disabled { cursor: default; }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.5s ease;
      transform-style: preserve-3d;
    }
    .game-card.flipped .card-inner,
    .game-card.matched .card-inner {
      transform: rotateY(180deg);
    }

    .card-front, .card-back {
      position: absolute;
      inset: 0;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-md);
      font-weight: 600;
      padding: 0.5rem;
      text-align: center;
    }

    .card-front {
      background: var(--color-primary);
      color: var(--color-text-on-primary);
      font-size: 1.5rem;
    }

    .card-back {
      background: var(--color-surface);
      border: 2px solid var(--color-border);
      color: var(--color-text);
      font-size: 0.9rem;
      line-height: 1.5;
      transform: rotateY(180deg);
      padding: 0.75rem;
    }

    .game-card.term .card-back { border-color: var(--color-accent); background: #fff5f2; }
    .game-card.definition .card-back { border-color: var(--color-secondary); background: #f0faf5; }

    .game-card.matched .card-back {
      opacity: 0.6;
      border-color: var(--color-secondary);
      background: #e8f5e9;
    }

    /* Win overlay */
    .win-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 200;
      padding: 2rem;
    }
    .win-card {
      text-align: center;
      padding: 2.5rem;
      max-width: 480px;
      width: 100%;
      box-sizing: border-box;
    }
    .win-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
    .win-card h2 { color: var(--color-primary); margin-bottom: 0.5rem; }
    .win-card p { color: var(--color-text-light); margin-bottom: 1.5rem; }
    .win-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

    @media (max-width: 640px) {
      .game-board { grid-template-columns: repeat(3, 1fr); gap: 0.5rem; }
      .game-board.medium { grid-template-columns: repeat(4, 1fr); }
      .game-board.hard { grid-template-columns: repeat(6, 1fr); gap: 0.4rem; }
      .game-board.hard .game-card { aspect-ratio: 1; }
      .game-stats { flex-wrap: wrap; gap: 1rem; }
    }
  `
})
export class MemoryGamePage implements OnDestroy {
  private readonly progressService = inject(ProgressService);
  protected readonly t = inject(LanguageService);

  protected readonly gameStarted = signal(false);
  protected readonly currentLevel = signal<'easy' | 'medium' | 'hard'>('easy');
  protected readonly cards = signal<GameCard[]>([]);
  protected readonly moves = signal(0);
  protected readonly isChecking = signal(false);
  protected readonly gameWon = signal(false);
  protected readonly elapsedSeconds = signal(0);

  protected readonly matchCount = computed(() => this.cards().filter(c => c.matched).length / 2);
  protected readonly totalPairs = computed(() => this.cards().length / 2);

  private flippedCards: GameCard[] = [];
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  startGame(level: 'easy' | 'medium' | 'hard') {
    this.currentLevel.set(level);
    this.gameStarted.set(true);
    this.gameWon.set(false);
    this.moves.set(0);
    this.elapsedSeconds.set(0);
    this.flippedCards = [];

    const counts: Record<string, number> = { easy: 6, medium: 12, hard: 24 };
    const data = MEMORY_CARDS.slice(0, counts[level] ?? 6);
    const gameCards = this.createGameCards(data);
    this.cards.set(this.shuffle(gameCards));

    // Start timer
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (!this.gameWon()) {
        this.elapsedSeconds.update(s => s + 1);
      }
    }, 1000);
  }

  flipCard(card: GameCard) {
    if (card.flipped || card.matched || this.isChecking()) return;

    // Update card state
    this.cards.update(cards =>
      cards.map(c => c.id === card.id ? { ...c, flipped: true } : c)
    );

    this.flippedCards.push({ ...card, flipped: true });

    if (this.flippedCards.length === 2) {
      this.moves.update(m => m + 1);
      this.isChecking.set(true);

      const [first, second] = this.flippedCards;

      if (first.pairId === second.pairId && first.type !== second.type) {
        // Match found
        setTimeout(() => {
          this.cards.update(cards =>
            cards.map(c => c.pairId === first.pairId ? { ...c, matched: true } : c)
          );
          this.flippedCards = [];
          this.isChecking.set(false);
          this.checkWin();
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          this.cards.update(cards =>
            cards.map(c => {
              if ((c.id === first.id || c.id === second.id) && !c.matched) {
                return { ...c, flipped: false };
              }
              return c;
            })
          );
          this.flippedCards = [];
          this.isChecking.set(false);
        }, 1000);
      }
    }
  }

  resetGame() {
    this.startGame(this.currentLevel());
  }

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  private createGameCards(data: MemoryCard[]): GameCard[] {
    let id = 0;
    const cards: GameCard[] = [];
    for (const item of data) {
      cards.push({ id: id++, text: item.term, pairId: item.id, type: 'term', flipped: false, matched: false });
      cards.push({ id: id++, text: item.definition, pairId: item.id, type: 'definition', flipped: false, matched: false });
    }
    return cards;
  }

  private shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  private checkWin() {
    if (this.cards().every(c => c.matched)) {
      this.gameWon.set(true);
      if (this.timer) clearInterval(this.timer);

      this.progressService.submitGameScore({
        level: this.currentLevel(),
        moves: this.moves(),
        timeSeconds: this.elapsedSeconds()
      }).subscribe({ error: () => {} });
    }
  }
}
