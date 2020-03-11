import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersProxyService {

  constructor( private http : HttpClient) {

  }

  getUsers(num : number = 7) : Observable<nice.User[]>{
    return this.http.get<nice.UsersResponse>(
        `https://randomuser.me/api/?results=${num}`
    ).pipe(
        map( resps => resps.results )
    );
  }
}
