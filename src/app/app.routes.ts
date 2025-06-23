import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full',
    },
    {
        path: 'notes',
        loadComponent: () => import('./features/notes/notes').then((c) => c.Notes),
    },
    {
        path: 'lists',
        loadComponent: () => import('./features/lists/lists').then((c) => c.Lists),
    },
    {
        path: 'recordings',
        loadComponent: () => import('./features/recordings/recordings').then((c) => c.Recordings),
    },
    {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile').then((c) => c.Profile),
    },
];
