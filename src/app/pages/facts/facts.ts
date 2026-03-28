import { Component, ChangeDetectionStrategy, signal, computed, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FACTS } from '../../data/book-data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-facts',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title"><iconify-icon icon="mdi:lightbulb-outline" style="vertical-align: -0.125em"></iconify-icon> {{ langService.t('facts.title') }}</h1>
          <p class="page-subtitle">{{ langService.t('facts.subtitle') }}</p>
        </div>

        <div class="filter-bar">
          <button class="filter-btn" [class.active]="activeCategory() === 'all'" (click)="activeCategory.set('all')">{{ langService.t('facts.all') }}</button>
          @for (cat of categories; track cat) {
            <button class="filter-btn" [class.active]="activeCategory() === cat" (click)="activeCategory.set(cat)">{{ cat }}</button>
          }
        </div>

        <div class="facts-grid">
          @for (fact of filteredFacts(); track fact.id) {
            <article class="fact-card card">
              <div class="fact-icon"><iconify-icon [attr.icon]="fact.icon" width="28" height="28"></iconify-icon></div>
              <span class="badge badge-accent">{{ fact.category }}</span>
              <p>{{ langService.lang() === 'ka' ? fact.textKa : fact.text }}</p>
              <div class="fact-source"><iconify-icon icon="mdi:book-open-variant" style="vertical-align: -0.125em"></iconify-icon> {{ fact.source }}</div>
            </article>
          } @empty {
            <div class="empty-state">
              <iconify-icon icon="mdi:lightbulb-off-outline" width="36" height="36"></iconify-icon>
              <p>{{ langService.t('facts.noResults') }}</p>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .filter-bar {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 2rem;
    }
    .filter-btn {
      padding: 0.5rem 1.25rem;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      background: var(--color-surface);
      color: var(--color-text-light);
      cursor: pointer;
      font-size: 0.85rem;
      transition: all var(--transition-fast);
    }
    .filter-btn:hover, .filter-btn.active {
      background: var(--color-primary);
      color: var(--color-text-on-primary);
      border-color: var(--color-primary);
    }

    .facts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    .fact-card {
      padding: 1.5rem;
      transition: all var(--transition-normal);
    }
    .fact-card:hover {
      border-color: var(--color-accent);
    }
    .fact-icon {
      font-size: 2rem;
      margin-bottom: 0.75rem;
    }
    .fact-card .badge { margin-bottom: 0.75rem; }
    .fact-card h3 {
      font-size: 1.05rem;
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }
    .fact-card p {
      color: var(--color-text-light);
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    .fact-source {
      font-size: 0.8rem;
      color: var(--color-text-muted);
      padding-top: 0.75rem;
      border-top: 1px solid var(--color-border);
    }

    @media (max-width: 640px) {
      .facts-grid { grid-template-columns: 1fr; }
    }

    .empty-state {
      grid-column: 1 / -1;
      text-align: center;
      padding: 3rem;
      color: var(--color-text-muted);
    }
    .empty-state p { margin-top: 0.75rem; }
  `
})
export class FactsPage {
  protected readonly langService = inject(LanguageService);
  protected readonly activeCategory = signal('all');

  protected readonly categories = [...new Set(FACTS.map(f => f.category))];

  protected readonly filteredFacts = computed(() => {
    const cat = this.activeCategory();
    return cat === 'all' ? FACTS : FACTS.filter(f => f.category === cat);
  });
}
