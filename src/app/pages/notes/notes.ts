import { Component, ChangeDetectionStrategy, signal, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotesService, Note } from '../../services/notes.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-notes',
  imports: [FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title"><iconify-icon icon="mdi:notebook-edit-outline" style="vertical-align: -0.125em"></iconify-icon> {{ t.t('notes.title') }}</h1>
          <p class="page-subtitle">{{ t.t('notes.subtitle') }}</p>
        </div>

        <div class="notes-toolbar">
          <button class="btn btn-accent" (click)="showForm.set(true)"><iconify-icon icon="mdi:plus" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>{{ t.t('notes.newNote') }}</button>
        </div>

        @if (showForm()) {
          <div class="note-form card">
            <h3>{{ editingNote() ? t.t('notes.editNote') : t.t('notes.newNote') }}</h3>
            <div class="form-group">
              <label class="form-label" for="noteTitle">{{ t.t('notes.noteTitle') }}</label>
              <input id="noteTitle" class="form-input" [(ngModel)]="formTitle" [placeholder]="t.t('notes.noteTitlePlaceholder')" />
            </div>
            <div class="form-group">
              <label class="form-label" for="noteContent">{{ t.t('notes.content') }}</label>
              <textarea id="noteContent" class="form-input form-textarea" [(ngModel)]="formContent" [placeholder]="t.t('notes.contentPlaceholder')" rows="5"></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">{{ t.t('notes.color') }}</label>
              <div class="color-picker">
                @for (color of colors; track color) {
                  <button
                    class="color-dot"
                    [style.background]="color"
                    [class.active]="formColor === color"
                    [attr.aria-label]="'Select color ' + color"
                    (click)="formColor = color"></button>
                }
              </div>
            </div>
            <div class="form-actions">
              <button class="btn btn-accent" (click)="saveNote()"><iconify-icon icon="mdi:content-save-outline" style="vertical-align: -0.125em; margin-right: 0.35rem"></iconify-icon>{{ editingNote() ? t.t('notes.update') : t.t('notes.save') }}</button>
              <button class="btn btn-ghost" (click)="cancelForm()"><iconify-icon icon="mdi:close" style="vertical-align: -0.125em; margin-right: 0.25rem"></iconify-icon>{{ t.t('notes.cancel') }}</button>
            </div>
          </div>
        }

        @if (loading()) {
          <div class="text-center" style="padding: 3rem">
            <p class="text-muted">{{ t.t('notes.loading') }}</p>
          </div>
        } @else if (notes().length === 0) {
          <div class="empty-state card">
            <span class="empty-icon"><iconify-icon icon="mdi:notebook-outline" width="40" height="40"></iconify-icon></span>
            <h3>{{ t.t('notes.noNotes') }}</h3>
            <p>{{ t.t('notes.noNotesDesc') }}</p>
          </div>
        } @else {
          <div class="notes-grid">
            @for (note of notes(); track note.id) {
              <article class="note-card card" [style.border-left-color]="note.color" [style.border-left-width]="'4px'">
                <div class="note-header">
                  <h3>{{ note.title }}</h3>
                  <div class="note-actions">
                    <button class="icon-btn" aria-label="Edit note" (click)="editNote(note)"><iconify-icon icon="mdi:pencil-outline" width="16" height="16"></iconify-icon></button>
                    <button class="icon-btn" aria-label="Delete note" (click)="deleteNote(note.id)"><iconify-icon icon="mdi:trash-can-outline" width="16" height="16"></iconify-icon></button>
                  </div>
                </div>
                <p class="note-content">{{ note.content }}</p>
                <span class="note-date">{{ formatDate(note.updatedAt) }}</span>
              </article>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    .notes-toolbar {
      margin-bottom: 1.5rem;
    }

    .note-form {
      padding: 1.5rem;
      margin-bottom: 2rem;
    }
    .note-form h3 {
      color: var(--color-primary);
      margin-bottom: 1rem;
    }
    .form-textarea {
      resize: vertical;
      min-height: 100px;
    }
    .color-picker {
      display: flex;
      gap: 0.5rem;
    }
    .color-dot {
      width: 30px;
      height: 30px;
      border-radius: var(--radius-full);
      border: 2px solid transparent;
      cursor: pointer;
      transition: all var(--transition-fast);
    }
    .color-dot.active, .color-dot:hover {
      border-color: var(--color-primary);
      transform: scale(1.15);
    }
    .form-actions {
      display: flex;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .empty-state {
      text-align: center;
      padding: 3rem;
    }
    .empty-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
    .empty-state h3 { color: var(--color-primary); margin-bottom: 0.5rem; }
    .empty-state p { color: var(--color-text-muted); }

    .notes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
    }

    .note-card {
      padding: 1.25rem;
      transition: all var(--transition-normal);
    }
    .note-card:hover { box-shadow: var(--shadow-md); }

    .note-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.5rem;
    }
    .note-header h3 {
      color: var(--color-primary);
      font-size: 1rem;
    }
    .note-actions {
      display: flex;
      gap: 0.25rem;
    }
    .icon-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.2rem;
      font-size: 0.9rem;
      opacity: 0.5;
      transition: opacity var(--transition-fast);
    }
    .icon-btn:hover { opacity: 1; }

    .note-content {
      font-size: 0.9rem;
      color: var(--color-text-light);
      line-height: 1.6;
      margin-bottom: 0.75rem;
      white-space: pre-wrap;
    }
    .note-date {
      font-size: 0.75rem;
      color: var(--color-text-muted);
    }

    @media (max-width: 640px) {
      .notes-grid { grid-template-columns: 1fr; }
    }
  `
})
export class NotesPage implements OnInit {
  private readonly notesService = inject(NotesService);
  protected readonly t = inject(LanguageService);

  protected readonly notes = signal<Note[]>([]);
  protected readonly loading = signal(true);
  protected readonly showForm = signal(false);
  protected readonly editingNote = signal<Note | null>(null);

  protected formTitle = '';
  protected formContent = '';
  protected formColor = '#e07a5f';

  protected readonly colors = ['#e07a5f', '#81b29a', '#f4d35e', '#6c8ebf', '#b5838d', '#9b89b3'];

  ngOnInit() {
    this.loadNotes();
  }

  saveNote() {
    if (!this.formTitle.trim() || !this.formContent.trim()) return;

    const editing = this.editingNote();
    if (editing) {
      this.notesService.update(editing.id, {
        title: this.formTitle,
        content: this.formContent,
        color: this.formColor
      }).subscribe({
        next: () => { this.cancelForm(); this.loadNotes(); },
        error: () => {}
      });
    } else {
      this.notesService.create({
        title: this.formTitle,
        content: this.formContent,
        color: this.formColor
      }).subscribe({
        next: () => { this.cancelForm(); this.loadNotes(); },
        error: () => {}
      });
    }
  }

  editNote(note: Note) {
    this.editingNote.set(note);
    this.formTitle = note.title;
    this.formContent = note.content;
    this.formColor = note.color || '#e07a5f';
    this.showForm.set(true);
  }

  deleteNote(id: number) {
    if (!confirm(this.t.t('notes.confirmDelete'))) return;
    this.notesService.delete(id).subscribe({
      next: () => this.loadNotes(),
      error: () => {}
    });
  }

  cancelForm() {
    this.showForm.set(false);
    this.editingNote.set(null);
    this.formTitle = '';
    this.formContent = '';
    this.formColor = '#e07a5f';
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('ka-GE', {
      day: 'numeric', month: 'short', year: 'numeric'
    });
  }

  private loadNotes() {
    this.notesService.getAll().subscribe({
      next: (notes: Note[]) => {
        this.notes.set(notes);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
}
