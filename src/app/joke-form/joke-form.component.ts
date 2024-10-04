import { Component, EventEmitter, Output } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke-form',
  standalone: true,
  imports: [],
  templateUrl: './joke-form.component.html',
  styleUrl: './joke-form.component.css'
})
export class JokeFormComponent {

  @Output() jokeCreated = new EventEmitter<Joke>()

  createJoke(setup: string, punchline: string)
  {
    event?.preventDefault()
    if(setup!="" && punchline!="")
    {
    this.jokeCreated.emit(new Joke(setup, punchline))
    }
  }

}
