import { Component, signal, inject, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-header">
          <span class="auth-icon"><iconify-icon icon="mdi:school-outline" width="34" height="34"></iconify-icon></span>
          <h1>{{ t.t('register.createAccount') }}</h1>
        </div>

        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label class="form-label" for="displayName">{{ t.t('register.displayName') }}</label>
            <input id="displayName" class="form-input" formControlName="displayName" [placeholder]="t.t('register.yourName')" />
          </div>

          <div class="form-group">
            <label class="form-label" for="username">{{ t.t('register.username') }}</label>
            <input id="username" class="form-input" formControlName="username" [placeholder]="t.t('register.chooseUsername')" autocomplete="username" />
          </div>

          <div class="form-group">
            <label class="form-label" for="email">{{ t.t('register.email') }}</label>
            <input id="email" class="form-input" type="email" formControlName="email" [placeholder]="t.t('register.emailPlaceholder')" autocomplete="email" />
          </div>

          <div class="form-group">
            <label class="form-label" for="password">{{ t.t('register.password') }}</label>
            <input id="password" class="form-input" type="password" formControlName="password" [placeholder]="t.t('register.minChars')" autocomplete="new-password" />
          </div>

          @if (error()) {
            <div class="auth-error" role="alert">{{ error() }}</div>
          }

          <button type="submit" class="btn btn-accent auth-submit" [disabled]="loading()">
            {{ loading() ? t.t('register.creating') : t.t('register.createAccount') }}
          </button>
        </form>

        <p class="auth-footer">
          {{ t.t('register.hasAccount') }} <a routerLink="/login">{{ t.t('register.signIn') }}</a>
        </p>

        <div class="trial-info">
          <span class="trial-icon"><iconify-icon icon="mdi:gift-outline" width="20" height="20"></iconify-icon></span>
          <span>{{ t.t('register.trialInfo') }}</span>
        </div>
      </div>
    </div>
  `,
  styles: `
    .auth-page {
      min-height: calc(100vh - 70px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .auth-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: 2.5rem;
      width: 100%;
      max-width: 420px;
      box-shadow: var(--shadow-md);
    }

    .auth-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .auth-icon { font-size: 2.5rem; display: block; margin-bottom: 0.75rem; }

    .auth-header h1 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary);
    }

    .auth-header p {
      color: var(--color-text-muted);
      margin-top: 0.25rem;
      font-size: 0.9rem;
    }

    form { display: flex; flex-direction: column; gap: 1rem; }

    .auth-error {
      background: #fce4ec;
      color: #c62828;
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      font-size: 0.85rem;
      font-weight: 500;
    }

    .auth-submit {
      width: 100%;
      margin-top: 0.5rem;
      padding: 0.85rem;
    }

    .auth-submit:disabled { opacity: 0.6; cursor: not-allowed; }

    .auth-footer {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.9rem;
      color: var(--color-text-light);
    }

    .trial-info {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1.25rem;
      padding: 0.75rem;
      background: #e8f5e9;
      border-radius: var(--radius-md);
      font-size: 0.85rem;
      color: #2e7d32;
      font-weight: 500;
    }

    @media (max-width: 640px) {
      .auth-page { padding: 1rem 0.75rem; }
      .auth-card { padding: 1.75rem 1.25rem; }
    }
  `
})
export class RegisterPage {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  protected readonly t = inject(LanguageService);

  protected readonly error = signal('');
  protected readonly loading = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    displayName: ['', Validators.required],
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set('');

    const { email, username, password, displayName } = this.form.getRawValue();
    this.auth.register(email, username, password, displayName).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.error?.error || 'Registration failed. Please try again.');
      }
    });
  }
}
