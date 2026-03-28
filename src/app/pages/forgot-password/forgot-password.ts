import { Component, signal, inject, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-header">
          <span class="auth-icon"><iconify-icon icon="mdi:lock-reset" width="34" height="34"></iconify-icon></span>
          <h1>{{ t.t('forgot.title') }}</h1>
          <p>{{ t.t('forgot.subtitle') }}</p>
        </div>

        @if (step() === 'email') {
          <form [formGroup]="emailForm" (ngSubmit)="sendCode()">
            <div class="form-group">
              <label class="form-label" for="email">{{ t.t('forgot.email') }}</label>
              <input
                id="email"
                class="form-input"
                type="email"
                formControlName="email"
                [placeholder]="t.t('forgot.enterEmail')"
                autocomplete="email" />
            </div>

            @if (error()) {
              <div class="auth-error" role="alert">{{ error() }}</div>
            }
            @if (success()) {
              <div class="auth-success" role="status">{{ success() }}</div>
            }

            <button type="submit" class="btn btn-accent auth-submit" [disabled]="loading()">
              {{ loading() ? t.t('forgot.sending') : t.t('forgot.sendCode') }}
            </button>
          </form>
        }

        @if (step() === 'reset') {
          <form [formGroup]="resetForm" (ngSubmit)="resetPassword()">
            <div class="form-group">
              <label class="form-label" for="code">{{ t.t('forgot.code') }}</label>
              <input
                id="code"
                class="form-input code-input"
                formControlName="code"
                [placeholder]="t.t('forgot.enterCode')"
                maxlength="6"
                autocomplete="one-time-code" />
            </div>

            <div class="form-group">
              <label class="form-label" for="newPassword">{{ t.t('forgot.newPassword') }}</label>
              <input
                id="newPassword"
                class="form-input"
                type="password"
                formControlName="newPassword"
                [placeholder]="t.t('forgot.enterNewPassword')"
                autocomplete="new-password" />
            </div>

            <div class="form-group">
              <label class="form-label" for="confirmPassword">{{ t.t('forgot.confirmPassword') }}</label>
              <input
                id="confirmPassword"
                class="form-input"
                type="password"
                formControlName="confirmPassword"
                [placeholder]="t.t('forgot.confirmNewPassword')"
                autocomplete="new-password" />
            </div>

            @if (error()) {
              <div class="auth-error" role="alert">{{ error() }}</div>
            }
            @if (success()) {
              <div class="auth-success" role="status">{{ success() }}</div>
            }

            <button type="submit" class="btn btn-accent auth-submit" [disabled]="loading()">
              {{ loading() ? t.t('forgot.resetting') : t.t('forgot.resetPassword') }}
            </button>
          </form>
        }

        <p class="auth-footer">
          <a routerLink="/login">{{ t.t('forgot.backToLogin') }}</a>
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

    .code-input {
      text-align: center;
      font-size: 1.5rem;
      letter-spacing: 6px;
      font-weight: 700;
    }

    .auth-error {
      background: #fce4ec;
      color: #c62828;
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      font-size: 0.85rem;
      font-weight: 500;
    }

    .auth-success {
      background: #e8f5e9;
      color: #2e7d32;
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

    @media (max-width: 640px) {
      .auth-page { padding: 1rem 0.75rem; }
      .auth-card { padding: 1.75rem 1.25rem; }
    }
  `
})
export class ForgotPasswordPage {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  protected readonly t = inject(LanguageService);

  protected readonly step = signal<'email' | 'reset'>('email');
  protected readonly error = signal('');
  protected readonly success = signal('');
  protected readonly loading = signal(false);
  private savedEmail = '';

  protected readonly emailForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]]
  });

  protected readonly resetForm = this.fb.nonNullable.group({
    code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  });

  sendCode() {
    if (this.emailForm.invalid) return;

    this.loading.set(true);
    this.error.set('');
    this.success.set('');

    const email = this.emailForm.getRawValue().email;
    this.savedEmail = email;

    this.auth.forgotPassword(email).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.success.set(res.message);
        this.step.set('reset');
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.error?.error || 'Failed to send reset code.');
      }
    });
  }

  resetPassword() {
    if (this.resetForm.invalid) return;

    const { code, newPassword, confirmPassword } = this.resetForm.getRawValue();

    if (newPassword !== confirmPassword) {
      this.error.set(this.t.t('forgot.passwordMismatch'));
      return;
    }

    this.loading.set(true);
    this.error.set('');
    this.success.set('');

    this.auth.resetPassword(this.savedEmail, code, newPassword).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.success.set(res.message);
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.error?.error || 'Failed to reset password.');
      }
    });
  }
}
