import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-room-card',
  standalone: true,
  templateUrl: './room-card.html',
  styleUrls: ['./room-card.css']
})
export class RoomCardComponent {
  @Input() title!: string;
  @Input() price!: string;
  @Input() image!: string;
}
