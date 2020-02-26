import {NgModule} from "@angular/core";
import {TodoListComponent} from "./src/components/todo-list.component";
import {CommonModule} from "@angular/common";
import { TaskItemComponent } from './src/components/task-item.component';
import {NgMaterialModule} from "./ng-material.module";
import { MyDetailsComponent } from './src/components/my-details/my-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations : [
        TodoListComponent,
        TaskItemComponent,
        MyDetailsComponent
    ],
    imports : [
        CommonModule,
        ReactiveFormsModule,

        NgMaterialModule,

    ],
    exports      : [
        TodoListComponent
    ],
    providers : [
        //TodoListService
    ]
})
export class TodoListModule {

}
