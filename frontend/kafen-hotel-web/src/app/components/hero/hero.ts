import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.animate');

    elements.forEach((el: HTMLElement) => {
      setTimeout(() => el.classList.add('visible'), 300);
    });
  }
}
