import { json } from '@sveltejs/kit';
import db from "$lib/server/db.js"

/** @type {import('./$types').RequestHandler} */
export async function GET ({ }) {
    const data = await db.collection('tasks').find({}).toArray();

    return json({
        data
    });
}

/** @type {import('./$types').RequestHandler} */
export async function POST ({ }) {
    console.log("At POST");
    return json({});
}

/** @type {import('./$types').RequestHandler} */
export async function PUT ({ }) {
    console.log("At PUT");
    return json({});
}

/** @type {import('./$types').RequestHandler} */
export async function PATCH ({ }) {
    console.log("At PATCH");
    return json({});
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE ({ }) {
    console.log("At DELETE");
    return json({});
}