import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { SecurityService } from "./login/security.service";
import { LoginComponent } from "./login/login.component";
import { PreloadingStrategyService } from "./services/preloading-strategy.service";
import { QuicklinkStrategy } from "ngx-quicklink";

const routes: Routes = [
    {
        path: '',
        resolve : [SecurityService],
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        resolve : {users: SecurityService},
        canDeactivate : [SecurityService],
        component: HomeComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
        useHash             : true,
        preloadingStrategy  : QuicklinkStrategy,
        enableTracing       : false
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
    constructor(private router : Router) {
        router.resetConfig([
            ...router.config,
            {path: 'login', component: LoginComponent},
            /*
            * {
                path: 'users',
                component: UsersComponent,
                children : [
                    { path : ':id' , component : UserComponent}
                ]
            },
            *
            * */
            {
                path: 'users',
                data: {preload:false},
                canLoad: [SecurityService],
                canActivate : [SecurityService],
                loadChildren: ()=> import('./users/users.module')
                    .then( moduleJS => moduleJS.UsersModule),
            },
            {
                path: 'users2',
                data: {preload:true},
                loadChildren: ()=> import('./users/users.module')
                    .then( moduleJS => moduleJS.UsersModule),
            },
            {
                path: 'eyal',
                data: {preload:false},
                loadChildren: ()=> import('./users/users.module')
                    .then( moduleJS => moduleJS.UsersModule),
            },

            {path: '**' , component : ErrorComponent}
        ]);
    }
}
