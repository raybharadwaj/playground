import { json, error } from '@sveltejs/kit';
import db from "$lib/server/db.js";

const collection = db.collection('tests');

/** @type {import('./$types').RequestHandler} */
export async function GET ({ routeId }) {
    const data = await collection.find({}).toArray();
    return json(data);
}

/** @type {import('./$types').RequestHandler} */
export async function POST ({ request }) {
    const requestData = await request.json();

    try {
        await collection.insertOne({
            body: requestData.body,
            completed: requestData.completed
        });
        return json({
            //send success message, on success update store
            message: "Data Posted",
        });
    } catch(err) {
        return json({
            message: err.message
        })
    }
}