import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  inputText = 'Tekst';
  inputText2 = '';
  maxLen = 5;
  colorClass = 'color';
  logoUrl = '';

  profession = 'Programista';
  skill = 'Angulara';

  profession2 = '';
  skill2 = '';

  isDisable = true;
  isDisable2 = true;

  inputText2Way = '';
  button = true;
  showClick = '';

  constructor() {
    setTimeout(() => { this.isDisable = false; }, 3000);
  }

  change() {
    this.inputText = 'Zamiana tekstu';
    this.maxLen = 10;
    this.colorClass = 'color2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  click(event) {
    this.showClick = 'Przycisk aktywny!';
    this.button = false;
  }

  onClick(event) {
    console.log(event);
  }

  onFocus() {
    this.colorClass = 'color2';
  }

  onMouseMove(event) {
    console.log('x: ' + event.clientX + 'y: ' + event.clientY);
  }

  onPaste() {
    this.inputText2 = 'Nie wklejaj, wpisz!';
  }
  change2() {
    this.isDisable2 = false;
  }
  saveProff(event) {
    this.profession = event.target.value;
  }
  saveSkill(event) {
    this.skill = event.target.value;
  }
}
