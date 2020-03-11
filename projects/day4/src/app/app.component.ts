import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="main-layout">
          <div class="menu">
              <a routerLink="/home" routerLinkActive="active-nav">Home</a>
              <a routerLink="/users" routerLinkActive="active-nav">Users</a>
              <a [routerLink]="['/','users','123',{a:1,b:2}]" routerLinkActive="active-nav">Users</a>
          </div>
          <div>
              <router-outlet></router-outlet>
          </div>  
        </div>        
    `,
    styles: [`
        :host{
            display: grid;
            place-items: center;
        }
        .main-layout{
            padding: 8px;
            display: grid;
            border: 1px solid darkgrey;
            grid-template-rows: 30px auto;
            grid-gap: 8px;
            width: 95%;
            height: 95vh;
        }
        .menu{
            border-bottom: 1px solid darkgrey;
            display: grid;
            grid-gap: 8px;
            grid-auto-flow: column;
            grid-auto-columns: 100px;
            justify-items: center;
        }
    `]
})
export class AppComponent {
    title = 'day4';
}
