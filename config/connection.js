// // Connection
// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };


// async function main() {
// 	const uri = "mongodb+srv://cvanbrock:Password@cop-or-not.rmr20.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// };

//    const client = new MongoClient(uri);
 
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }

// main().catch(console.error);

// git commit -m "fix: refactor hard coded connection string to Heroku config var"

const uri = process.env.MONGODB_URI;

// heroku config:set MONGODB_URI="mongodb+srv://cvanbrock:Password@cop-or-not.rmr20.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"