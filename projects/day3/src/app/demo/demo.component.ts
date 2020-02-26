import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('name'),
    myFiledGroup: new FormGroup({
      aa : new FormControl()
    }),
    cards : new FormArray([

    ])
  });
  constructor() { }

  ngOnInit(): void {
  }

}
