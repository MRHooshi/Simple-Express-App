const express = require('express')
const jsonfile = require('jsonfile')

const app = express()

let path = './data.json'
let objects = jsonfile.readFileSync(path);
console.log(objects)

app.get('/' , (req , res ) => {
    res.send(objects)
})

app.listen(3000,() => console.log('listen on port 3000'))