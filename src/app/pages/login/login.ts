import { Component, signal, inject, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-header">
          <span class="auth-icon"><iconify-icon icon="mdi:head-snowflake-outline" width="34" height="34"></iconify-icon></span>
          <h1>{{ t.t('login.welcomeBack') }}</h1>
          <p>{{ t.t('login.subtitle') }}</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label class="form-label" for="login">{{ t.t('login.emailOrUsername') }}</label>
            <input
              id="login"
              class="form-input"
              formControlName="login"
              [placeholder]="t.t('login.enterEmailOrUsername')"
              autocomplete="username" />
          </div>

          <div class="form-group">
            <label class="form-label" for="password">{{ t.t('login.password') }}</label>
            <input
              id="password"
              class="form-input"
              type="password"
              formControlName="password"
              [placeholder]="t.t('login.enterPassword')"
              autocomplete="current-password" />
          </div>

          @if (error()) {
            <div class="auth-error" role="alert">{{ error() }}</div>
          }

          <button type="submit" class="btn btn-accent auth-submit" [disabled]="loading()">
            {{ loading() ? t.t('login.signingIn') : t.t('login.signIn') }}
          </button>
        </form>

        <p class="forgot-link">
          <a routerLink="/forgot-password">{{ t.t('login.forgotPassword') }}</a>
        </p>

        <p class="auth-footer">
          {{ t.t('login.noAccount') }} <a routerLink="/register">{{ t.t('login.createOne') }}</a>
        </p>
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

    .auth-icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 0.75rem;
    }

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

    form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

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

    .auth-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .forgot-link {
      text-align: right;
      margin-top: 0.25rem;
      font-size: 0.85rem;
    }

    .auth-footer {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.9rem;
      color: var(--color-text-light);
    }

    @media (max-width: 640px) {
      .auth-page { padding: 1rem 0.75rem; }
      .auth-card { padding: 1.75rem 1.25rem; }
    }
  `
})
export class LoginPage {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  protected readonly t = inject(LanguageService);

  protected readonly error = signal('');
  protected readonly loading = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set('');

    const { login, password } = this.form.getRawValue();
    this.auth.login(login, password).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.error?.error || 'Login failed. Please try again.');
      }
    });
  }
}
