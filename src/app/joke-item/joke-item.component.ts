import { Component, Input } from '@angular/core';
import { Joke } from '../joke';


@Component({
  selector: 'joke-item',
  standalone: true,
  imports: [],
  templateUrl: './joke-item.component.html',
  styleUrl: './joke-item.component.css'
})
export class JokeItemComponent {

  @Input('joke') joke:Joke //Podemos poner joke!:Joke si queremos que el sistema no nos avise del error de que la variable no está inicializada. También podemos cambiar el archivo tsconfig.json.

}
