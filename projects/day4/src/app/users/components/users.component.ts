import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <div>
      <div>
        <h3>Users</h3>
        <a routerLink="1">User 1</a> | 
        <a routerLink="2">User 2</a> | 
        <a routerLink="3">User 3</a> | 
      <div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
