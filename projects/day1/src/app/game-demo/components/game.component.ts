import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nice-game',
  template: `
    <div class="game-layout">
      <div class="header">

      </div>
      <div class="board">
<!--        <ng-container *ngFor  ="let cellModel of cells">-->
<!--          <nice-cell-->
<!--              [source]="cellModel"-->
<!--              [pos]   = "pos"-->
<!--          ></nice-cell>-->
<!--        </ng-container>             -->
      </div>
      <div class="controller">

      </div>
      <div class="footer"></div>
    </div>  
     
  `,
  styles: []
})
export class GameComponent implements OnInit {
  x= 45;
  y= 45;

  get pos(){
    return {
      x: this.x,
      y: this.y,
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  up(){
    this.y--;
  }

}
