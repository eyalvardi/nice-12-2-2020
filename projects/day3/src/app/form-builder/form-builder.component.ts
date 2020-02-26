import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from "./form-builder.service";

@Component({
  selector: 'nice-form-builder',
  template: `
    <div>
      <h3>Form Builder from JSON</h3>
      <!--<pre>
        {{ service.json | json }}
      </pre>-->
      <form [formGroup]="service.myForm" class="form-layout">
            <ng-container *ngFor="let item of service.json | keyvalue ">
              <label>{{item.key}}</label>
              <input [placeholder]    ="item.value.label" 
                     [formControlName]="item.key">
            </ng-container>
      </form>
      <hr>
    </div>
  `,
  styles: [`
    .form-layout{
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-auto-rows: 25px;
      max-width: 300px;
      grid-gap: 8px;
    }
  `]
})
export class FormBuilderComponent implements OnInit {

  constructor(public service : FormBuilderService ) { }

  ngOnInit(): void {
    this.service.loadJson();
  }

}
