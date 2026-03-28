import { Component, ChangeDetectionStrategy, inject, signal, computed, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CHAPTERS, QUIZZES } from '../../data/book-data';
import { AuthService } from '../../services/auth.service';
import { ProgressService } from '../../services/progress.service';
import { NotesService } from '../../services/notes.service';
import { LanguageService } from '../../services/language.service';
import { Chapter, Quiz } from '../../data/book-data';
import { chapterText } from '../../data/chapter-i18n';

@Component({
  selector: 'app-chapter-detail',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:mouseup)': 'onMouseUp($event)',
    '(document:mousedown)': 'onMouseDown($event)',
  },
  template: `
    @if (chapter(); as ch) {
      <div class="page">
        <div class="container">
          <a routerLink="/chapters" class="back-link"><iconify-icon icon="mdi:arrow-left" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>{{ t.t('chapterDetail.backToChapters') }}</a>

          <div class="detail-header">
            <span class="ch-icon"><iconify-icon [attr.icon]="ch.icon" width="40" height="40"></iconify-icon></span>
            <div>
              <span class="ch-num">{{ t.t('chapters.chapter') }} {{ ch.id }}</span>
              <h1 class="page-title">{{ i18nTitle() }}</h1>
              @if (t.lang() !== 'en') {
                <p class="ch-ka">{{ ch.title }}</p>
              }
            </div>
          </div>

          <!-- Mark progress buttons -->
          @if (auth.isLoggedIn()) {
            <div class="progress-buttons">
              <button class="btn btn-outline" (click)="markProgress('in_progress')"><iconify-icon icon="mdi:progress-clock" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('chapterDetail.markInProgress') }}</button>
              <button class="btn btn-accent" (click)="markProgress('completed')"><iconify-icon icon="mdi:check-circle-outline" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ t.t('chapterDetail.markCompleted') }}</button>
            </div>
          }

          <div class="detail-grid">
            <div class="main-content readable-content">
              <div class="summary-card card">
                <h2><iconify-icon icon="mdi:text-box-outline" style="vertical-align: -0.125em; margin-right: 0.4rem"></iconify-icon>{{ t.t('chapterDetail.summary') }}</h2>
                <p>{{ i18nSummary() }}</p>
              </div>

              <div class="key-points-card card">
                <h2><iconify-icon icon="mdi:lightbulb-on-outline" style="vertical-align: -0.125em; margin-right: 0.4rem"></iconify-icon>{{ t.t('chapterDetail.keyPoints') }}</h2>
                <ol class="key-points-list">
                  @for (point of i18nKeyPoints(); track $index; let i = $index) {
                    <li>
                      <span class="point-number">{{ i + 1 }}</span>
                      <span class="point-text">{{ point }}</span>
                    </li>
                  }
                </ol>
              </div>

              <div class="fun-fact-card card">
                <div class="fun-fact-badge">
                  <iconify-icon icon="mdi:star-four-points" width="20" height="20"></iconify-icon>
                  {{ t.t('chapterDetail.funFact') }}
                </div>
                <p>{{ i18nFunFact() }}</p>
              </div>

              <div class="real-world-card card">
                <h2><iconify-icon icon="mdi:earth" style="vertical-align: -0.125em; margin-right: 0.4rem"></iconify-icon>{{ t.t('chapterDetail.realWorld') }}</h2>
                <p>{{ i18nRealWorld() }}</p>
              </div>

              @if (ch.codeExamples && ch.codeExamples.length) {
                <div class="code-examples-card card">
                  <h2><iconify-icon icon="mdi:code-braces" style="vertical-align: -0.125em; margin-right: 0.4rem"></iconify-icon>{{ t.t('chapterDetail.codeExamples') }}</h2>
                  @for (example of ch.codeExamples; track $index) {
                    <div class="code-block">
                      <div class="code-block-header">
                        <span class="code-block-title">{{ t.lang() !== 'en' && example.titleKa ? example.titleKa : example.title }}</span>
                        <div class="code-block-actions">
                          <button class="code-copy-btn" (click)="copyCode(example.code)" type="button" [attr.aria-label]="'Copy code'">
                            <iconify-icon [attr.icon]="copiedIndex() === $index ? 'mdi:check' : 'mdi:content-copy'" width="14" height="14"></iconify-icon>
                          </button>
                          <a [routerLink]="['/playground']" [queryParams]="{ code: example.code }" class="code-try-btn" type="button">
                            <iconify-icon icon="mdi:play-circle-outline" width="14" height="14"></iconify-icon>
                            {{ t.t('chapterDetail.tryIt') }}
                          </a>
                        </div>
                      </div>
                      <pre class="code-pre"><code>{{ example.code }}</code></pre>
                      @if (example.output) {
                        <div class="code-output">
                          <span class="code-output-label">Output:</span>
                          <span>{{ example.output }}</span>
                        </div>
                      }
                    </div>
                  }
                </div>
              }
            </div>

            <div class="sidebar">
              <div class="card topics-card">
                <h3><iconify-icon icon="mdi:tag-multiple-outline" style="vertical-align: -0.125em; margin-right: 0.3rem"></iconify-icon>{{ t.t('chapterDetail.keyTopics') }}</h3>
                <ul class="topics-list">
                  @for (topic of i18nKeyTopics(); track $index) {
                    <li>{{ topic }}</li>
                  }
                </ul>
              </div>

              @if (ch.keyFigures && ch.keyFigures.length) {
                <div class="card figures-card">
                  <h3><iconify-icon icon="mdi:account-group-outline" style="vertical-align: -0.125em; margin-right: 0.3rem"></iconify-icon>{{ t.t('chapterDetail.keyFigures') }}</h3>
                  <ul class="figures-list">
                    @for (figure of ch.keyFigures; track figure) {
                      <li><iconify-icon icon="mdi:account-circle-outline" style="vertical-align: -0.125em; margin-right: 0.3rem; color: var(--color-accent)"></iconify-icon>{{ figure }}</li>
                    }
                  </ul>
                </div>
              }

              @if (quiz()) {
                <a [routerLink]="['/quiz', ch.id]" class="quiz-cta card">
                  <span class="quiz-cta-icon"><iconify-icon icon="mdi:target" width="28" height="28"></iconify-icon></span>
                  <div>
                    <strong>{{ t.t('chapterDetail.takeTheQuiz') }}</strong>
                    <p>{{ quiz()!.questions.length }} {{ t.t('chapterDetail.questions') }}</p>
                  </div>
                </a>
              }
            </div>
          </div>
        </div>
      </div>

      <!-- Floating save-to-notes tooltip -->
      @if (showTooltip()) {
        <div
          class="save-tooltip"
          [style.top.px]="tooltipY()"
          [style.left.px]="tooltipX()"
          role="tooltip"
        >
          <button class="save-tooltip-btn" (mousedown)="saveSelection($event)">
            <iconify-icon icon="mdi:note-plus-outline" width="16" height="16" aria-hidden="true"></iconify-icon>
            {{ t.t('chapterDetail.saveToNotes') }}
          </button>
        </div>
      }

      <!-- Saved confirmation -->
      @if (savedToast()) {
        <div class="save-toast" role="status" aria-live="polite">
          <iconify-icon icon="mdi:check-circle" width="18" height="18" aria-hidden="true"></iconify-icon>
          {{ t.t('chapterDetail.savedToNotes') }}
        </div>
      }
    }
  `,
  styles: `
    /* ── Readable content typography ── */
    .readable-content .card {
      padding: 2rem 2.25rem;
    }
    .readable-content p {
      font-size: 1.02rem;
      line-height: 1.85;
      color: #3a3a4a;
      letter-spacing: 0.005em;
    }
    .readable-content h2 {
      font-size: 1.2rem;
      margin-bottom: 1.15rem;
      color: var(--color-primary);
      font-weight: 700;
    }

    .back-link {
      display: inline-block;
      color: var(--color-text-light);
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    .back-link:hover { color: var(--color-accent); }

    .detail-header {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      margin-bottom: 2rem;
    }

    .ch-icon {
      font-size: 3rem;
      flex-shrink: 0;
    }

    .ch-num {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--color-accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .ch-ka {
      color: var(--color-text-muted);
      font-size: 0.95rem;
      margin-top: 0.15rem;
    }

    .progress-buttons {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .detail-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 1.5rem;
      align-items: start;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .summary-card p,
    .real-world-card p {
      line-height: 1.85;
    }

    /* Key Points */
    .key-points-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
      counter-reset: none;
    }

    .key-points-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .point-number {
      flex-shrink: 0;
      width: 1.75rem;
      height: 1.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--color-accent);
      color: #fff;
      font-size: 0.8rem;
      font-weight: 700;
      margin-top: 0.1rem;
    }

    .point-text {
      line-height: 1.75;
      color: #3a3a4a;
      font-size: 0.97rem;
    }

    /* Fun Fact */
    .fun-fact-card {
      background: linear-gradient(135deg, rgba(224,122,95,0.08), rgba(224,122,95,0.03));
      border-left: 4px solid var(--color-accent);
    }

    .fun-fact-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: var(--color-accent);
      color: #fff;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.3rem 0.75rem;
      border-radius: 999px;
      margin-bottom: 0.75rem;
    }

    .fun-fact-card p {
      line-height: 1.75;
      color: var(--color-text);
      font-style: italic;
    }

    /* Key Figures */
    .figures-card h3 {
      font-size: 1rem;
      margin-bottom: 0.75rem;
      color: var(--color-primary);
    }

    .figures-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .figures-list li {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      color: var(--color-text);
      padding: 0.35rem 0;
      border-bottom: 1px solid var(--color-border-light);
    }

    .figures-list li:last-child { border-bottom: none; }

    .topics-card h3 {
      font-size: 1rem;
      margin-bottom: 0.75rem;
      color: var(--color-primary);
    }

    .topics-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .topics-list li {
      padding: 0.5rem 0.75rem;
      background: var(--color-border-light);
      border-radius: var(--radius-sm);
      font-size: 0.9rem;
      color: var(--color-text);
    }

    .quiz-cta {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      margin-top: 1rem;
      cursor: pointer;
      border: 2px solid var(--color-accent);
    }

    .quiz-cta:hover {
      background: rgba(224, 122, 95, 0.05);
    }

    .quiz-cta-icon { font-size: 2rem; }

    .quiz-cta strong {
      color: var(--color-primary);
      display: block;
    }

    .quiz-cta p {
      color: var(--color-text-muted);
      font-size: 0.85rem;
    }

    /* ── Floating save-to-notes tooltip ── */
    .save-tooltip {
      position: fixed;
      z-index: 1000;
      animation: tooltipIn 0.15s ease-out;
    }
    .save-tooltip-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: var(--color-primary, #1a1a2e);
      color: #fff;
      border: none;
      padding: 0.5rem 0.85rem;
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(0,0,0,0.18);
      white-space: nowrap;
      transition: background 0.15s ease;
    }
    .save-tooltip-btn:hover {
      background: var(--color-accent, #c0392b);
    }

    /* ── Saved toast ── */
    .save-toast {
      position: fixed;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1001;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: var(--color-secondary, #2c6e49);
      color: #fff;
      padding: 0.65rem 1.25rem;
      border-radius: 10px;
      font-size: 0.88rem;
      font-weight: 600;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      animation: toastIn 0.25s ease-out;
    }

    @keyframes tooltipIn {
      from { opacity: 0; transform: translateY(4px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes toastIn {
      from { opacity: 0; transform: translateX(-50%) translateY(8px); }
      to   { opacity: 1; transform: translateX(-50%) translateY(0); }
    }

    /* ── Code Examples ── */
    .code-examples-card h2 {
      margin-bottom: 1.25rem;
    }
    .code-block {
      margin-bottom: 1.25rem;
      border-radius: var(--radius-md);
      overflow: hidden;
      border: 1px solid var(--color-border);
    }
    .code-block:last-child {
      margin-bottom: 0;
    }
    .code-block-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--color-code-bg);
      padding: 0.5rem 1rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .code-block-title {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--color-accent-light);
      font-family: 'Outfit', sans-serif;
    }
    .code-block-actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .code-copy-btn {
      background: transparent;
      border: 1px solid rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.6);
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius-sm);
      font-family: inherit;
      font-size: 0.75rem;
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      transition: all var(--transition-fast);
    }
    .code-copy-btn:hover {
      background: rgba(255,255,255,0.08);
      color: #fff;
    }
    .code-try-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      background: var(--color-accent);
      color: #fff;
      border: none;
      padding: 0.25rem 0.6rem;
      border-radius: var(--radius-sm);
      font-size: 0.75rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      text-decoration: none;
      transition: all var(--transition-fast);
    }
    .code-try-btn:hover {
      background: var(--color-accent-light);
      color: #fff;
    }
    .code-pre {
      padding: 1rem 1.25rem;
      background: var(--color-code-bg);
      overflow-x: auto;
      margin: 0;
    }
    .code-pre code {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.82rem;
      line-height: 1.7;
      color: var(--color-code-text);
      white-space: pre;
      background: none;
      padding: 0;
    }
    .code-output {
      padding: 0.6rem 1rem;
      background: rgba(16, 185, 129, 0.06);
      border-top: 1px solid rgba(16, 185, 129, 0.15);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.78rem;
      color: var(--color-secondary);
      white-space: pre-wrap;
    }
    .code-output-label {
      font-family: 'Outfit', sans-serif;
      font-weight: 600;
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-right: 0.5rem;
      opacity: 0.7;
    }

    @media (max-width: 768px) {
      .detail-grid { grid-template-columns: 1fr; }
      .sidebar { order: -1; }
      .readable-content .card { padding: 1.5rem; }
    }
  `
})
export class ChapterDetailPage implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  protected readonly auth = inject(AuthService);
  private readonly progressService = inject(ProgressService);
  private readonly notesService = inject(NotesService);
  protected readonly t = inject(LanguageService);
  private readonly elRef = inject(ElementRef);

  protected readonly chapter = signal<Chapter | undefined>(undefined);
  protected readonly quiz = signal<Quiz | undefined>(undefined);

  protected readonly i18nTitle = computed(() => {
    const ch = this.chapter();
    if (!ch) return '';
    return chapterText(ch.id, 'title', this.t.lang()) as string;
  });
  protected readonly i18nSummary = computed(() => {
    const ch = this.chapter();
    if (!ch) return '';
    return chapterText(ch.id, 'summary', this.t.lang()) as string;
  });
  protected readonly i18nKeyPoints = computed(() => {
    const ch = this.chapter();
    if (!ch) return [];
    return chapterText(ch.id, 'keyPoints', this.t.lang()) as string[];
  });
  protected readonly i18nFunFact = computed(() => {
    const ch = this.chapter();
    if (!ch) return '';
    return chapterText(ch.id, 'funFact', this.t.lang()) as string;
  });
  protected readonly i18nRealWorld = computed(() => {
    const ch = this.chapter();
    if (!ch) return '';
    return chapterText(ch.id, 'realWorld', this.t.lang()) as string;
  });
  protected readonly i18nKeyTopics = computed(() => {
    const ch = this.chapter();
    if (!ch) return [];
    return chapterText(ch.id, 'keyTopics', this.t.lang()) as string[];
  });

  protected readonly showTooltip = signal(false);
  protected readonly tooltipX = signal(0);
  protected readonly tooltipY = signal(0);
  protected readonly savedToast = signal(false);
  protected readonly copiedIndex = signal<number | null>(null);
  private selectedText = '';
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.chapter.set(CHAPTERS.find(c => c.id === id));
    this.quiz.set(QUIZZES.find(q => q.chapterId === id));
  }

  ngOnDestroy() {
    if (this.toastTimer) clearTimeout(this.toastTimer);
  }

  onMouseDown(event: MouseEvent) {
    // If clicking outside tooltip, hide it
    const target = event.target as HTMLElement;
    if (!target.closest('.save-tooltip')) {
      this.showTooltip.set(false);
    }
  }

  onMouseUp(event: MouseEvent) {
    // Small delay to let the selection finalize
    setTimeout(() => this.checkSelection(), 10);
  }

  private checkSelection() {
    const sel = document.getSelection();
    const text = sel?.toString().trim() ?? '';
    if (text.length < 3) {
      return;
    }

    // Only show if selection is within our component
    if (!sel?.anchorNode) return;
    const host = this.elRef.nativeElement as HTMLElement;
    if (!host.contains(sel.anchorNode)) return;

    this.selectedText = text;
    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    this.tooltipX.set(rect.left + rect.width / 2 - 60);
    this.tooltipY.set(rect.top - 44);
    this.showTooltip.set(true);
  }

  saveSelection(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (!this.selectedText || !this.chapter()) return;

    if (!this.auth.isLoggedIn()) {
      this.showTooltip.set(false);
      return;
    }

    const ch = this.chapter()!;
    this.notesService.create({
      title: `Ch.${ch.id}: ${ch.title}`,
      content: this.selectedText,
      chapterId: ch.id,
      color: '#6c8ebf',
    }).subscribe({
      next: () => {
        this.showTooltip.set(false);
        this.savedToast.set(true);
        document.getSelection()?.removeAllRanges();
        if (this.toastTimer) clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => this.savedToast.set(false), 2200);
      },
      error: () => {
        this.showTooltip.set(false);
      }
    });
  }

  markProgress(status: string) {
    const ch = this.chapter();
    if (!ch) return;
    this.progressService.updateChapter(ch.id, status).subscribe();
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      const ch = this.chapter();
      if (ch?.codeExamples) {
        const idx = ch.codeExamples.findIndex(e => e.code === code);
        this.copiedIndex.set(idx);
        setTimeout(() => this.copiedIndex.set(null), 1500);
      }
    });
  }
}
