import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { RoomsComponent } from './pages/rooms/rooms';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  }
];
