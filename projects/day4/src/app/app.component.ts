import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="main-layout">
          <div class="menu">
              <a routerLink="/home" routerLinkActive="active-nav">Home</a>
              <a routerLink="/users" routerLinkActive="active-nav">Users</a>
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
            display: grid;
            border: 1px solid darkgrey;
            grid-template-rows: 30px auto;
            grid-gap: 8px;
            width: 95%;
            height: 95vh;
        }
    `]
})
export class AppComponent {
    title = 'day4';
}
