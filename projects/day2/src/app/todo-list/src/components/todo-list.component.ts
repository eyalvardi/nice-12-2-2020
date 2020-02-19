import {Component, Input, OnInit} from '@angular/core';
import {TaskItem} from "../models/task-item.class";
import {TodoListService} from "../services/todo-list.service";

@Component({
  selector: 'nice-todo-list',
  providers : [
    TodoListService
  ],
  template: `
    <div class="todo-list-layout">
      <div class="task-header">
        <h4>Todo List Demo</h4>
        <input type="text"  #desc>
        <button (click)="ctrl.addTask(desc.value)">Add Task</button>
      </div>
      <div >
        <nice-task-item 
            *ngFor="let task of ctrl.tasks"
            [item]="task"
        ></nice-task-item>
        <!--<ng-container *ngFor="let task of ctrl.tasks">
          <input type="checkbox" 
                 (change)="ctrl.setDone(task,$event)"
                 [checked]="task.isDone">
          <span class="task-desc">{{task.desc}}</span>
          <button (click)="ctrl.removeTask(task)">x</button>
        </ng-container>-->        
      </div>
      <div class="tasks-status">
        Total : <span> {{ctrl.totalIsDone}} / {{ctrl.tasks.length}}</span>
      </div>
    </div>
  `,
  styles: []
})
export class TodoListComponent {

  @Input() set tasks(tasks:TaskItem[]){
    this.todoListService.tasks.concat(tasks);
  }

  get ctrl(){ return this.todoListService; }



  //todoListService = new TodoListService();

  constructor(private todoListService : TodoListService) {}

}
