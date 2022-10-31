import { json, error } from '@sveltejs/kit';
import db from "$lib/server/db.js"

const collection = db.collection('tasks');

/** @type {import('./$types').RequestHandler} */
export async function GET ({ params }) {

        const data = await collection.find({}).toArray();
        return json(data.reverse());

}

/** @type {import('./$types').RequestHandler} */
export async function POST ({  }) {

    console.log("At /tests POST");
    return json({});
}