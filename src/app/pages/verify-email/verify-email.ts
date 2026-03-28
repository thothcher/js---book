import { Component, signal, inject, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-verify-email',
  imports: [ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-header">
          <span class="auth-icon"><iconify-icon icon="mdi:email-check-outline" width="34" height="34"></iconify-icon></span>
          <h1>{{ t.t('verify.title') }}</h1>
          <p>{{ t.t('verify.subtitle') }}</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label class="form-label" for="code">{{ t.t('verify.code') }}</label>
            <input
              id="code"
              class="form-input code-input"
              formControlName="code"
              [placeholder]="t.t('verify.enterCode')"
              maxlength="6"
              autocomplete="one-time-code" />
          </div>

          @if (error()) {
            <div class="auth-error" role="alert">{{ error() }}</div>
          }

          @if (success()) {
            <div class="auth-success" role="status">{{ success() }}</div>
          }

          <button type="submit" class="btn btn-accent auth-submit" [disabled]="loading()">
            {{ loading() ? t.t('verify.verifying') : t.t('verify.verify') }}
          </button>
        </form>

        <p class="resend-text">
          {{ t.t('verify.noCode') }}
          <button class="link-btn" (click)="resend()" [disabled]="resending()">
            {{ resending() ? t.t('verify.sending') : t.t('verify.resend') }}
          </button>
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

    .resend-text {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.9rem;
      color: var(--color-text-light);
    }

    .link-btn {
      background: none;
      border: none;
      color: var(--color-accent);
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0;
      text-decoration: underline;
    }

    .link-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    @media (max-width: 640px) {
      .auth-page { padding: 1rem 0.75rem; }
      .auth-card { padding: 1.75rem 1.25rem; }
    }
  `
})
export class VerifyEmailPage {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  protected readonly t = inject(LanguageService);

  protected readonly error = signal('');
  protected readonly success = signal('');
  protected readonly loading = signal(false);
  protected readonly resending = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
  });

  onSubmit() {
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set('');
    this.success.set('');

    this.auth.verifyEmail(this.form.getRawValue().code).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loading.set(false);
        this.error.set(err?.error?.error || 'Verification failed. Please try again.');
      }
    });
  }

  resend() {
    this.resending.set(true);
    this.error.set('');
    this.success.set('');

    this.auth.resendVerification().subscribe({
      next: () => {
        this.resending.set(false);
        this.success.set(this.t.t('verify.codeSent'));
      },
      error: (err) => {
        this.resending.set(false);
        this.error.set(err?.error?.error || 'Failed to resend code.');
      }
    });
  }
}
