import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joke } from '../joke';

@Component({
  selector: 'joke-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.css'
})
export class JokeListComponent {

  jokesArray: Array<Joke>

  constructor(){
    this.jokesArray = [new Joke("Texto broma1", "Bromita1"), new Joke("Texto brom2", "Bromita2"), new Joke("Texto broma3", "Bromita3")] 
  }



}
