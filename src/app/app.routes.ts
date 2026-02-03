import { Routes } from '@angular/router';
import {GameListPage} from './components/web/game-list-page/game-list-page';
import {GameEditPage} from './components/web/game-edit-page/game-edit-page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/games/list',
    pathMatch: 'full',
  },
  {
    path: 'games/list',
    component: GameListPage
  },
  {
    path: 'games/add',
    component: GameEditPage
  },
  {
    path: 'games/edit/:id',
    component: GameEditPage
  },
  {
    path: '**',
    redirectTo: '/games/list',
    pathMatch: 'full',
  }
];
