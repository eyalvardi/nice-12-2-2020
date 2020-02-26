import { Component, OnInit } from '@angular/core';
import { FormBuilderService } from "./form-builder.service";

@Component({
  selector: 'nice-form-builder',
  template: `
    <div>
      <h3>Form Builder from JSON</h3>
      <pre>
        {{ service.json | json }}
      </pre>
    </div>
  `,
  styles: []
})
export class FormBuilderComponent implements OnInit {

  constructor(public service : FormBuilderService ) { }

  ngOnInit(): void {
    this.service.loadJson();
  }

}
