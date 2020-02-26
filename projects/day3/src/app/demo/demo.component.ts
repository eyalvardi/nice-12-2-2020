import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { distinctUntilChanged, map, tap } from "rxjs/operators";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('name'),
    car: new FormControl(),
    subCar: new FormControl(),
    myFiledGroup: new FormGroup({
      aa : new FormControl()
    }),
    cards : new FormArray([

    ])
  });

  cars    = ['aaa','bbb','ccc'];
  subCars = [];

  constructor() { }

  ngOnInit(): void {
    this.myForm.valueChanges.pipe(
        map( value => value.car ),
        distinctUntilChanged(),
        tap( car => {
          this.subCars.length = 0;
          this.subCars = [ `1-${car}` , `2-${car}` , `3-${car}`  ]
        })
    ).subscribe()
  }

}
