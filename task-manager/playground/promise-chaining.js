require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5fa980e871a59b0d1b7abbef', {
    age: 1
}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})