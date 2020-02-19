import {NgModule} from "@angular/core";
import {TodoListComponent} from "./src/components/todo-list.component";

@NgModule({
    declarations : [
        TodoListComponent
    ],
    exports      : [
        TodoListComponent
    ]
})
export class TodoListModule {

}
