import { Component } from '@angular/core';
import {TaskItem} from "./todo-list/src/models/task-item.class";

@Component({
  selector: 'app-root',
  template: `
    <div class="game">
<!--       <hani-game></hani-game>-->
        <nice-todo-list [tasks]="tasksList"></nice-todo-list>
<!--        <nice-my-table></nice-my-table>-->
    </div>    
  `,
  styles: [`
    .game {
      padding: 12px;
    }
  `]
})
export class AppComponent {
  title = 'day2';
  tasksList = [
      new TaskItem('day1'),
      new TaskItem('day2')
  ]
}
