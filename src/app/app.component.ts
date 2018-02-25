import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  tasksList = ['Sprzątanie kuwety', 'Gotowanie', 'Nauka angulara'];

  selected(event: string): void {
    console.log('odebrlem task');
    console.log(event);
  }
}
