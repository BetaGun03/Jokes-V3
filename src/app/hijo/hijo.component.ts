import { Component } from '@angular/core';

@Component({
  selector: 'hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  contador:Number = 0

  constructor()
  {

  }

}
