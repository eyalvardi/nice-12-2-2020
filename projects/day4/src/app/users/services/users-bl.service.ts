import { Injectable } from '@angular/core';
import { UsersProxyService } from "./users-proxy.service";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersBlService {
  users: nice.User[] = [];

  constructor( private proxy : UsersProxyService ) { }

  async getUsers(num:number){
    this.users = await this.proxy.getUsers(num).toPromise();
    return  this.users;
  }

  getUserById(id:string) : nice.User {
    return this.users.find( user => user.login.username === id );
  }

}
