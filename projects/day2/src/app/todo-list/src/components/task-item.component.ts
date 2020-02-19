import {Component, Input, OnInit} from '@angular/core';
import {TodoListService} from "../..";
import {TaskItem} from "../models/task-item.class";

@Component({
  selector: 'nice-task-item',
  template: `
    <input type="checkbox"
           (change)="ctrl.setDone(task,$event)"
           [checked]="task.isDone">
    <span class="task-desc">{{task.desc}}</span>
    <button (click)="ctrl.removeTask(task)">x</button>
  `,
  styles: [`
    :host {
      display: grid;
      grid-template-columns: 30px auto 25px;
      place-items: center;
    }
  `]
})
export class TaskItemComponent {

  @Input('item') task:TaskItem;

  get ctrl(){ return this.todoListService; }

  constructor(private todoListService : TodoListService) {}

}
