import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ErrorComponent } from "./error/error.component";
import { UsersComponent } from "./users/components/users.component";
import { UserComponent } from "./users/components/user.component";


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'home', component: HomeComponent},
    {
        path: 'users',
        component: UsersComponent,
        children : [
            { path : ':id' , component : UserComponent}
        ]
    },

    {path: '**' , component : ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
        useHash : false
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
