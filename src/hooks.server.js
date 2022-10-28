import { start_mongo } from "$lib/server/db.js";

try {
    await start_mongo();
    console.log('MongoDB Connected');
} catch(err) {
    console.log(err.message)
}
