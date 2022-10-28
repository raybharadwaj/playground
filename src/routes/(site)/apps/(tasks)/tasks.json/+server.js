import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET ({ }) {
    console.log("At GET");
    return json({});
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