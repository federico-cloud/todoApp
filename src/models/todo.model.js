export class Todo {

    constructor(desc){
        this.id        = 1;
        this.desc      = desc;
        this.done      = false;
        this.createdAt = new Date();
    }

}