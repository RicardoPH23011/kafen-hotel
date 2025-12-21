import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/layout/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent   // 👈 AQUÍ ESTÁ LA CLAVE
  ],
  templateUrl: './app.html'
})
export class AppComponent {}
