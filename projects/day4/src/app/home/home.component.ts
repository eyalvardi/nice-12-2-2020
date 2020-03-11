import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  template: `
    <div>
      home works!
      <input type="checkbox" (change)="setValue($event)">
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  isGood;
  constructor(private route : ActivatedRoute) {
    console.log(`home ==> users length : ${route.snapshot.data.users.length}`);
  }

  ngOnInit(): void {
  }

  setValue($event: Event) {
    this.isGood = ($event.target as HTMLInputElement).checked;
  }
}
