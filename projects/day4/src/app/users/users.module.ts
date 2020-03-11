import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users.component';
import { UserComponent } from './components/user.component';
import { RouterModule } from "@angular/router";


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
                component: UsersComponent,
                children : [
                    { path : ':id' , component : UserComponent}
                ]
            }
        ])
    ]
})
export class UsersModule {
}
