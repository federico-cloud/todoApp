import {v4 as uuid} from 'uuid'

export class Todo {

    constructor(desc){
        this.id        = uuid();
        this.desc      = desc;
        this.done      = false;
        this.createdAt = new Date();
    }

}