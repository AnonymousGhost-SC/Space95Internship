# json

it is purely data and it is used for storing and retrieving data, it basically works like objects in javascript, it uses double quotations for both keys and values

{
"name": "Alice",
"age": 30
}

this is an sample code in json this is how it looks


# Types of HTTP request calls

So http is a request call that we make to the server, there are different types of requests calls like get, put, post, fetch and delete
  

**Get** request is for get resources from the server, it should only fetch data from the server, it cant alter the stored data

We can go to any websites and see the request call that were made to their server, header tab will show you the type of request call that was made to the server

**Post** request is to send some data to the server like when we update our username or upload a file to the website



# Setting up an Server using express js

```jsx
const express = require('express')
// create a express variable, and Import Express with in it

const app = express()
// create a app variable and call the express function with in
const port = 3000;
// set a port number

app.get('/',(req, res) => {
// make a get request call for the app 
    console.log('here')
    res.send(hello.world)
})

app.listen(port, () => {
// make a listen call for setting up your port
    console.log(`Example app listening on port ${port}`)
})

```

 // Creating  and setting up routes

const express = require(’express’)

const router = express.Router()

router.get(’/’, (req,res) ⇒ {

res.send(”user name files”)

})

app.get (’/’, (req,res) ⇒ {

res.send(”go to home page”)

})

app.post(’/’, (res,req) ⇒ {

res.send(”create username”)

})
