import { Component } from '@angular/core';

/**
 * Generated class for the HelpButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'help-button',
  templateUrl: 'help-button.html'
})
export class HelpButtonComponent {

  text: string;
  indice1active: boolean = true;
  indice2active: boolean = false;
  indice3active: boolean = false;

  constructor() {
    console.log('Hello HelpButtonComponent Component');
    this.text = 'Hello World';
  }

  public clickIndice1 = function () {
    this.indice2active = true;
  }

  public clickIndice2 = function () {
    if (this.indice2active)
      this.indice3active = true;
  }

  public clickIndice3 = function () {
  }

}
