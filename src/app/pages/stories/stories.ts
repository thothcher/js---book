import { Component, ChangeDetectionStrategy, signal, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { STORIES } from '../../data/book-data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-stories',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title"><iconify-icon icon="mdi:book-open-page-variant" style="vertical-align: -0.125em"></iconify-icon> {{ langService.t('stories.title') }}</h1>
          <p class="page-subtitle">{{ langService.t('stories.subtitle') }}</p>
        </div>

        <div class="stories-list">
          @for (story of STORIES; track story.id; let i = $index) {
            <article class="story-card card" [class.expanded]="expandedId() === story.id">
              <div class="story-header" (click)="toggle(story.id)" (keydown.enter)="toggle(story.id)" (keydown.space)="toggle(story.id); $event.preventDefault()" role="button" tabindex="0" [attr.aria-expanded]="expandedId() === story.id">
                <div class="story-num"><iconify-icon [attr.icon]="story.icon" width="18" height="18"></iconify-icon></div>
                <div class="story-heading">
                  <h2>{{ langService.lang() === 'ka' ? story.titleKa : story.title }}</h2>
                </div>
                <span class="expand-icon">
                  <iconify-icon [attr.icon]="expandedId() === story.id ? 'mdi:minus' : 'mdi:plus'" width="18" height="18"></iconify-icon>
                </span>
              </div>

              @if (expandedId() === story.id) {
                <div class="story-body">
                  <div class="story-text">
                    @for (p of getParagraphs(langService.lang() === 'ka' ? story.contentKa : story.content); track $index) {
                      <p>{{ p }}</p>
                    }
                  </div>
                  <div class="story-takeaway">
                    <strong><iconify-icon icon="mdi:target" style="vertical-align: -0.125em"></iconify-icon> {{ langService.t('stories.keyTakeaway') }}</strong>
                    {{ langService.lang() === 'ka' ? story.moralKa : story.moral }}
                  </div>
                </div>
              }
            </article>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .stories-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .story-card {
      padding: 0;
      overflow: hidden;
      transition: all var(--transition-normal);
    }
    .story-card.expanded { border-color: var(--color-accent); }

    .story-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem 1.5rem;
      cursor: pointer;
    }
    .story-header:hover { background: rgba(0,0,0,0.02); }

    .story-num {
      width: 40px;
      height: 40px;
      border-radius: var(--radius-full);
      background: var(--color-primary);
      color: var(--color-text-on-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-weight: 700;
      font-size: 0.9rem;
    }
    .story-heading { flex: 1; }
    .story-heading h2 {
      font-size: 1.1rem;
      color: var(--color-primary);
      margin-bottom: 0.3rem;
    }

    .expand-icon {
      width: 36px;
      height: 36px;
      border-radius: var(--radius-full);
      background: var(--color-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--color-primary);
    }

    .story-body {
      padding: 0 1.5rem 1.5rem 5rem;
    }
    .story-text {
      font-size: 0.95rem;
      color: var(--color-text-light);
      line-height: 1.8;
      margin-bottom: 1.25rem;
    }
    .story-text p {
      margin-bottom: 0.75rem;
      text-indent: 1.5rem;
    }
    .story-text p:first-child {
      text-indent: 0;
    }
    .story-text p:last-child {
      margin-bottom: 0;
    }
    .story-takeaway {
      padding: 1rem;
      background: var(--color-bg);
      border-left: 3px solid var(--color-accent);
      border-radius: 0 var(--radius-md) var(--radius-md) 0;
      font-size: 0.9rem;
      color: var(--color-text);
      line-height: 1.6;
    }

    @media (max-width: 640px) {
      .story-body { padding-left: 1.5rem; }
    }
  `
})
export class StoriesPage {
  protected readonly langService = inject(LanguageService);
  protected readonly STORIES = STORIES;
  protected readonly expandedId = signal<number | null>(null);

  toggle(id: number) {
    this.expandedId.update(current => current === id ? null : id);
  }

  getParagraphs(text: string): string[] {
    return text.split('\n').filter(p => p.trim().length > 0);
  }
}
