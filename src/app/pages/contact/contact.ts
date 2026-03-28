import { Component, ChangeDetectionStrategy, signal, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">
            <iconify-icon icon="mdi:email-outline" style="vertical-align: -0.125em"></iconify-icon>
            {{ t.t('contact.title') }}
          </h1>
          <p class="page-subtitle">{{ t.t('contact.subtitle') }}</p>
        </div>

        <div class="contact-wrapper">
          <form class="contact-form card" [formGroup]="form" (ngSubmit)="onSubmit()">
            @if (successMsg()) {
              <div class="alert alert-success">
                <iconify-icon icon="mdi:check-circle-outline" width="18" height="18" style="vertical-align: -0.2em"></iconify-icon>
                {{ successMsg() }}
              </div>
            }
            @if (errorMsg()) {
              <div class="alert alert-error">
                <iconify-icon icon="mdi:alert-circle-outline" width="18" height="18" style="vertical-align: -0.2em"></iconify-icon>
                {{ errorMsg() }}
              </div>
            }

            <div class="form-group">
              <label for="username">
                <iconify-icon icon="mdi:account-outline" width="14" height="14" style="vertical-align: -0.15em"></iconify-icon>
                {{ t.t('contact.username') }}
              </label>
              <input id="username" type="text" formControlName="username" [placeholder]="t.t('contact.usernamePlaceholder')" autocomplete="name" />
              @if (form.get('username')?.touched && form.get('username')?.hasError('required')) {
                <span class="field-error">{{ t.t('contact.usernameRequired') }}</span>
              }
            </div>

            <div class="form-group">
              <label for="email">
                <iconify-icon icon="mdi:email-outline" width="14" height="14" style="vertical-align: -0.15em"></iconify-icon>
                {{ t.t('contact.email') }}
              </label>
              <input id="email" type="email" formControlName="email" [placeholder]="t.t('contact.emailPlaceholder')" autocomplete="email" />
              @if (form.get('email')?.touched && form.get('email')?.hasError('required')) {
                <span class="field-error">{{ t.t('contact.emailRequired') }}</span>
              }
              @if (form.get('email')?.touched && form.get('email')?.hasError('email')) {
                <span class="field-error">{{ t.t('contact.emailInvalid') }}</span>
              }
            </div>

            <div class="form-group">
              <label for="message">
                <iconify-icon icon="mdi:message-text-outline" width="14" height="14" style="vertical-align: -0.15em"></iconify-icon>
                {{ t.t('contact.message') }}
              </label>
              <textarea id="message" formControlName="message" rows="6" [placeholder]="t.t('contact.messagePlaceholder')"></textarea>
              @if (form.get('message')?.touched && form.get('message')?.hasError('required')) {
                <span class="field-error">{{ t.t('contact.messageRequired') }}</span>
              }
              @if (form.get('message')?.touched && form.get('message')?.hasError('minlength')) {
                <span class="field-error">{{ t.t('contact.messageMinLength') }}</span>
              }
            </div>

            <button type="submit" class="btn btn-accent btn-full" [disabled]="sending()">
              @if (sending()) {
                <iconify-icon icon="mdi:loading" width="16" height="16" style="vertical-align: -0.2em; animation: spin 1s linear infinite"></iconify-icon>
                {{ t.t('contact.sending') }}
              } @else {
                <iconify-icon icon="mdi:send" width="16" height="16" style="vertical-align: -0.2em"></iconify-icon>
                {{ t.t('contact.sendMessage') }}
              }
            </button>
          </form>

          <aside class="contact-info card">
            <h3>
              <iconify-icon icon="mdi:information-outline" width="18" height="18" style="vertical-align: -0.15em"></iconify-icon>
              {{ t.t('contact.getInTouch') }}
            </h3>
            <div class="info-item">
              <iconify-icon icon="mdi:clock-outline" width="20" height="20"></iconify-icon>
              <div>
                <strong>{{ t.t('contact.responseTime') }}</strong>
                <span>{{ t.t('contact.within24') }}</span>
              </div>
            </div>
            <div class="info-item">
              <iconify-icon icon="mdi:school-outline" width="20" height="20"></iconify-icon>
              <div>
                <strong>{{ t.t('contact.about') }}</strong>
                <span>{{ t.t('contact.aboutDesc') }}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  `,
  styles: `
    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 2rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .contact-form {
      padding: 2rem;
    }

    .form-group {
      margin-bottom: 1.25rem;
    }
    .form-group label {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--color-text);
      margin-bottom: 0.4rem;
    }
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.65rem 0.85rem;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      font-size: 0.9rem;
      font-family: inherit;
      background: var(--color-bg);
      color: var(--color-text);
      transition: border-color var(--transition-fast);
      box-sizing: border-box;
    }
    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--color-accent);
      box-shadow: 0 0 0 3px rgba(192, 57, 43, 0.05);
    }
    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .field-error {
      display: block;
      color: var(--color-accent);
      font-size: 0.8rem;
      margin-top: 0.3rem;
    }

    .btn-full {
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      font-size: 0.95rem;
      margin-top: 0.5rem;
    }
    .btn-full:disabled {
      opacity: 0.65;
      cursor: not-allowed;
    }

    .alert {
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      font-size: 0.9rem;
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .alert-success {
      background: #e8f5e9;
      color: #2e7d32;
      border: 1px solid #a5d6a7;
    }
    .alert-error {
      background: #fbe9e7;
      color: #c62828;
      border: 1px solid #ef9a9a;
    }

    .contact-info {
      padding: 1.75rem;
      height: fit-content;
    }
    .contact-info h3 {
      font-size: 1.1rem;
      color: var(--color-primary);
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .info-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
      color: var(--color-primary);
    }
    .info-item:last-child { margin-bottom: 0; }
    .info-item div {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;
    }
    .info-item strong {
      font-size: 0.85rem;
      color: var(--color-text);
    }
    .info-item span {
      font-size: 0.85rem;
      color: var(--color-text-light);
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
      .contact-wrapper {
        grid-template-columns: 1fr;
      }
    }
  `
})
export class ContactPage {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  protected readonly t = inject(LanguageService);

  protected readonly sending = signal(false);
  protected readonly successMsg = signal('');
  protected readonly errorMsg = signal('');

  protected readonly form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.successMsg.set('');
    this.errorMsg.set('');

    const payload = this.form.getRawValue();
    this.http.post('https://formspree.io/f/meepjnan', payload)
      .subscribe({
        next: () => {
          this.successMsg.set(this.t.t('contact.successMsg'));
          this.form.reset();
          this.sending.set(false);
          setTimeout(() => this.router.navigate(['/']), 2000);
        },
        error: () => {
          this.errorMsg.set(this.t.t('contact.errorMsg'));
          this.sending.set(false);
        }
      });
  }
}
