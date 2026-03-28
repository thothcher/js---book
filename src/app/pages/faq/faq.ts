import { Component, ChangeDetectionStrategy, inject, signal, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-faq',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="faq-hero">
      <div class="container">
        <span class="faq-badge">{{ t.t('faq.badge') }}</span>
        <h1>{{ t.t('faq.title') }}</h1>
        <p>{{ t.t('faq.subtitle') }}</p>
      </div>
    </section>

    <section class="faq-content">
      <div class="container">
        <div class="faq-list">
          @for (item of faqItems; track item.key) {
            <div class="faq-item" [class.open]="openItem() === item.key">
              <button
                class="faq-question"
                [attr.aria-expanded]="openItem() === item.key"
                [attr.aria-controls]="'faq-answer-' + item.key"
                (click)="toggle(item.key)"
              >
                <span>{{ t.t('faq.q' + item.key) }}</span>
                <iconify-icon
                  [icon]="openItem() === item.key ? 'mdi:minus' : 'mdi:plus'"
                  width="20"
                  height="20"
                  aria-hidden="true"
                ></iconify-icon>
              </button>
              @if (openItem() === item.key) {
                <div class="faq-answer" [id]="'faq-answer-' + item.key" role="region">
                  <p>{{ t.t('faq.a' + item.key) }}</p>
                </div>
              }
            </div>
          }
        </div>

        <div class="faq-cta">
          <iconify-icon icon="mdi:help-circle-outline" width="28" height="28" aria-hidden="true"></iconify-icon>
          <h2>{{ t.t('faq.ctaTitle') }}</h2>
          <p>{{ t.t('faq.ctaDesc') }}</p>
          <a routerLink="/contact" class="btn btn-accent">{{ t.t('faq.ctaBtn') }}</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .faq-hero {
      padding: 4rem 0 2.5rem;
      text-align: center;
    }
    .faq-badge {
      display: inline-block;
      background: rgba(59,130,246,0.08);
      color: var(--color-accent);
      padding: 0.3rem 0.9rem;
      border-radius: var(--radius-full);
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 1rem;
    }
    .faq-hero h1 {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      font-weight: 800;
      color: var(--color-primary);
      letter-spacing: -0.02em;
    }
    .faq-hero p {
      color: var(--color-text-light);
      font-size: 1.05rem;
      margin-top: 0.5rem;
      max-width: 520px;
      margin-inline: auto;
    }

    .faq-content {
      padding: 0 0 5rem;
    }
    .faq-list {
      max-width: 720px;
      margin: 0 auto;
    }
    .faq-item {
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      margin-bottom: 0.75rem;
      background: var(--color-surface);
      transition: box-shadow 0.2s ease;
    }
    .faq-item.open {
      box-shadow: 0 4px 20px rgba(0,0,0,0.06);
      border-color: var(--color-accent);
    }
    .faq-question {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.25rem 1.5rem;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-primary);
      text-align: left;
      font-family: inherit;
    }
    .faq-question:hover {
      color: var(--color-accent);
    }
    .faq-question iconify-icon {
      flex-shrink: 0;
      color: var(--color-accent);
    }
    .faq-answer {
      padding: 0 1.5rem 1.25rem;
    }
    .faq-answer p {
      color: var(--color-text-light);
      font-size: 0.93rem;
      line-height: 1.7;
    }

    .faq-cta {
      max-width: 520px;
      margin: 3rem auto 0;
      text-align: center;
      padding: 2.5rem;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
    }
    .faq-cta iconify-icon {
      color: var(--color-accent);
    }
    .faq-cta h2 {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--color-primary);
      margin: 0.75rem 0 0.5rem;
    }
    .faq-cta p {
      color: var(--color-text-light);
      font-size: 0.9rem;
      margin-bottom: 1.25rem;
    }
  `
})
export class FaqPage {
  protected readonly t = inject(LanguageService);
  readonly openItem = signal<number | null>(null);

  readonly faqItems = [
    { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 },
    { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 10 },
  ];

  toggle(key: number) {
    this.openItem.update(current => current === key ? null : key);
  }
}
