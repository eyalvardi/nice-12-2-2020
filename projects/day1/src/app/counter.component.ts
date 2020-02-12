import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nice-counter',
  template: `
    <div>
      <button (click)="increase()">+</button>
      <span>{{value}}</span>
      <button (click)="decrease()">-</button>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {

  @Input() value: number = 0;
  @Input() step: number  = 1;

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.value+=this.step;
  }

  decrease() {
    this.value-=this.step;
  }
}
