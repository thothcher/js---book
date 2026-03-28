import { Routes } from '@angular/router';
import { authGuard, adminGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.HomePage) },
  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./pages/register/register').then(m => m.RegisterPage) },
  { path: 'forgot-password', loadComponent: () => import('./pages/forgot-password/forgot-password').then(m => m.ForgotPasswordPage) },
  { path: 'chapters', loadComponent: () => import('./pages/chapters/chapters').then(m => m.ChaptersPage) },
  { path: 'chapters/:id', loadComponent: () => import('./pages/chapter-detail/chapter-detail').then(m => m.ChapterDetailPage) },
  { path: 'quiz/:chapterId', loadComponent: () => import('./pages/quiz/quiz').then(m => m.QuizPage), canActivate: [authGuard] },
  { path: 'memory-game', loadComponent: () => import('./pages/memory-game/memory-game').then(m => m.MemoryGamePage), canActivate: [authGuard] },
  { path: 'facts', loadComponent: () => import('./pages/facts/facts').then(m => m.FactsPage) },
  { path: 'psychologists', loadComponent: () => import('./pages/psychologists/psychologists').then(m => m.PsychologistsPage) },
  { path: 'stories', loadComponent: () => import('./pages/stories/stories').then(m => m.StoriesPage) },
  { path: 'notes', loadComponent: () => import('./pages/notes/notes').then(m => m.NotesPage), canActivate: [authGuard] },
  { path: 'profile', loadComponent: () => import('./pages/profile/profile').then(m => m.ProfilePage), canActivate: [authGuard] },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.ContactPage) },
  { path: 'faq', loadComponent: () => import('./pages/faq/faq').then(m => m.FaqPage) },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.DashboardPage), canActivate: [authGuard] },
  { path: 'achievements', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'flashcards', loadComponent: () => import('./pages/flashcards/flashcards').then(m => m.FlashcardsPage), canActivate: [authGuard] },
  { path: 'flashcards/:chapterId', loadComponent: () => import('./pages/flashcards/flashcards').then(m => m.FlashcardsPage), canActivate: [authGuard] },
  { path: 'playground', loadComponent: () => import('./pages/playground/playground').then(m => m.PlaygroundPage) },
  { path: 'admin', loadComponent: () => import('./pages/admin/admin').then(m => m.AdminPage), canActivate: [authGuard, adminGuard] },
  { path: '**', redirectTo: '' }
];
