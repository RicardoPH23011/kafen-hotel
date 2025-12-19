import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/layout/navbar/navbar';
import { HeroComponent } from '../../components/hero/hero';
import { FooterComponent } from '../../components/layout/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    FooterComponent
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {}
