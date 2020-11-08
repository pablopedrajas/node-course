// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID, ObjectId} = require('mongodb') //this is a short way of grabbing the above consts. "destructuring"

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID();

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('There was an ERROR connecting to the database.')
    }

    const db = client.db(databaseName)

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5fa583a527168f5b12bdf7ca")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({
        completed:true
    }, {
        $set: {
            completed: false
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log('Error', error)
    })
})