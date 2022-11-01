import { json, error } from '@sveltejs/kit';
import db from "$lib/server/db.js";
import {Task} from "$lib/server/models/Task.js";

const collection = db.collection('tasks');

/** @type {import('./$types').RequestHandler} */
export async function GET ({ params }) {
    const data = await collection.find({}).toArray();
    return json(data);
}

/** @type {import('./$types').RequestHandler} */
export async function POST ({ request }) {
    let requestData = await request.json();
    let taskObj = new Task;
    taskObj.title = requestData.body
    try {
        await collection.insertOne(taskObj);
        return json({
            message: "Data Posted",
        });
    } catch(err) {
        return json({
            message: err.message
        })
    }
}