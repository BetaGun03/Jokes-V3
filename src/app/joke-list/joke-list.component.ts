import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joke } from '../joke';
import { JokeItemComponent } from "../joke-item/joke-item.component";

@Component({
  selector: 'joke-list',
  standalone: true,
  imports: [CommonModule, JokeItemComponent],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.css'
})
export class JokeListComponent {

  jokesArray: Array<Joke>

  constructor(){
    this.jokesArray = [new Joke("Texto broma1", "Bromita1"), new Joke("Texto broma2", "Bromita2"), new Joke("Texto broma3", "Bromita3")] 
  }



}
