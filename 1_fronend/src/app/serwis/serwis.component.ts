import { Component, OnInit } from '@angular/core';
import { TestowySerwisService } from '../testowy-serwis.service';

@Component({
  selector: 'app-serwis',
  imports: [],
  templateUrl: './serwis.component.html',
  styleUrl: './serwis.component.scss'
})
export class SerwisComponent implements OnInit {
  imie: any;

  constructor(protected uczen: TestowySerwisService) {
    this.getData();
  }
  
  ngOnInit() {
    console.log('sarsadaqs');
    // this.getData();
    // rozwiązanie !!!! getData() nam zwraca dane więc trzeba je gdzieś wyświetlić!!!
    // BRAKOWAŁO TYLKO CONSOLE.LOG()
    console.log(this.getData());
  }

  getData() {
    return this.uczen.imie;
  }


}


