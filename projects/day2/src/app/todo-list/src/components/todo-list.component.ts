import {Component, Input, OnInit} from '@angular/core';
import {TaskItem} from "../models/task-item.class";
import {TodoListService} from "../services/todo-list.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {filter, map, tap} from "rxjs/operators";

@Component({
  selector: 'nice-todo-list',
  providers : [
    TodoListService
  ],
  template: `
    <div class="todo-list-layout">
      <div class="task-header" [formGroup]="myFormCreateTask">
        <h4>Todo List Demo</h4>
        <input type="text" formControlName="name"  #desc ><br>
        <input type="text" formControlName="day"><br>
        <mat-form-field>
          <mat-label>End date</mat-label>
          <input matInput formControlName="date" [matDatepicker]="picker1" #datePic >
          <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
          <mat-datepicker #picker1></mat-datepicker>
        </mat-form-field>
        <!--<button mat-raised-button color="primary"
            (click)="ctrl.addTask(desc.value,datePic.value)">Add Task
        </button>-->
        <button mat-raised-button 
                color="primary"
                [disabled]="!myFormCreateTask.valid"
                (click)="addTask()">Add Task
        </button>
      </div>
      <div >
        <nice-task-item 
            *ngFor="let task of ctrl.tasks"
            [item]="task"
        ></nice-task-item>
      </div>
      <div class="tasks-status">
        Total : <span> {{ctrl.totalIsDone}} / {{ctrl.tasks.length}}</span>
      </div>
    </div>
    <pre>
      {{myFormCreateTask.value | json }}
    </pre>  
  `,
  styles: []
})
export class TodoListComponent {


  myFormCreateTask = new FormGroup({
    name : new FormControl( 'Temp task desc', [Validators.maxLength(7), Validators.required]),
    date : new FormControl( Date.now()      , [Validators.required]),
    day  : new FormControl( '3'             , [Validators.max(5)]),
  });


  @Input() set tasks(tasks:TaskItem[]){
    this.todoListService.tasks.concat(tasks);
  }

  get ctrl(){ return this.todoListService; }

  addTask(){
    const {date,name} = this.myFormCreateTask.value;
    this.todoListService.addTask(name,date);
  }

  //todoListService = new TodoListService();


  constructor(private todoListService : TodoListService) {
    this.myFormCreateTask.get('name')
        .valueChanges
        .pipe(
            filter( (name:string) => name.length > 3),
            tap( name => {
              ///this.myFormCreateTask.get('name').disable();
            })
        ).subscribe();

    this.myFormCreateTask.valueChanges
        .pipe(
            //map( value => value.name),
            tap( value    => console.table(value) )
        ).subscribe(value => console.dir(value))

  }

}
