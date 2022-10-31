import { redirect } from '@sveltejs/kit';
import {setTasksStore} from "$lib/stores/TasksStore.js";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    try {
        let response = await fetch('/api/tasks');
        let responseData = await response.json();
        setTasksStore(responseData);

    } catch(err) {
        // throw redirect(404, '/');
        console.log(err.message);
    }
}