import { Component, ChangeDetectionStrategy, signal, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminService, AdminUser, AdminStats } from '../../services/admin.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-admin',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="container">
        <div class="page-header">
          <h1 class="page-title"><iconify-icon icon="mdi:shield-account" style="vertical-align: -0.125em"></iconify-icon> {{ t.t('admin.title') }}</h1>
          <p class="page-subtitle">{{ t.t('admin.subtitle') }}</p>
        </div>

        <!-- Stats -->
        @if (stats(); as s) {
          <div class="stats-grid">
            <div class="stat-card card">
              <span class="stat-icon"><iconify-icon icon="mdi:account-multiple" width="20" height="20"></iconify-icon></span>
              <span class="stat-num">{{ s.totalUsers }}</span>
              <span class="stat-label">{{ t.t('admin.totalUsers') }}</span>
            </div>
            <div class="stat-card card">
              <span class="stat-icon"><iconify-icon icon="mdi:note-edit-outline" width="20" height="20"></iconify-icon></span>
              <span class="stat-num">{{ s.totalQuizzes }}</span>
              <span class="stat-label">{{ t.t('admin.quizzesTaken') }}</span>
            </div>
            <div class="stat-card card">
              <span class="stat-icon"><iconify-icon icon="mdi:clipboard-text-outline" width="20" height="20"></iconify-icon></span>
              <span class="stat-num">{{ s.totalNotes }}</span>
              <span class="stat-label">{{ t.t('admin.notesCreated') }}</span>
            </div>
          </div>
        }

        <!-- Users table -->
        <section class="users-section card">
          <h2>{{ t.t('admin.users') }}</h2>
          @if (loading()) {
            <p class="text-muted" style="padding: 1rem">{{ t.t('admin.loadingUsers') }}</p>
          } @else {
            <div class="table-wrapper">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>{{ t.t('admin.id') }}</th>
                    <th>{{ t.t('admin.username') }}</th>
                    <th>{{ t.t('admin.email') }}</th>
                    <th>{{ t.t('admin.role') }}</th>
                    <th>{{ t.t('admin.joined') }}</th>
                    <th>{{ t.t('admin.actions') }}</th>
                  </tr>
                </thead>
                <tbody>
                  @for (user of users(); track user.id) {
                    <tr>
                      <td>{{ user.id }}</td>
                      <td><strong>{{ user.displayName || user.username }}</strong></td>
                      <td>{{ user.email }}</td>
                      <td>
                        <span class="badge" [class.badge-accent]="user.role === 'admin'">{{ user.role }}</span>
                      </td>
                      <td>{{ formatDate(user.createdAt) }}</td>
                      <td>
                        <div class="action-btns">
                          @if (user.role !== 'admin') {
                            <button class="btn-sm btn-danger" (click)="deleteUser(user.id)"><iconify-icon icon="mdi:trash-can-outline" style="vertical-align: -0.125em; margin-right: 0.2rem"></iconify-icon>{{ t.t('admin.delete') }}</button>
                          }
                        </div>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </section>
      </div>
    </div>
  `,
  styles: `
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .stat-card {
      padding: 1.25rem;
      text-align: center;
    }
    .stat-icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
    .stat-num { display: block; font-size: 2rem; font-weight: 800; color: var(--color-primary); }
    .stat-label { font-size: 0.8rem; color: var(--color-text-muted); }

    .users-section {
      padding: 1.5rem;
    }
    .users-section h2 {
      color: var(--color-primary);
      font-size: 1.15rem;
      margin-bottom: 1rem;
    }

    .table-wrapper {
      overflow-x: auto;
    }
    .admin-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.9rem;
    }
    .admin-table th {
      text-align: left;
      padding: 0.75rem;
      background: var(--color-bg);
      color: var(--color-text-muted);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 2px solid var(--color-border);
    }
    .admin-table td {
      padding: 0.75rem;
      border-bottom: 1px solid var(--color-border);
      color: var(--color-text);
    }
    .admin-table tr:hover td {
      background: rgba(0,0,0,0.02);
    }

    .action-btns {
      display: flex;
      gap: 0.5rem;
    }
    .btn-sm {
      padding: 0.3rem 0.6rem;
      font-size: 0.75rem;
      border: none;
      border-radius: var(--radius-sm);
      cursor: pointer;
      font-weight: 600;
    }
    .btn-success { background: #d4edda; color: #155724; }
    .btn-success:hover { background: #c3e6cb; }
    .btn-warning { background: #fff3cd; color: #856404; }
    .btn-warning:hover { background: #ffeeba; }
    .btn-danger { background: #f8d7da; color: #721c24; }
    .btn-danger:hover { background: #f5c6cb; }
  `
})
export class AdminPage implements OnInit {
  private readonly adminService = inject(AdminService);
  protected readonly t = inject(LanguageService);

  protected readonly users = signal<AdminUser[]>([]);
  protected readonly stats = signal<AdminStats | null>(null);
  protected readonly loading = signal(true);

  ngOnInit() {
    this.loadData();
  }

  deleteUser(userId: number) {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;
    this.adminService.deleteUser(userId).subscribe({
      next: () => this.loadData(),
      error: () => alert('Failed to delete user')
    });
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });
  }

  private loadData() {
    this.adminService.getUsers().subscribe({
      next: (users: AdminUser[]) => {
        this.users.set(users);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });

    this.adminService.getStats().subscribe({
      next: (stats: AdminStats) => this.stats.set(stats),
      error: () => {}
    });
  }
}
