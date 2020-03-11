import { Component, OnInit } from '@angular/core';
import { SecurityService } from "./security.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-login',
  template: `
    <div>
      <h3>Login</h3>
      <pre>
        name: <input>
        password: <input>
        <button (click)="login()">Login</button>
      </pre>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(
      private security : SecurityService,
      private route    : ActivatedRoute,
      private router   : Router
  ) { }

  ngOnInit(): void {
  }

  async login(name:string, password : string) {
    const token = await this.security.login( name , password );
    if(token){
      const url = this.route.snapshot.params.url;
      this.router.navigateByUrl(url);
    }
  }
}
