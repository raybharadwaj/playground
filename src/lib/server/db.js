import { MongoClient } from 'mongodb';
const uri = "mongodb://raybharadwaj:Lossantos12@ac-bavvo1i-shard-00-00.32zvdov.mongodb.net:27017,ac-bavvo1i-shard-00-01.32zvdov.mongodb.net:27017,ac-bavvo1i-shard-00-02.32zvdov.mongodb.net:27017/?ssl=true&replicaSet=atlas-fc6pz2-shard-0&authSource=admin&retryWrites=true&w=majority";
const client = new MongoClient(uri);


export default client.db('playground');

export function start_mongo() {
    console.log('Starting MongoDB');
    try {
        return client.connect();
    } catch(err) {
        console.log(err.message);
    }
}