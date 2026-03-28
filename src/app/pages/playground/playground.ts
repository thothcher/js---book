import { Component, ChangeDetectionStrategy, inject, signal, OnInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-playground',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="pg-header">
          <div class="pg-title-row">
            <iconify-icon icon="mdi:code-braces-box" width="32" height="32" class="pg-icon" aria-hidden="true"></iconify-icon>
            <div>
              <h1 class="page-title">{{ t.t('playground.title') }}</h1>
              <p class="pg-sub">{{ t.t('playground.subtitle') }}</p>
            </div>
          </div>
          <div class="pg-actions-top">
            <select class="pg-select" (change)="loadExample($any($event.target).value)" aria-label="Load example">
              <option value="">{{ t.t('playground.examples') }}</option>
              @for (ex of examples; track $index) {
                <option [value]="$index">{{ ex.title }}</option>
              }
            </select>
          </div>
        </div>

        <div class="pg-grid">
          <div class="pg-editor-panel">
            <div class="pg-panel-bar">
              <span class="pg-bar-label">
                <iconify-icon icon="mdi:file-code-outline" width="14" height="14" aria-hidden="true"></iconify-icon>
                script.js
              </span>
              <div class="pg-bar-actions">
                <button class="pg-btn pg-btn-clear" (click)="clearEditor()" type="button">
                  <iconify-icon icon="mdi:delete-outline" width="14" height="14" aria-hidden="true"></iconify-icon>
                  {{ t.t('playground.clear') }}
                </button>
                <button class="pg-btn pg-btn-run" (click)="runCode()" type="button">
                  <iconify-icon icon="mdi:play" width="16" height="16" aria-hidden="true"></iconify-icon>
                  {{ t.t('playground.run') }}
                </button>
              </div>
            </div>
            <div class="pg-editor-wrap">
              <textarea
                #codeEditor
                class="pg-textarea"
                [value]="code()"
                (input)="code.set($any($event.target).value)"
                (keydown)="onKeyDown($event)"
                spellcheck="false"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
              ></textarea>
            </div>
          </div>

          <div class="pg-output-panel">
            <div class="pg-panel-bar">
              <span class="pg-bar-label">
                <iconify-icon icon="mdi:console" width="14" height="14" aria-hidden="true"></iconify-icon>
                {{ t.t('playground.console') }}
              </span>
              <button class="pg-btn" (click)="clearOutput()" type="button">
                <iconify-icon icon="mdi:notification-clear-all" width="14" height="14" aria-hidden="true"></iconify-icon>
                {{ t.t('playground.clear') }}
              </button>
            </div>
            <div class="pg-console">
              @if (output().length === 0 && !hasError()) {
                <div class="pg-console-empty">
                  <iconify-icon icon="mdi:console-line" width="24" height="24" aria-hidden="true"></iconify-icon>
                  <span>{{ t.t('playground.emptyConsole') }}</span>
                </div>
              }
              @for (line of output(); track $index) {
                <div class="pg-console-line" [class.pg-error]="line.type === 'error'" [class.pg-warn]="line.type === 'warn'">
                  <span class="pg-line-prefix">{{ line.type === 'error' ? '✕' : line.type === 'warn' ? '⚠' : '›' }}</span>
                  <span class="pg-line-text">{{ line.text }}</span>
                </div>
              }
              @if (hasError()) {
                <div class="pg-console-line pg-error">
                  <span class="pg-line-prefix">✕</span>
                  <span class="pg-line-text">{{ errorMsg() }}</span>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="pg-tips">
          <div class="pg-tip">
            <iconify-icon icon="mdi:keyboard" width="16" height="16" aria-hidden="true"></iconify-icon>
            <span><strong>Ctrl+Enter</strong> — {{ t.t('playground.runShortcut') }}</span>
          </div>
          <div class="pg-tip">
            <iconify-icon icon="mdi:tab" width="16" height="16" aria-hidden="true"></iconify-icon>
            <span><strong>Tab</strong> — {{ t.t('playground.tabShortcut') }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .page { padding: 2rem 0 4rem; }
    .pg-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    .pg-title-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .pg-icon { color: var(--color-accent); }
    .page-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary);
    }
    .pg-sub {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      margin-top: 0.1rem;
    }
    .pg-select {
      padding: 0.45rem 0.75rem;
      border-radius: var(--radius-sm);
      border: 1px solid var(--color-border);
      background: var(--color-surface);
      font-family: inherit;
      font-size: 0.85rem;
      color: var(--color-text);
      cursor: pointer;
    }
    .pg-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      min-height: 420px;
    }
    .pg-editor-panel, .pg-output-panel {
      display: flex;
      flex-direction: column;
      border-radius: var(--radius-lg);
      overflow: hidden;
      border: 1px solid var(--color-border);
      background: var(--color-surface);
    }
    .pg-panel-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 0.75rem;
      background: var(--color-code-bg);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .pg-bar-label {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.78rem;
      font-weight: 600;
      color: rgba(255,255,255,0.6);
      font-family: 'JetBrains Mono', monospace;
    }
    .pg-bar-actions {
      display: flex;
      gap: 0.5rem;
    }
    .pg-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      padding: 0.3rem 0.6rem;
      border-radius: var(--radius-sm);
      border: 1px solid rgba(255,255,255,0.1);
      background: transparent;
      color: rgba(255,255,255,0.6);
      font-size: 0.75rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    .pg-btn:hover {
      background: rgba(255,255,255,0.08);
      color: #fff;
    }
    .pg-btn-run {
      background: var(--color-accent);
      color: #fff;
      border-color: var(--color-accent);
    }
    .pg-btn-run:hover {
      background: var(--color-accent-light);
      border-color: var(--color-accent-light);
      color: #fff;
    }
    .pg-editor-wrap {
      flex: 1;
      display: flex;
    }
    .pg-textarea {
      flex: 1;
      padding: 1rem 1.25rem;
      background: var(--color-code-bg);
      color: var(--color-code-text);
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.85rem;
      line-height: 1.7;
      border: none;
      outline: none;
      resize: none;
      min-height: 350px;
      tab-size: 2;
    }
    .pg-textarea::placeholder {
      color: rgba(255,255,255,0.25);
    }
    .pg-console {
      flex: 1;
      padding: 0.75rem 1rem;
      background: #0d1520;
      overflow-y: auto;
      min-height: 350px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
    }
    .pg-console-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      height: 100%;
      color: rgba(255,255,255,0.2);
      font-size: 0.85rem;
      min-height: 300px;
    }
    .pg-console-line {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      padding: 0.25rem 0;
      color: var(--color-code-text);
      line-height: 1.6;
      border-bottom: 1px solid rgba(255,255,255,0.03);
    }
    .pg-console-line.pg-error {
      color: #f87171;
    }
    .pg-console-line.pg-warn {
      color: #fbbf24;
    }
    .pg-line-prefix {
      flex-shrink: 0;
      width: 1rem;
      text-align: center;
      opacity: 0.5;
    }
    .pg-line-text {
      white-space: pre-wrap;
      word-break: break-word;
    }
    .pg-tips {
      display: flex;
      gap: 1.5rem;
      margin-top: 1rem;
      flex-wrap: wrap;
    }
    .pg-tip {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.78rem;
      color: var(--color-text-muted);
    }
    .pg-tip strong {
      color: var(--color-text-light);
    }

    @media (max-width: 768px) {
      .pg-grid { grid-template-columns: 1fr; }
      .pg-textarea, .pg-console { min-height: 250px; }
    }
  `
})
export class PlaygroundPage implements OnInit {
  protected readonly t = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);

  protected readonly code = signal(`// Write your JavaScript code here\nconsole.log("Hello, STEP IT Academy!");\n`);
  protected readonly output = signal<{ text: string; type: 'log' | 'error' | 'warn' }[]>([]);
  protected readonly hasError = signal(false);
  protected readonly errorMsg = signal('');

  private readonly editorRef = viewChild<ElementRef<HTMLTextAreaElement>>('codeEditor');

  readonly examples = [
    { title: 'Hello World', code: `console.log("Hello, World!");` },
    { title: 'Variables & Types', code: `let name = "JavaScript";\nlet version = 2025;\nlet isAwesome = true;\n\nconsole.log(typeof name);    // "string"\nconsole.log(typeof version); // "number"\nconsole.log(typeof isAwesome); // "boolean"` },
    { title: 'Array Methods', code: `let fruits = ["apple", "banana", "cherry", "date"];\n\n// Map\nlet upper = fruits.map(f => f.toUpperCase());\nconsole.log(upper);\n\n// Filter\nlet long = fruits.filter(f => f.length > 5);\nconsole.log(long);\n\n// Reduce\nlet total = fruits.reduce((sum, f) => sum + f.length, 0);\nconsole.log("Total chars:", total);` },
    { title: 'Objects & Destructuring', code: `let student = {\n  name: "Nino",\n  age: 20,\n  courses: ["JS", "HTML", "CSS"]\n};\n\nlet { name, courses } = student;\nconsole.log(name);\nconsole.log(courses.join(", "));` },
    { title: 'Async / Await', code: `async function fetchData() {\n  try {\n    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");\n    let data = await res.json();\n    console.log("Title:", data.title);\n    console.log("Completed:", data.completed);\n  } catch (err) {\n    console.log("Error:", err.message);\n  }\n}\n\nfetchData();` },
    { title: 'Classes & Inheritance', code: `class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return this.name + " makes a sound";\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    return this.name + " barks!";\n  }\n}\n\nlet d = new Dog("Rex");\nconsole.log(d.speak());` },
    { title: 'FizzBuzz', code: `for (let i = 1; i <= 20; i++) {\n  if (i % 15 === 0) console.log(i + ": FizzBuzz");\n  else if (i % 3 === 0) console.log(i + ": Fizz");\n  else if (i % 5 === 0) console.log(i + ": Buzz");\n  else console.log(i);\n}` },
  ];

  ngOnInit() {
    const codeParam = this.route.snapshot.queryParamMap.get('code');
    if (codeParam) {
      this.code.set(codeParam);
    }
  }

  loadExample(indexStr: string) {
    const idx = parseInt(indexStr, 10);
    if (!isNaN(idx) && this.examples[idx]) {
      this.code.set(this.examples[idx].code);
      this.clearOutput();
    }
  }

  runCode() {
    this.output.set([]);
    this.hasError.set(false);
    this.errorMsg.set('');

    const logs: { text: string; type: 'log' | 'error' | 'warn' }[] = [];

    const formatValue = (val: unknown): string => {
      if (val === undefined) return 'undefined';
      if (val === null) return 'null';
      if (typeof val === 'object') {
        try { return JSON.stringify(val, null, 2); } catch { return String(val); }
      }
      return String(val);
    };

    const mockConsole = {
      log: (...args: unknown[]) => logs.push({ text: args.map(formatValue).join(' '), type: 'log' }),
      error: (...args: unknown[]) => logs.push({ text: args.map(formatValue).join(' '), type: 'error' }),
      warn: (...args: unknown[]) => logs.push({ text: args.map(formatValue).join(' '), type: 'warn' }),
      info: (...args: unknown[]) => logs.push({ text: args.map(formatValue).join(' '), type: 'log' }),
      clear: () => { logs.length = 0; },
    };

    try {
      const userCode = this.code();
      // Check for potentially dangerous patterns
      const blocked = /document\.(cookie|write)|eval\s*\(|Function\s*\(|window\.(location|open)|import\s*\(/;
      if (blocked.test(userCode)) {
        this.hasError.set(true);
        this.errorMsg.set('Blocked: This code uses restricted browser APIs. Use console.log() to see output.');
        return;
      }

      const fn = new Function('console', 'fetch', userCode);
      const result = fn(mockConsole, fetch.bind(window));

      // Handle async results
      if (result instanceof Promise) {
        result.then(() => {
          this.output.set([...logs]);
        }).catch((err: Error) => {
          this.output.set([...logs]);
          this.hasError.set(true);
          this.errorMsg.set(err.message || String(err));
        });
      } else {
        this.output.set(logs);
      }
    } catch (err: unknown) {
      this.output.set(logs);
      this.hasError.set(true);
      this.errorMsg.set(err instanceof Error ? err.message : String(err));
    }
  }

  clearEditor() {
    this.code.set('');
    this.clearOutput();
    const el = this.editorRef()?.nativeElement;
    if (el) el.focus();
  }

  clearOutput() {
    this.output.set([]);
    this.hasError.set(false);
    this.errorMsg.set('');
  }

  onKeyDown(event: KeyboardEvent) {
    // Ctrl/Cmd + Enter -> Run
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      this.runCode();
      return;
    }

    // Tab -> indent
    if (event.key === 'Tab') {
      event.preventDefault();
      const textarea = event.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;
      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      this.code.set(newValue);
      // Restore cursor position
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      });
    }
  }
}
