import {Component, Input, OnInit} from '@angular/core';
import {TaskItem} from "../models/task-item.class";

@Component({
  selector: 'nice-todo-list',
  template: `
    <div>
      <div class="header">
        <h3>Todo List Demo</h3>
        <input type="text"  #desc>
        <button (click)="addTask(desc.value)">Add Task</button>
      </div>
      <div class="tasks-list">
        <ng-container *ngFor="let task of tasks">
          <input type="checkbox" 
                 (change)="setDone(task,$event)"
                 [checked]="task.isDone">
          <span class="desc">{{task.desc}}</span>
          <button (click)="removeTask(task)">x</button>
        </ng-container>
        
      </div>
      <div class="tasks-status">
        Total : <span> {{totalIsDone}} / {{tasks.length}}</span>
      </div>
    </div>
  `,
  styles: []
})
export class TodoListComponent implements OnInit {

  @Input() tasks: TaskItem[] = [];

  get totalIsDone(){
    return this.tasks.filter( t => t.isDone ).length;
  }
  constructor() { }

  ngOnInit(): void {
  }

  setDone(task: TaskItem, $event: Event) {
    const inputElement = $event.target as HTMLInputElement;
    task.isDone = inputElement.checked;
  }

  addTask(desc: string){
    const task = new TaskItem(desc);
    this.tasks.push(task);
  }
  removeTask(task: TaskItem) {
    const index = this.tasks.findIndex( t => t.id === task.id);
    this.tasks.splice(index,1);
  }
}
