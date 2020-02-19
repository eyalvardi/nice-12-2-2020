import {NgModule} from "@angular/core";
import {TodoListComponent} from "./src/components/todo-list.component";
import {CommonModule} from "@angular/common";
import { TaskItemComponent } from './src/components/task-item.component';
import {TodoListService} from "./src/services/todo-list.service";

@NgModule({
    declarations : [
        TodoListComponent,
        TaskItemComponent
    ],
    imports : [
        CommonModule
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
