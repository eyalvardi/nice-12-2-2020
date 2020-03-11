import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users.component';
import { UserComponent } from './components/user.component';
import { RouterModule } from "@angular/router";
import { SecurityService } from "../login/security.service";


@NgModule({
    declarations: [
        UsersComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                canActivate         : [SecurityService],
                canActivateChild    : [SecurityService],
                resolve             : [SecurityService],
                component: UsersComponent,
                children : [
                    { path : '' , redirectTo : 'no user' },
                    { path : ':id' , component : UserComponent,canActivate : [SecurityService]}
                ]
            }
        ])
    ]
})
export class UsersModule {
}
