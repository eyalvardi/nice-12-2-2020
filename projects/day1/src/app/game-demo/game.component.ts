import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nice-game',
  template: `
    <p>
      game works!
    </p>
  `,
  styles: []
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
