import db from "$lib/server/db.js";
import {json} from "@sveltejs/kit";
import {ObjectId} from "mongodb";

const collection = db.collection('tests');

/** @type {import('./$types').RequestHandler} */
export async function GET ({ routeId, params, url }) {
    if(ObjectId.isValid(params.slug)) {
        // let searchParamsObj = {};
        // for (const [key, value] of url.searchParams.entries()) {
        //     searchParamsObj[key] = value
        // }

        let searchParams = Object.fromEntries(url.searchParams.entries());

        const data = await collection.find({
            _id: ObjectId(params.slug)
        }).toArray();

        return json({
            urlData: {
                method: "GET",
                routeId,
                params,
                url,
                origin: url.origin,
                hostname: url.hostname,
                port: url.port,
                pathname: url.pathname,
                searchParamsString: url.search,
                searchParams
            },
            data
        });
    } else {
        return json({
            message: "Invalid Object Id"
        })
    }

}

/** @type {import('./$types').RequestHandler} */
export async function PUT ({ routeId }) {
    //Replace record
    return json({
        message: "At /test/slug PUT"
    });
}

/** @type {import('./$types').RequestHandler} */
export async function PATCH ({ request, params }) {
    const requestData = await request.json();
    try {
        let response = await collection.updateOne(
            { _id: ObjectId(params.slug) },
            { $set: requestData }
        );
        return json({
            message: "Updated Test",
            response
        });
    } catch(err) {
        return json({
            message: err.message
        });
    }
}

/** @type {import('./$types').RequestHandler} */
export async function DELETE ({ params }) {
    if(ObjectId.isValid(params.slug)) {
        try {
            let response = await collection.deleteOne({
                _id: ObjectId(params.slug)
            })

            return json({
                message: "Deleted Post",
                response
            });
        } catch(err) {
            return json({
                message: err.message
            });
        }


    } else {
        return json({
            message: "Invalid Object ID"
        });
    }
}