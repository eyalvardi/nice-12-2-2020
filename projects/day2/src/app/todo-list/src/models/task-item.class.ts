let count = 0;

export class TaskItem {
    id:number = -1;

    constructor(
        public desc  : string,
        public endDate : Date,
        public isDone:boolean = false) {

        this.id = count++;
    }
}
