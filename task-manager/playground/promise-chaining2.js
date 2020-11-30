require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5fa985f122e1880ecdd2cbe6').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})