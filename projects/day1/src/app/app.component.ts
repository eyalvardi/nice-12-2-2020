import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!--<div
                [class.demo1]="demo1"
                [class.demo2]="demo2"
                [class.demo3]="demo3">-->
        <div [ngClass]="devClasses" 
             [ngStyle]="{
                border : count +'px solid green',
                backgroundColor: 'blue'
             }" 
             [style.border]="count +'px solid green'">

            <h1 [id]="title.length + 5" (click)="toggle('demo1',$event)">
                Day1 Nice {{title.length + 5}}
            </h1>
            <button (click)="toggle('demo1')">demo1</button>
            <button (click)="toggle('demo2')">demo2</button>
            <button (click)="toggle('demo3')">demo3</button>
        </div>
        <div>
            <h1> Counter demo</h1>
            <nice-counter 
                    [step]="3"
                    [value]="100">                
            </nice-counter>
        </div>

    `,
    styles: [`
        .demo1 {
            background-color: yellow;
        }

        .demo2 {
            border: 2px solid red;
        }

        .demo3 {
            background-color: darkgray;
        }
    `]
})
export class AppComponent {
    title = 'day1';
    count = 0;
    _classes = {
      'demo1' : true,
      'demo2' : true,
      'demo3' : true,
    };
    demo1Val = true;
    demo2Val = true;
    demo3Val = true;

    get devClasses (){
      return this._classes;
    }
    toggle(clas:string,...args){
      this.count++;
      return this._classes[clas] = !this._classes[clas];
    }
}
