import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, CanActivateChild, CanDeactivate,
  CanLoad, Resolve,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment, UrlTree
} from '@angular/router';
import { Observable } from "rxjs";
import { HomeComponent } from "../home/home.component";
import { UsersBlService } from "../users/services/users-bl.service";

@Injectable({
  providedIn: 'root'
})
export class SecurityService implements Resolve<nice.User[]>, CanDeactivate<HomeComponent>, CanLoad, CanActivate, CanActivateChild{


  token: string;

  constructor(
      private router : Router,
      private userBl :UsersBlService
      ) {
  }

  get isLogin(){ return this.token !== null; }

  login(name:string , password:string) : Promise<string>{
    return new Promise<string>( resolve => {
        setTimeout( ()=>{
          this.token = '12345667876984564';
          resolve(this.token);
        },1000);
      });
  }
  logout(){
    this.token = null;
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {;
    console.log(`canLoad--> ${route.component?.constructor?.name}`);
    if(this.token) return true;
    this.router.navigate(['/login',{url:route.path}]);
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(`canActivate--> ${route.component?.constructor?.name}`);
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(`canActivateChild--> ${childRoute.component?.constructor?.name}`);
    return true;
  }

  canDeactivate(component: HomeComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(`canDeactivate--> ${component?.constructor?.name}`);

    let result = false;
    if(!component.isGood){
      result = window.confirm( 'R-U-Sure')
    }
    return component.isGood || result;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): nice.User[] | Observable<nice.User[]> | Promise<nice.User[]> {
    console.log(`resolve--> ${route?.component?.constructor?.name}`);

    return this.userBl.getUsers(8);
  }
}
