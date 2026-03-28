import { Component, ChangeDetectionStrategy, inject, signal, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero section with background image -->
    <section class="hero">
      <div class="hero-overlay" aria-hidden="true"></div>
      <div class="container hero-inner">
        <div class="hero-content">
          <span class="hero-badge">
            <iconify-icon icon="mdi:school-outline" width="14" height="14" aria-hidden="true"></iconify-icon>
            {{ t.t('home.badge') }}
          </span>
          <h1 class="hero-title">{{ t.t('home.heroTitle') }}</h1>
          <p class="hero-sub">{{ t.t('home.heroSub') }}</p>
          <p class="hero-desc">{{ t.t('home.desc') }}</p>
          <div class="hero-actions">
            <a routerLink="/register" class="btn-hero-primary">
              {{ t.t('home.getStarted') }}
              <iconify-icon icon="mdi:arrow-right" width="18" height="18" aria-hidden="true"></iconify-icon>
            </a>
            <a routerLink="/chapters" class="btn-hero-secondary">{{ t.t('home.explore') }}</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="hero-stat-num">21</span>
              <span class="hero-stat-label">{{ t.t('home.chapters') }}</span>
            </div>
            <div class="hero-stat-divider" aria-hidden="true"></div>
            <div class="hero-stat">
              <span class="hero-stat-num">210+</span>
              <span class="hero-stat-label">{{ t.t('home.quizQuestions') }}</span>
            </div>
            <div class="hero-stat-divider" aria-hidden="true"></div>
            <div class="hero-stat">
              <span class="hero-stat-num">150+</span>
              <span class="hero-stat-label">{{ t.t('home.memoryCards') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust strip -->
    <section class="trust-strip">
      <div class="container trust-inner">
        <p class="trust-text">{{ t.t('home.trustText') }}</p>
        <div class="trust-icons">
          <iconify-icon icon="mdi:lock-outline" width="20" height="20" aria-hidden="true"></iconify-icon>
          <span>{{ t.t('home.trustSecure') }}</span>
          <iconify-icon icon="mdi:cellphone" width="20" height="20" aria-hidden="true"></iconify-icon>
          <span>{{ t.t('home.trustMobile') }}</span>
        </div>
      </div>
    </section>

    <!-- Features section with images -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">{{ t.t('home.featuresBadge') }}</span>
          <h2 class="section-title">{{ t.t('home.sectionTitle') }}</h2>
          <p class="section-sub">{{ t.t('home.sectionSub') }}</p>
        </div>

        <div class="features-grid">
          <a routerLink="/chapters" class="feature-card feature-wide">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1333&auto=format&fit=crop" alt="" class="feature-img" loading="lazy">
            <div class="feature-body">
              <span class="feature-tag">{{ t.t('home.core') }}</span>
              <h3>{{ t.t('home.chapterRoadmap') }}</h3>
              <p>{{ t.t('home.chapterRoadmapDesc') }}</p>
            </div>
          </a>
          <a routerLink="/quiz/1" class="feature-card">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=240&fit=crop&auto=format" alt="" class="feature-img" loading="lazy">
            <div class="feature-body">
              <span class="feature-tag">{{ t.t('home.practice') }}</span>
              <h3>{{ t.t('home.interactiveQuizzes') }}</h3>
              <p>{{ t.t('home.interactiveQuizzesDesc') }}</p>
            </div>
          </a>
          <a routerLink="/memory-game" class="feature-card">
            <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&h=240&fit=crop&auto=format" alt="" class="feature-img" loading="lazy">
            <div class="feature-body">
              <span class="feature-tag">{{ t.t('home.fun') }}</span>
              <h3>{{ t.t('home.memoryCardGame') }}</h3>
              <p>{{ t.t('home.memoryCardGameDesc') }}</p>
            </div>
          </a>
          <a routerLink="/facts" class="feature-card">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop&auto=format" alt="" class="feature-img" loading="lazy">
            <div class="feature-body">
              <span class="feature-tag">{{ t.t('home.discoverTag') }}</span>
              <h3>{{ t.t('home.fascinatingFacts') }}</h3>
              <p>{{ t.t('home.fascinatingFactsDesc') }}</p>
            </div>
          </a>
          <a routerLink="/psychologists" class="feature-card">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=240&fit=crop&auto=format" alt="" class="feature-img" loading="lazy">
            <div class="feature-body">
              <span class="feature-tag">{{ t.t('home.learnTag') }}</span>
              <h3>{{ t.t('home.famousPsychologists') }}</h3>
              <p>{{ t.t('home.famousPsychologistsDesc') }}</p>
            </div>
          </a>
          <a routerLink="/playground" class="feature-card">
            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=240&fit=crop&auto=format" alt="" class="feature-img" loading="lazy">
            <div class="feature-body">
              <span class="feature-tag">{{ t.t('home.codeTag') }}</span>
              <h3>{{ t.t('home.jsPlayground') }}</h3>
              <p>{{ t.t('home.jsPlaygroundDesc') }}</p>
            </div>
          </a>
          <a routerLink="/stories" class="feature-card feature-wide">
            <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=340&fit=crop&auto=format" alt="" class="feature-img" loading="lazy">
            <div class="feature-body">
              <span class="feature-tag">{{ t.t('home.exploreTag') }}</span>
              <h3>{{ t.t('home.psychologyStories') }}</h3>
              <p>{{ t.t('home.psychologyStoriesDesc') }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="how-it-works">
      <div class="container">
        <div class="section-header">
          <span class="section-badge">{{ t.t('home.howBadge') }}</span>
          <h2 class="section-title">{{ t.t('home.howTitle') }}</h2>
        </div>
        <div class="steps">
          <div class="step">
            <div class="step-num" aria-hidden="true">01</div>
            <h3>{{ t.t('home.step1Title') }}</h3>
            <p>{{ t.t('home.step1Desc') }}</p>
          </div>
          <div class="step-arrow" aria-hidden="true">
            <iconify-icon icon="mdi:chevron-right" width="24" height="24"></iconify-icon>
          </div>
          <div class="step">
            <div class="step-num" aria-hidden="true">02</div>
            <h3>{{ t.t('home.step2Title') }}</h3>
            <p>{{ t.t('home.step2Desc') }}</p>
          </div>
          <div class="step-arrow" aria-hidden="true">
            <iconify-icon icon="mdi:chevron-right" width="24" height="24"></iconify-icon>
          </div>
          <div class="step">
            <div class="step-num" aria-hidden="true">03</div>
            <h3>{{ t.t('home.step3Title') }}</h3>
            <p>{{ t.t('home.step3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quotes carousel -->
    <section class="quote-section">
      <div class="container">
        <div class="quotes-carousel">
          <blockquote class="quote-block">
            <iconify-icon icon="mdi:format-quote-open" width="36" height="36" class="quote-icon" aria-hidden="true"></iconify-icon>
            <p class="quote-text">{{ quotes[activeQuote()].text }}</p>
            <cite class="quote-author">— {{ quotes[activeQuote()].author }}</cite>
          </blockquote>
          <div class="quote-dots" role="tablist" aria-label="Quote navigation">
            @for (q of quotes; track $index) {
              <button
                class="quote-dot"
                [class.active]="$index === activeQuote()"
                (click)="goToQuote($index)"
                role="tab"
                [attr.aria-selected]="$index === activeQuote()"
                [attr.aria-label]="'Quote ' + ($index + 1)">
              </button>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Survey section -->
    <section class="survey-section">
      <div class="container">
        <div class="survey-card">
          <iconify-icon icon="mdi:comment-question-outline" width="32" height="32" class="survey-icon" aria-hidden="true"></iconify-icon>
          <h3>{{ t.t('home.surveyTitle') }}</h3>
          <p class="survey-desc">{{ t.t('home.surveyDesc') }}</p>
          @if (!surveyVoted()) {
            <div class="survey-form">
              <textarea
                class="survey-input"
                [placeholder]="t.t('home.surveyPlaceholder')"
                rows="3"
                [value]="surveyText()"
                (input)="surveyText.set($any($event.target).value)"
                maxlength="500"></textarea>
              <button class="survey-send" [disabled]="!surveyText().trim()" (click)="vote(surveyText())">
                <iconify-icon icon="mdi:send" width="18" height="18" aria-hidden="true"></iconify-icon>
                {{ t.t('home.surveySend') }}
              </button>
            </div>
          } @else {
            <div class="survey-thanks">
              <iconify-icon icon="mdi:check-circle-outline" width="24" height="24" aria-hidden="true"></iconify-icon>
              <span>{{ t.t('home.surveyThanks') }}</span>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA section -->
    <section class="cta">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2>{{ t.t('home.ctaTitle') }}</h2>
            <p>{{ t.t('home.ctaDesc') }}</p>
            <div class="cta-actions">
              <a routerLink="/register" class="btn btn-accent">{{ t.t('home.startFree') }}</a>
              <a routerLink="/faq" class="btn btn-ghost cta-faq">{{ t.t('home.readFaq') }}</a>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=480&h=320&fit=crop&auto=format" alt="" class="cta-img" loading="lazy">
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      position: relative;
      min-height: 560px;
      display: flex;
      align-items: center;
      background: url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=900&fit=crop&auto=format&q=80') center/cover no-repeat;
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.85) 60%, rgba(10,22,40,0.65) 100%);
    }
    .hero-inner {
      position: relative;
      z-index: 1;
      padding: 5rem 1.5rem;
    }
    .hero-content {
      max-width: 640px;
    }
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(59,130,246,0.15);
      backdrop-filter: blur(4px);
      color: var(--color-accent-light);
      padding: 0.4rem 1rem;
      border-radius: var(--radius-full);
      font-size: 0.8rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      border: 1px solid rgba(59,130,246,0.2);
    }
    .hero-title {
      font-size: clamp(2.2rem, 5vw, 3.2rem);
      font-weight: 800;
      color: #fff;
      line-height: 1.12;
      letter-spacing: -0.03em;
    }
    .hero-sub {
      font-size: 1.15rem;
      color: var(--color-accent-light);
      font-weight: 600;
      margin-top: 0.6rem;
    }
    .hero-desc {
      color: rgba(255,255,255,0.7);
      font-size: 1.05rem;
      margin-top: 1rem;
      max-width: 520px;
      line-height: 1.7;
    }
    .hero-actions {
      display: flex;
      gap: 0.75rem;
      margin-top: 2rem;
    }
    .btn-hero-primary {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--color-accent);
      color: #fff;
      padding: 0.85rem 1.75rem;
      border-radius: var(--radius-md);
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all var(--transition-normal);
    }
    .btn-hero-primary:hover {
      background: var(--color-accent-light);
      transform: translateY(-1px);
      box-shadow: 0 6px 24px rgba(59,130,246,0.35);
      color: #fff;
    }
    .btn-hero-secondary {
      display: inline-flex;
      align-items: center;
      padding: 0.85rem 1.75rem;
      border-radius: var(--radius-md);
      border: 1px solid rgba(255,255,255,0.25);
      color: #fff;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      transition: all var(--transition-normal);
    }
    .btn-hero-secondary:hover {
      background: rgba(255,255,255,0.08);
      border-color: rgba(255,255,255,0.4);
      color: #fff;
    }
    .hero-stats {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      margin-top: 2.5rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .hero-stat-num {
      display: block;
      font-size: 1.6rem;
      font-weight: 800;
      color: #fff;
    }
    .hero-stat-label {
      font-size: 0.78rem;
      color: rgba(255,255,255,0.5);
      text-transform: uppercase;
      letter-spacing: 0.06em;
      font-weight: 500;
    }
    .hero-stat-divider {
      width: 1px;
      height: 36px;
      background: rgba(255,255,255,0.12);
    }

    /* Trust strip */
    .trust-strip {
      background: var(--color-surface);
      border-bottom: 1px solid var(--color-border-light);
      padding: 1rem 0;
    }
    .trust-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .trust-text {
      font-size: 0.82rem;
      color: var(--color-text-muted);
      font-weight: 500;
    }
    .trust-icons {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--color-text-muted);
      font-size: 0.82rem;
      font-weight: 500;
    }
    .trust-icons iconify-icon { color: var(--color-secondary); }
    .trust-icons span { margin-right: 1rem; }

    /* Section headers */
    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    .section-badge {
      display: inline-block;
      background: rgba(59,130,246,0.1);
      color: var(--color-accent);
      padding: 0.3rem 0.9rem;
      border-radius: var(--radius-full);
      font-size: 0.78rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-bottom: 0.75rem;
    }
    .section-title {
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      font-weight: 800;
      color: var(--color-primary);
      letter-spacing: -0.02em;
    }
    .section-sub {
      color: var(--color-text-light);
      font-size: 1rem;
      margin-top: 0.5rem;
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }

    /* Features */
    .features { padding: 5rem 0; }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
    .feature-wide { grid-column: span 2; }
    .feature-card {
      display: flex;
      flex-direction: column;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      text-decoration: none;
      transition: all 0.3s ease;
    }
    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.08);
      border-color: transparent;
    }
    .feature-card:hover .feature-img { transform: scale(1.03); }
    .feature-img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .feature-wide .feature-img { height: 200px; }
    .feature-body { padding: 1.25rem 1.5rem 1.5rem; }
    .feature-tag {
      display: inline-block;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--color-accent);
      margin-bottom: 0.5rem;
    }
    .feature-card h3 {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 0.35rem;
    }
    .feature-card p {
      color: var(--color-text-light);
      font-size: 0.87rem;
      line-height: 1.6;
    }

    /* How it works */
    .how-it-works {
      padding: 4rem 0;
      background: var(--color-surface);
      border-top: 1px solid var(--color-border-light);
      border-bottom: 1px solid var(--color-border-light);
    }
    .steps {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 1.5rem;
    }
    .step { flex: 1; max-width: 280px; text-align: center; }
    .step-num {
      font-size: 2.5rem;
      font-weight: 900;
      color: var(--color-border);
      letter-spacing: -0.04em;
      line-height: 1;
      margin-bottom: 0.75rem;
    }
    .step h3 {
      font-size: 1rem;
      font-weight: 700;
      color: var(--color-primary);
      margin-bottom: 0.4rem;
    }
    .step p {
      font-size: 0.87rem;
      color: var(--color-text-light);
      line-height: 1.6;
    }
    .step-arrow {
      display: flex;
      align-items: center;
      color: var(--color-border);
      padding-top: 1.2rem;
    }

    /* Quote carousel */
    .quote-section { padding: 4rem 0; }
    .quotes-carousel {
      max-width: 680px;
      margin: 0 auto;
      text-align: center;
    }
    .quote-block {
      min-height: 160px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .quote-icon { color: var(--color-highlight); opacity: 0.5; }
    .quote-text {
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--color-primary);
      line-height: 1.6;
      font-style: italic;
      margin: 0.75rem 0;
      transition: opacity 0.4s ease;
    }
    .quote-author {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      font-style: normal;
      font-weight: 600;
    }
    .quote-dots {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1.5rem;
    }
    .quote-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid var(--color-border);
      background: none;
      cursor: pointer;
      padding: 0;
      transition: all var(--transition-normal);
    }
    .quote-dot:hover {
      border-color: var(--color-accent);
    }
    .quote-dot.active {
      background: var(--color-accent);
      border-color: var(--color-accent);
    }

    /* Survey */
    .survey-section { padding: 3rem 0; }
    .survey-card {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-xl);
      padding: 2.5rem;
      text-align: center;
      max-width: 640px;
      margin: 0 auto;
    }
    .survey-icon {
      color: var(--color-accent);
      margin-bottom: 0.75rem;
    }
    .survey-card h3 {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--color-primary);
      margin-bottom: 0.4rem;
    }
    .survey-desc {
      color: var(--color-text-light);
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }
    .survey-form {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      align-items: stretch;
    }
    .survey-input {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-md);
      background: var(--color-bg);
      color: var(--color-primary);
      font-size: 0.9rem;
      font-family: inherit;
      resize: vertical;
      min-height: 70px;
      transition: border-color var(--transition-normal);
    }
    .survey-input:focus {
      outline: none;
      border-color: var(--color-accent);
    }
    .survey-input::placeholder {
      color: var(--color-text-muted);
    }
    .survey-send {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      align-self: flex-end;
      padding: 0.6rem 1.5rem;
      border-radius: var(--radius-full);
      border: none;
      background: var(--color-accent);
      color: #fff;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all var(--transition-normal);
    }
    .survey-send:hover:not(:disabled) {
      background: var(--color-accent-light);
      transform: translateY(-1px);
    }
    .survey-send:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .survey-thanks {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(39,174,96,0.08);
      color: #27ae60;
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-full);
      font-weight: 600;
      font-size: 0.9rem;
    }

    /* CTA */
    .cta { padding: 3rem 0 5rem; }
    .cta-card {
      background: var(--color-primary);
      border-radius: var(--radius-xl);
      padding: 3.5rem;
      display: flex;
      align-items: center;
      gap: 3rem;
      overflow: hidden;
    }
    .cta-content { flex: 1; }
    .cta-card h2 {
      color: var(--color-text-on-primary);
      font-size: 1.8rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }
    .cta-card p {
      color: var(--color-text-on-primary);
      opacity: 0.7;
      margin: 0.75rem 0 1.5rem;
      font-size: 1rem;
      line-height: 1.6;
    }
    .cta-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .cta-faq {
      color: rgba(255,255,255,0.6) !important;
    }
    .cta-faq:hover {
      color: #fff !important;
      background: rgba(255,255,255,0.08);
    }
    .cta-img {
      width: 280px;
      height: 200px;
      object-fit: cover;
      border-radius: var(--radius-lg);
      flex-shrink: 0;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .hero-inner { padding: 3.5rem 1.5rem; }
      .hero-stats { gap: 1rem; }
      .trust-inner { justify-content: center; text-align: center; }
      .features-grid { grid-template-columns: 1fr; }
      .feature-wide { grid-column: span 1; }
      .steps { flex-direction: column; align-items: center; }
      .step-arrow { transform: rotate(90deg); padding: 0; }
      .cta-card {
        flex-direction: column;
        padding: 2.5rem 2rem;
        text-align: center;
      }
      .cta-actions { justify-content: center; }
      .cta-img { width: 100%; max-width: 360px; height: 180px; }
      .donation-card { flex-direction: column; padding: 2rem 1.5rem; text-align: center; }
      .donation-icon-wrap { display: none; }
      .iban { margin-left: 0; }
      .donation-account { flex-direction: column; align-items: stretch; text-align: center; }
      .survey-card { padding: 2rem 1.5rem; }
      .survey-options { gap: 0.5rem; }
    }
    @media (max-width: 640px) {
      .hero { min-height: 480px; }
      .hero-inner { padding: 3rem 1rem; }
      .hero-actions { flex-direction: column; }
      .btn-hero-primary, .btn-hero-secondary { width: 100%; justify-content: center; }
      .hero-stats { flex-wrap: wrap; gap: 1rem; }
      .hero-stat-divider { display: none; }
      .trust-icons { flex-wrap: wrap; justify-content: center; }
    }
  `
})
export class HomePage implements OnDestroy {
  protected readonly t = inject(LanguageService);
  private readonly http = inject(HttpClient);

  protected readonly surveyVoted = signal(!!localStorage.getItem('jslearn_survey_vote'));
  protected readonly surveyText = signal('');

  vote(text: string) {
    const idea = text.trim();
    localStorage.setItem('jslearn_survey_vote', idea);
    this.surveyVoted.set(true);
    this.http.post('https://formspree.io/f/meepjnan', { message: `[Feature Idea] ${idea}` }).subscribe();
  }

  protected readonly quotes = [
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
    { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
    { text: 'The best error message is the one that never shows up.', author: 'Thomas Fuchs' },
    { text: 'Code is like humor. When you have to explain it, it\'s bad.', author: 'Cory House' },
    { text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
    { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
  ];

  protected readonly activeQuote = signal(0);
  private timer: ReturnType<typeof setInterval> | null = null;

  constructor() {
    this.timer = setInterval(() => {
      this.activeQuote.update(i => (i + 1) % this.quotes.length);
    }, 6000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  goToQuote(index: number) {
    this.activeQuote.set(index);
    // Reset timer on manual navigation
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.activeQuote.update(i => (i + 1) % this.quotes.length);
    }, 6000);
  }
}
