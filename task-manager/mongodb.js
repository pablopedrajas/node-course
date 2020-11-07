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

    // db.collection('tasks').findOne({_id: new ObjectId("5fa6b13f0020b634743a0be8")}, (error, task) => {
    //     if(error) {
    //         return console.log(error)
    //     }
    //     console.log(task)
    // })

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    })
})