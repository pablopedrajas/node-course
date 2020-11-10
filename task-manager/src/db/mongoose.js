const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        },
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number.')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Your password includes text password in it. Please do not include it.')
            }
        }
    }
})

// const me = new User({
//     name: '     Andrew  ',
//     email: 'MYEMAIL@mead.io',
//     password: '234'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log("------------------")
//     console.log('ERROR', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: 'Learn Node.js'
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log("--------")
    console.log("ERROR")
    console.log("--------")
    console.log(error._message)
})