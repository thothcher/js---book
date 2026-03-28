import { Component, ChangeDetectionStrategy, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GamificationService } from '../services/gamification.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-xp-toast',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (gam.pendingToast(); as toast) {
      <div class="xp-toast" role="status" aria-live="polite" (click)="gam.dismissToast()">
        <div class="xp-toast-content">
          <div class="xp-amount">
            <iconify-icon icon="mdi:star-four-points" width="20" height="20"></iconify-icon>
            +{{ toast.xp }} XP
          </div>
          @for (badge of toast.badges; track badge.id) {
            <div class="badge-earned">
              <iconify-icon [icon]="badge.icon" width="18" height="18"></iconify-icon>
              <span>{{ lang.lang() === 'ka' ? badge.nameKa : badge.nameEn }}</span>
            </div>
          }
        </div>
      </div>
    }
  `,
  styles: `
    .xp-toast {
      position: fixed;
      top: 80px;
      right: 24px;
      z-index: 10000;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(102, 126, 234, 0.4);
      cursor: pointer;
      animation: slideInRight 0.4s ease-out, fadeOut 0.4s ease-in 3s forwards;
      min-width: 160px;
    }
    .xp-toast-content {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .xp-amount {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.2rem;
      font-weight: 800;
      letter-spacing: 0.02em;
    }
    .badge-earned {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.85rem;
      font-weight: 600;
      background: rgba(255,255,255,0.2);
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
    }
    @keyframes slideInRight {
      from { transform: translateX(120%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeOut {
      to { opacity: 0; transform: translateX(40px); }
    }
  `
})
export class XpToastComponent {
  protected readonly gam = inject(GamificationService);
  protected readonly lang = inject(LanguageService);
}
