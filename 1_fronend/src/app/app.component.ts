import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import { PetlaForComponent } from './petla-for/petla-for.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularzComponent, PetlaForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
