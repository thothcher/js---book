import { Component, ChangeDetectionStrategy, signal, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PSYCHOLOGISTS } from '../../data/book-data';
import { LanguageService } from '../../services/language.service';
import { getPsychologistText } from '../../data/psychologist-i18n';

@Component({
  selector: 'app-psychologists',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title"><iconify-icon icon="mdi:account-group" style="vertical-align: -0.125em"></iconify-icon> {{ t.t('psychologists.title') }}</h1>
          <p class="page-subtitle">{{ t.t('psychologists.subtitle') }}</p>
        </div>

        <div class="psychologists-grid">
          @for (person of PSYCHOLOGISTS; track person.name; let i = $index) {
            @let localized = getPsychologistText(person, t.lang());
            <article class="psychologist-card card" (click)="toggle(i)">
              <div class="card-top">
                <div class="avatar-wrapper">
                  <img class="avatar" [src]="person.photo" [alt]="localized.name" loading="lazy" referrerpolicy="no-referrer" (error)="onImgError($event)">
                  <span class="avatar-fallback"><iconify-icon icon="mdi:account" width="28" height="28"></iconify-icon></span>
                </div>
                <div>
                  <h3>{{ localized.name }}</h3>
                  <span class="years">{{ person.years }}</span>
                </div>
              </div>
              <span class="badge badge-accent">{{ person.field }}</span>
              <p class="known-for"><strong>{{ t.t('psychologists.knownFor') }}</strong> {{ localized.contribution }}</p>

              @if (expandedId() === i) {
                <div class="expanded-details">
                  <p>{{ localized.details }}</p>
                </div>
              }

              <button class="toggle-btn" [attr.aria-expanded]="expandedId() === i" [attr.aria-label]="expandedId() === i ? 'Collapse details' : 'Expand details'">
                <iconify-icon [attr.icon]="expandedId() === i ? 'mdi:chevron-up' : 'mdi:chevron-down'" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>
                {{ expandedId() === i ? t.t('psychologists.less') : t.t('psychologists.more') }}
              </button>
            </article>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .psychologists-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 1.5rem;
    }

    .psychologist-card {
      padding: 1.5rem;
      cursor: pointer;
      transition: all var(--transition-normal);
    }
    .psychologist-card:hover { border-color: var(--color-accent); }

    .card-top {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.75rem;
    }
    .avatar-wrapper {
      position: relative;
      width: 64px;
      height: 64px;
      flex-shrink: 0;
    }
    .avatar {
      width: 64px;
      height: 64px;
      border-radius: var(--radius-full);
      object-fit: cover;
      background: var(--color-border-light);
      position: relative;
      z-index: 1;
    }
    .avatar-fallback {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-full);
      background: var(--color-border-light);
      color: var(--color-text-muted);
      z-index: 0;
    }
    .card-top h3 {
      color: var(--color-primary);
      font-size: 1.1rem;
      margin-bottom: 0.15rem;
    }
    .years {
      font-size: 0.8rem;
      color: var(--color-text-muted);
    }

    .psychologist-card .badge {
      margin-bottom: 0.75rem;
    }
    .known-for {
      font-size: 0.9rem;
      color: var(--color-text-light);
      line-height: 1.5;
    }

    .expanded-details {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--color-border);
    }
    .expanded-details p {
      font-size: 0.9rem;
      color: var(--color-text-light);
      line-height: 1.7;
    }

    .toggle-btn {
      display: inline-flex;
      align-items: center;
      margin-top: 0.75rem;
      background: none;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      color: var(--color-accent);
      font-size: 0.8rem;
      cursor: pointer;
      font-weight: 600;
      padding: 0.3rem 0.75rem;
      transition: all var(--transition-fast);
    }
    .toggle-btn:hover {
      background: rgba(224, 122, 95, 0.08);
      border-color: var(--color-accent);
    }

    @media (max-width: 640px) {
      .psychologists-grid { grid-template-columns: 1fr; }
    }
  `
})
export class PsychologistsPage {
  protected readonly t = inject(LanguageService);
  protected readonly getPsychologistText = getPsychologistText;
  protected readonly PSYCHOLOGISTS = PSYCHOLOGISTS;
  protected readonly expandedId = signal<number | null>(null);

  toggle(index: number) {
    this.expandedId.update(current => current === index ? null : index);
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
