import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  template: `
   <div>
     <h2>Day 3 NICE !!!!</h2>
     
     <nice-form-builder></nice-form-builder>
     
     
     
     <!--<div [formGroup]="myForm">
       name  : <input formControlName="name">
       age   : <input formControlName="age">
       email : <input formControlName="email">
       cards:<br>
       <ng-container *ngFor="let fc of cardsFc.controls;last as l;index as i">
         <input [formControl]="fc">
         <button (click)="removeCard(i)">-</button>
         <button *ngIf="l" (click)="addCard()">+</button>
         <br>
       </ng-container>       
       <pre>
         {{myForm.value | json }}
       </pre>
     </div>-->
   </div>

    
  `,
  styles: [`
    .ng-invalid{
      border-right: 2px solid red;
    }
    .ng-valid{
      border-right: 2px solid green;
    }
  `]
})
export class AppComponent implements OnInit{
  title = 'day3';
  nameFc = new FormControl('eyal',[Validators.required],[]);
  myForm = new FormGroup({
    name : this.nameFc,
    age  : new FormControl('35'),
    email: new FormControl('ee@eee.com',[Validators.email]),
    cards : new FormArray([
      new FormControl('abc')
    ])
  },[Validators.nullValidator]);

  get cardsFc() : FormArray {
    return this.myForm.get('cards') as FormArray;
  }

  ngOnInit(): void {
    this.myForm.valueChanges
        .pipe(
            tap( value => console.dir(value))
        )
        .subscribe()
  }

  addCard() {
    this.cardsFc.push(new FormControl());
  }

  removeCard(i: number) {
    this.cardsFc.removeAt(i);
  }
}
