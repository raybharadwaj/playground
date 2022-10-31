import { writable } from "svelte/store";
import axios from "axios";
import { json } from '@sveltejs/kit';

export const randID = () => Math.floor(Math.random() * 100000);

export const TasksStore = writable([
    {
        body: "Demo Task",
        completed: false,
        id: randID()
    }
])

export const setTasksStore = (data) => {
    TasksStore.update(() => {
        return data;
    })
}

export const updateTasksStore = async () => {
    const response = await axios.get('/api/tasks');
    const data = response.data;
    setTasksStore(data);
}