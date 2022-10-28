// import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    let request = await fetch('/apps/tasks.json');
    let response = await request.json();
    let tasksData = response.data;

    return {
        tasksData
    }
}