import { writable } from "svelte/store";

export const randID = () => Math.floor(Math.random() * 100000);

export const TasksStore = writable([
    {
        body: "Demo Task",
        completed: false,
        id: randID()
    }
])

