import { Component, ChangeDetectionStrategy, inject, signal, computed, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QUIZZES, CHAPTERS, QuizQuestion, Chapter } from '../../data/book-data';
import { ProgressService } from '../../services/progress.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-quiz',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container quiz-container">
        @if (!quizStarted()) {
          <!-- Quiz intro screen -->
          <div class="quiz-intro card">
            <span class="quiz-intro-icon"><iconify-icon icon="mdi:target" width="34" height="34"></iconify-icon></span>
            <h1>{{ chapterTitle() }}</h1>
            <p>{{ questions().length }} {{ t.t('quiz.questionsToTest') }}</p>
            <button class="btn btn-accent" (click)="startQuiz()"><iconify-icon icon="mdi:play-circle-outline" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('quiz.startQuiz') }}</button>
            <a [routerLink]="['/chapters', chapterId()]" class="btn btn-ghost"><iconify-icon icon="mdi:arrow-left" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>{{ t.t('quiz.backToChapter') }}</a>
          </div>
        } @else if (!quizFinished()) {
          <!-- Active quiz -->
          <div class="quiz-progress-bar">
            <div class="quiz-progress-fill" [style.width]="progressPercent()"></div>
          </div>
          <div class="quiz-header">
            <span class="quiz-counter">{{ t.t('quiz.question') }} {{ currentIndex() + 1 }} {{ t.t('quiz.of') }} {{ questions().length }}</span>
            <span class="quiz-score">{{ t.t('quiz.score') }}: {{ score() }}</span>
          </div>

          <div class="question-card card">
            <h2 class="question-text">{{ localizedQuestion() }}</h2>

            <div class="options">
              @for (option of localizedOptions(); track $index) {
                <button
                  class="option-btn"
                  [class.selected]="selectedIndex() === $index"
                  [class.correct]="answered() && $index === currentQuestion()?.correctIndex"
                  [class.wrong]="answered() && selectedIndex() === $index && $index !== currentQuestion()?.correctIndex"
                  [disabled]="answered()"
                  (click)="selectAnswer($index)">
                  <span class="option-letter">{{ ['A', 'B', 'C', 'D'][$index] }}</span>
                  <span class="option-text">{{ option }}</span>
                </button>
              }
            </div>

            @if (answered()) {
              <div class="explanation" [class.correct]="isCorrect()" [class.wrong]="!isCorrect()">
                <strong>{{ isCorrect() ? t.t('quiz.correct') : t.t('quiz.incorrect') }} <iconify-icon [attr.icon]="isCorrect() ? 'mdi:check-circle' : 'mdi:close-circle'" style="vertical-align: -0.125em; margin-left: 0.25rem"></iconify-icon></strong>
                <p>{{ localizedExplanation() }}</p>
              </div>
              <button class="btn btn-accent next-btn" (click)="nextQuestion()">
                {{ currentIndex() < questions().length - 1 ? t.t('quiz.nextQuestion') : t.t('quiz.seeResults') }}
              </button>
            }
          </div>
        } @else {
          <!-- Quiz results -->
          <div class="results-card card">
            <span class="results-icon"><iconify-icon icon="mdi:trophy-outline" width="40" height="40"></iconify-icon></span>
            <h1>{{ t.t('quiz.quizComplete') }}</h1>
            <div class="results-score">
              <span class="score-big">{{ score() }}</span>
              <span class="score-divider">/</span>
              <span class="score-total">{{ questions().length }}</span>
            </div>
            <p class="score-label">{{ scorePercent() >= 80 ? t.t('quiz.excellent') : scorePercent() >= 60 ? t.t('quiz.good') : t.t('quiz.keepPracticing') }}</p>
            <div class="results-bar">
              <div class="results-bar-fill" [style.width]="scorePercent() + '%'"
                   [class.high]="scorePercent() >= 80"
                   [class.medium]="scorePercent() >= 60 && scorePercent() < 80"
                   [class.low]="scorePercent() < 60">
              </div>
            </div>
            <div class="results-actions">
              <button class="btn btn-accent" (click)="retryQuiz()"><iconify-icon icon="mdi:refresh" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('quiz.retryQuiz') }}</button>
              <a routerLink="/chapters" class="btn btn-outline"><iconify-icon icon="mdi:arrow-left" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>{{ t.t('quiz.backToChapters') }}</a>
            </div>
            @if (submitError()) {
              <p class="submit-error" role="alert"><iconify-icon icon="mdi:alert-circle-outline" style="vertical-align: -0.125em"></iconify-icon> {{ t.t('quiz.submitError') }}</p>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .quiz-container { max-width: 700px; }

    /* Intro */
    .quiz-intro {
      text-align: center;
      padding: 3rem 2rem;
    }
    .quiz-intro-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
    .quiz-intro h1 { font-size: 1.5rem; color: var(--color-primary); }
    .quiz-intro p { color: var(--color-text-muted); margin: 0.5rem 0 1.5rem; }
    .quiz-intro .btn-ghost { margin-top: 0.5rem; display: block; }

    /* Progress bar */
    .quiz-progress-bar {
      height: 6px;
      background: var(--color-border);
      border-radius: 3px;
      overflow: hidden;
      margin-bottom: 1.5rem;
    }
    .quiz-progress-fill {
      height: 100%;
      background: var(--color-accent);
      border-radius: 3px;
      transition: width 0.3s ease;
    }

    .quiz-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    .quiz-counter { font-weight: 600; color: var(--color-text-light); font-size: 0.9rem; }
    .quiz-score { font-weight: 700; color: var(--color-primary); }

    /* Question card */
    .question-card { padding: 2rem; }
    .question-text {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-primary);
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }

    .options { display: flex; flex-direction: column; gap: 0.75rem; }

    .option-btn {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      border: 2px solid var(--color-border);
      border-radius: var(--radius-md);
      background: var(--color-surface);
      cursor: pointer;
      transition: all var(--transition-fast);
      text-align: left;
      width: 100%;
    }
    .option-btn:hover:not(:disabled) {
      border-color: var(--color-primary);
      background: var(--color-border-light);
    }
    .option-btn.selected { border-color: var(--color-primary); background: var(--color-border-light); }
    .option-btn.correct { border-color: var(--color-secondary); background: #e8f5e9; }
    .option-btn.wrong { border-color: #e53935; background: #fce4ec; }
    .option-btn:disabled { cursor: default; }

    .option-letter {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--color-border-light);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--color-text-light);
      flex-shrink: 0;
    }
    .option-btn.correct .option-letter { background: var(--color-secondary); color: #fff; }
    .option-btn.wrong .option-letter { background: #e53935; color: #fff; }

    .option-text { font-size: 0.95rem; color: var(--color-text); }

    /* Explanation */
    .explanation {
      margin-top: 1.5rem;
      padding: 1rem;
      border-radius: var(--radius-md);
      font-size: 0.9rem;
      line-height: 1.6;
    }
    .explanation.correct { background: #e8f5e9; }
    .explanation.wrong { background: #fce4ec; }
    .explanation strong { display: block; margin-bottom: 0.25rem; }
    .explanation p { color: var(--color-text-light); }

    .next-btn { margin-top: 1.5rem; width: 100%; }

    /* Results */
    .results-card {
      text-align: center;
      padding: 3rem 2rem;
    }
    .results-icon { font-size: 3.5rem; display: block; margin-bottom: 1rem; }
    .results-card h1 { color: var(--color-primary); margin-bottom: 1.5rem; }

    .results-score { display: flex; align-items: baseline; justify-content: center; gap: 0.25rem; }
    .score-big { font-size: 4rem; font-weight: 800; color: var(--color-primary); }
    .score-divider { font-size: 2rem; color: var(--color-text-muted); }
    .score-total { font-size: 2rem; color: var(--color-text-muted); }
    .score-label { color: var(--color-text-light); margin: 1rem 0 1.5rem; font-size: 1.1rem; }

    .results-bar {
      height: 12px;
      background: var(--color-border);
      border-radius: 6px;
      overflow: hidden;
      max-width: 300px;
      margin: 0 auto 2rem;
    }
    .results-bar-fill { height: 100%; border-radius: 6px; transition: width 0.5s ease; }
    .results-bar-fill.high { background: var(--color-secondary); }
    .results-bar-fill.medium { background: var(--color-highlight); }
    .results-bar-fill.low { background: var(--color-accent); }

    .results-actions { display: flex; gap: 1rem; justify-content: center; }
    .submit-error { color: #e53935; font-size: 0.85rem; margin-top: 1rem; }
  `
})
export class QuizPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly progressService = inject(ProgressService);
  protected readonly t = inject(LanguageService);

  protected readonly chapterId = signal(0);
  private readonly chapter = signal<Chapter | undefined>(undefined);
  protected readonly chapterTitle = computed(() => {
    const ch = this.chapter();
    if (!ch) return 'Quiz';
    return this.t.lang() === 'ka' && ch.titleKa ? ch.titleKa : ch.title;
  });
  protected readonly questions = signal<QuizQuestion[]>([]);
  protected readonly currentIndex = signal(0);
  protected readonly selectedIndex = signal(-1);
  protected readonly answered = signal(false);
  protected readonly score = signal(0);
  protected readonly quizStarted = signal(false);
  protected readonly quizFinished = signal(false);
  protected readonly submitError = signal(false);

  protected readonly currentQuestion = computed(() => this.questions()[this.currentIndex()]);
  protected readonly isCorrect = computed(() => this.selectedIndex() === this.currentQuestion()?.correctIndex);
  protected readonly localizedQuestion = computed(() => {
    const q = this.currentQuestion();
    if (!q) return '';
    return this.t.lang() === 'ka' && q.questionKa ? q.questionKa : q.question;
  });
  protected readonly localizedOptions = computed(() => {
    const q = this.currentQuestion();
    if (!q) return [];
    return this.t.lang() === 'ka' && q.optionsKa ? q.optionsKa : q.options;
  });
  protected readonly localizedExplanation = computed(() => {
    const q = this.currentQuestion();
    if (!q) return '';
    return this.t.lang() === 'ka' && q.explanationKa ? q.explanationKa : q.explanation;
  });
  protected readonly progressPercent = computed(() =>
    ((this.currentIndex() + (this.answered() ? 1 : 0)) / this.questions().length * 100) + '%'
  );
  protected readonly scorePercent = computed(() =>
    Math.round((this.score() / this.questions().length) * 100)
  );

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('chapterId'));
    this.chapterId.set(id);

    const chapter = CHAPTERS.find(c => c.id === id);
    this.chapter.set(chapter);

    const quiz = QUIZZES.find(q => q.chapterId === id);
    if (quiz) {
      this.questions.set(quiz.questions);
    }
  }

  startQuiz() {
    this.quizStarted.set(true);
    this.currentIndex.set(0);
    this.score.set(0);
    this.quizFinished.set(false);
  }

  selectAnswer(index: number) {
    if (this.answered()) return;
    this.selectedIndex.set(index);
    this.answered.set(true);
    if (index === this.currentQuestion()?.correctIndex) {
      this.score.update(s => s + 1);
    }
  }

  nextQuestion() {
    if (this.currentIndex() < this.questions().length - 1) {
      this.currentIndex.update(i => i + 1);
      this.selectedIndex.set(-1);
      this.answered.set(false);
    } else {
      this.quizFinished.set(true);
      this.submitError.set(false);
      // Submit score to backend
      const quiz = QUIZZES.find(q => q.chapterId === this.chapterId());
      if (quiz) {
        this.progressService.submitQuiz({
          chapterId: this.chapterId(),
          quizId: quiz.id,
          score: this.score(),
          totalQuestions: this.questions().length
        }).subscribe({ error: () => this.submitError.set(true) });
      }
    }
  }

  retryQuiz() {
    this.startQuiz();
  }
}
