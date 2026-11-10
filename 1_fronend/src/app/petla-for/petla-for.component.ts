import { Component } from '@angular/core';

@Component({
  selector: 'app-petla-for',
  imports: [],
  templateUrl: './petla-for.component.html',
  styleUrl: './petla-for.component.scss'
})
export class PetlaForComponent {

  tab1 = [10, 20, 5, 1];

  constructor() {

    console.log(this.tab1[0]);
  }

}
