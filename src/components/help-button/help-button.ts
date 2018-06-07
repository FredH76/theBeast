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

  constructor() {
    console.log('Hello HelpButtonComponent Component');
    this.text = 'Hello World';
  }

}
