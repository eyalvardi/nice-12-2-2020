import { Injectable } from '@angular/core';
import { UsersProxyService } from "./users-proxy.service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersBlService {
  users: nice.User[] = [];

  constructor( private proxy : UsersProxyService ) { }

  getUsers(num:number){
    this.proxy.getUsers(num).pipe(
        tap( users => this.users = users)
    ).subscribe();
  }

  getUserById(id:string) : nice.User {
    return this.users.find( user => user.login.username === id );
  }

}
