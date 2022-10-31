import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    try {
        let response = await fetch('/apps/tasks.json');
        let responseData = await response.json();
        let tasksData = responseData.data;
        return {
            tasksData
        }
    } catch(err) {
        throw redirect(404, '/');
    }
}