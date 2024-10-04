import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from "./joke-form/joke-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JokeListComponent, JokeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prueba';

}
