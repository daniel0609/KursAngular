import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angulara';
  pi = Math.PI;
  date = new Date();
  dog = new Dog('Reksio', 4);

  days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
  dogs = new Array<Dog>();

  isVisible = false;
  isHidden = true;
  show() {
    console.log('wykonalo sie show()');
    this.isVisible = !this.isVisible;
  }

  hidden() {
    this.isHidden = !this.isHidden;
  }
  constructor() {
    this.dogs.push(
      new Dog('Reksio', 4),
      new Dog('Łatek', 3),
      new Dog('Maksiu', 5),
      new Dog('Łapek', 6),
      new Dog('Pluto', 8));
  }
}
class Dog {
  constructor(public name: string, public age: number) { }
}
