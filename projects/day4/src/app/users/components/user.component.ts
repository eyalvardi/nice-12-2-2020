import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsersBlService } from "../services/users-bl.service";

@Component({
  selector: 'app-user',
  template: `
    <div>
      <h3>user works! {{userId}}</h3>
      <pre>
        {{user | json }}
      </pre>
    </div>
  `,
  styles: []
})
export class UserComponent implements OnInit {
  userId: string;
  user: nice.User;

  constructor(
      private route : ActivatedRoute,
      private userBl : UsersBlService
      ) {
    route.params.subscribe(params=> {
      this.userId = params.id;
      this.user   = this.userBl.getUserById(params.id);
    })
  }

  ngOnInit(): void {
  }

}
