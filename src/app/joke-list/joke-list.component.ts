import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joke } from '../joke';
import { JokeItemComponent } from "../joke-item/joke-item.component";
import { JokeFormComponent } from "../joke-form/joke-form.component";

@Component({
  selector: 'joke-list',
  standalone: true,
  imports: [CommonModule, JokeItemComponent, JokeFormComponent],
  templateUrl: './joke-list.component.html',
  styleUrl: './joke-list.component.css'
})
export class JokeListComponent {

  jokesArray: Array<Joke>

  constructor(){
    this.jokesArray = [new Joke("Texto broma1", "Bromita1"), new Joke("Texto broma2", "Bromita2"), new Joke("Texto broma3", "Bromita3")] 
  }

  addJoke(joke: Joke) //Método que sirve para añadir una nueva broma al final del array
  {
    this.jokesArray.push(joke)
  }


}
