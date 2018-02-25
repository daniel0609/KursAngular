import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  newTask: string;
  noTask = false;
  taskNum = 0;
  sameTask = false;

  tasksList: Array<string> = [];
  // tasksDone: Array<string> = [];
  tasksDone = new Array<string>();
  add() {
    this.sameTask = false;
    console.log(this.tasksList.findIndex(e => e === this.newTask));
    if (this.tasksList.findIndex(e => e === this.newTask) < 0) {
      this.sameTask = false;
      this.tasksList.push(this.newTask);
    } else {
      this.sameTask = true;
    }

    this.newTask = '';
  }
  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
  remove(task: string) {

    this.tasksList = this.tasksList.filter(e => e !== task);
    console.log(this.taskNum);
  }
  removeDone(task: string) {
    this.tasksDone = this.tasksDone.filter(e => e !== task);
  }
}
