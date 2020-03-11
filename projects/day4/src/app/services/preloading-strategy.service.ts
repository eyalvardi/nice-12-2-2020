import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PreloadingStrategyService implements PreloadingStrategy{

  constructor() { }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    console.log(`preload route: ${route.path} , preload : ${route?.data?.preload}`);
    return route?.data?.preload ? load() : of(null) ;
  }
}
