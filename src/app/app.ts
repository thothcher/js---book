import { Component, signal, inject, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, effect, DOCUMENT } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LanguageService } from './services/language.service';
import { GamificationService } from './services/gamification.service';
import { XpToastComponent } from './components/xp-toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, XpToastComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly auth = inject(AuthService);
  protected readonly langService = inject(LanguageService);
  protected readonly gam = inject(GamificationService);
  protected readonly mobileMenuOpen = signal(false);
  protected readonly langDropdownOpen = signal(false);
  private readonly doc = inject(DOCUMENT);

  constructor() {
    // Sync <html lang> attribute with selected language
    effect(() => {
      this.doc.documentElement.lang = this.langService.lang();
    });

    // Load gamification stats when user is logged in
    effect(() => {
      if (this.auth.isLoggedIn() && !this.auth.isAdmin()) {
        this.gam.loadStats().subscribe();
      }
    });

    // Auto-dismiss XP toast after 3.5s
    effect(() => {
      if (this.gam.pendingToast()) {
        setTimeout(() => this.gam.dismissToast(), 3500);
      }
    });
  }

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
    this.langDropdownOpen.set(false);
    (this.doc.activeElement as HTMLElement)?.blur();
  }
}
