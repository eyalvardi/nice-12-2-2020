import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nice-cell',
  template: `
    <p [class.visit]="cellModel.state === 'visit'">
      cell works!
    </p>
  `,
  styles: []
})
export class CellComponent implements OnInit {

  @Input() pos: {x:number,y:number};
  @Input('source') cellModel;

  constructor() { }

  ngOnInit(): void {
  }

}
