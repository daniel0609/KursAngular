import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // jezeli chcemy miec dane od rodzica
  // z app.component.html
  // <app-child [tasks]="tasksList"></app-child>
  // to tworzymy input i juz mozemy sie do tego odwoływać w
  @Input() tasks;

  // jezeli chcemy przekazac te dane do rodzica to musimy je wyemitować
  @Output() eventTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  select(task) {
    console.log('button clicked');
    this.eventTask.emit(task);
  }

}
