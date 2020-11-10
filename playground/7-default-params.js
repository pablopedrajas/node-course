//the value = to, is the default argument if it is not provided 
const greeter = (name = 'user', age) => {
    console.log('Hello ' + name)
}

greeter('Andrew', 25)

greeter()