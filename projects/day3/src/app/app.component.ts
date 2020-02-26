import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  template: `
   <div>
     <h2>Day 3 NICE !!!!</h2>
     
     <nice-tabs>
       <ng-template #titleTemp let-t="tab" let-i="index">
         <div>
           <span>({{i}}) - </span>
           <strong>{{t.title}}</strong>
         </div>
       </ng-template>
       <ng-template #titleTempEven let-t="tab" let-i="index">
         <div>
           <strong>!!! :-) {{t.title}}</strong>
           
         </div>
       </ng-template>
       <nice-tab title="AAA">
         <h3>AAA</h3>
         HTML
       </nice-tab>
       <nice-tab [title]="i" *ngFor="let i of [1,2,3,4]">
         <h3>({{i}}) - BBB</h3>
         HTML - {{title}}
       </nice-tab>
     </nice-tabs>
     
     
     <!--<app-demo></app-demo>-->
    <!-- <nice-form-builder></nice-form-builder>-->
     
     
     
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
