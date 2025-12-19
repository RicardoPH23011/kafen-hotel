import { Component } from '@angular/core';
import { RoomCardComponent } from '../../components/room-card/room-card';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomCardComponent],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.css']
})
export class RoomsComponent {}
