import {ObjectId} from "mongodb";
import {json} from "@sveltejs/kit";
import db from "$lib/server/db.js";

const collection = db.collection('tasks');

/** @type {import('./$types').RequestHandler} */
export async function PATCH ({ request, params }) {
    let requestData = await request.json();
    let taskObj = {
        title: requestData.title,
        completed: requestData.completed
    }
    try {
        console.log(taskObj)
        let response = await collection.updateOne(
            { _id: ObjectId(params.id) },
            { $set: taskObj }
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
    if(ObjectId.isValid(params.id)) {
        try {
            console.log("here");
            let response = await collection.deleteOne({
                _id: ObjectId(params.id)
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