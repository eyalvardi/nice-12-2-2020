import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'nice-counter',
  template: `
    <div [ngClass]="vsm">
      
      <pre>
        {{ vsm | json}}
      </pre>
      
      <button (click)="increase()" [class.error]="value > max">+</button>
      <span>{{value}}</span>
      <button (click)="decrease()" [class.error]="value < min">-</button>
    </div>
  `,
  styles: [`
    .error {
      border: 2px solid red;
    }
    .max{}
    .min{}  
  `]
})
export class CounterComponent implements OnInit {

  @Input() value: number = 0;
  @Input() step : number  = 1;
  @Input() max  : number  = 999;
  @Input() min  : number  = 0;

  @Output() xxxChange = new EventEmitter<number>();

  _vsm = {
    error: this.value > this.max || this.value < this.min,
    max  : this.value > this.max,
    min  : this.value < this.min,
    value: this.value
  };

  get vsm(){
    return {...this._vsm};
  }

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.value+=this.step;
    this.xxxChange.emit(this.value);
  }

  decrease() {
    this.value-=this.step;
    this.xxxChange.emit(this.value);
  }
}
