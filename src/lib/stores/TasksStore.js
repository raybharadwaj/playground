import { writable } from "svelte/store";
import axios from "axios";

export const TasksStore = writable([])

export const setTasksStore = (data) => {
    TasksStore.update(() => {
        return data.reverse();
    })
}

export const updateTasksStore = async () => {
    const response = await axios.get('/api/tasks');
    const data = response.data;
    setTasksStore(data);
}