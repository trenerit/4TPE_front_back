import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularz',
  imports: [FormsModule],
  templateUrl: './formularz.component.html',
  styleUrl: './formularz.component.scss'
})
export class FormularzComponent {

  mailError: boolean = false;
  passError = false;
  
  submitLoginForm(dataFromForm: any): void {
    
    console.log(dataFromForm.value);
    
    this.mailError = false;
    this.passError = false;

    if(dataFromForm.value.email === '') {
      this.mailError = true;
    }
    
    if(dataFromForm.value.pass === '') {
      this.passError = true;
    }

  }

}
