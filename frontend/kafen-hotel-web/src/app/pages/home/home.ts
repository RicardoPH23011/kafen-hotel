import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  checkIn!: string;
  checkOut!: string;
  minCheckOut!: string;

  ngOnInit(): void {
    const today = new Date();
    const tomorrow = new Date(today);

    tomorrow.setDate(today.getDate() + 1);

    this.checkIn = this.formatDate(today);
    this.checkOut = this.formatDate(tomorrow);
    this.minCheckOut = this.checkOut;
  }

  onCheckInChange(value: string): void {
    this.checkIn = value;

    const checkInDate = new Date(value);
    const nextDay = new Date(checkInDate);
    nextDay.setDate(checkInDate.getDate() + 1);

    this.checkOut = this.formatDate(nextDay);
    this.minCheckOut = this.checkOut;
  }

  onCheckOutChange(value: string): void {
    this.checkOut = value;
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}
