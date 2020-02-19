import {TaskItem} from "../models/task-item.class";
import {Injectable} from "@angular/core";

@Injectable()
export class TodoListService {
    tasks: TaskItem[] = [];

    get totalIsDone(){
        return this.tasks.filter( t => t.isDone ).length;
    }

    setDone(task: TaskItem, $event: Event) {
        const inputElement = $event.target as HTMLInputElement;
        task.isDone = inputElement.checked;
    }

    addTask(desc: string){
        const task = new TaskItem(desc);
        this.tasks.push(task);
    }
    removeTask(task: TaskItem) {
        const index = this.tasks.findIndex( t => t.id === task.id);
        this.tasks.splice(index,1);
    }
}
