import { Component, OnInit } from '@angular/core';
import { UsersBlService } from "../services/users-bl.service";

@Component({
    selector: 'app-users',
    template: `
        <div class="users-layout">
            <div class="users-menu">                
                <div *ngFor="let user of users" routerLinkActive="active-nav" class="item-menu">
                    <img [src]="user.picture.thumbnail">
                    <a [routerLink]="[user.login.username]">{{user.name.first}} {{user.name.last}}</a>
                </div>
            </div>
            <div>
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styles: [`
        .users-layout {
            display: grid;
            grid-template-columns: 250px auto;
            grid-gap: 8px;
        }

        .users-menu {
          display: grid;
          grid-auto-flow: row;
          grid-auto-rows: 50px;
          grid-gap: 8px;
        }
        .item-menu{
            display: grid;
            grid-template-columns: 50px auto;
            grid-gap: 8px;
        }
    `]
})
export class UsersComponent implements OnInit {

    get users() {
        return this.userBl.users;
    }

    constructor(private userBl: UsersBlService) {
        console.info(`users size = ${this.users.length}`);
    }

    ngOnInit(): void {
        //this.userBl.getUsers(8);
    }

}
