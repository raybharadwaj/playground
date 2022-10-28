import db from "$lib/server/db.js";

export class Task {
    constructor() {
        this.title = "";
        this.completed = false;
        this.steps = 0;
        this.createdDateTime = new Date();
        this.dueDateTime = {}; // Date Object
    }
}

export const TasksCollection = db.collection('tasks');