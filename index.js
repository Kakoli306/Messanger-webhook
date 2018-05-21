'use strict';

const token = process.env.FB_PAGE_ACCESS_TOKEN

//Import dependencies and set up http server
const
    express = require('express'),
    bodyParser = require('body-parser'),
     request = require('request'),

    app = express()

        app.set('port',(process.env.PORT || 5000)) //creates express http server

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application json
app.use(bodyParser.json())

//ROUTES
app.get('/',function (req,res) {
    res.send("Hi I am a chatbot")

})

//Facebook
app.get('/webhook/', function (req,res) {
    if(req,query['hub.verify_token'] === "messaging"){
        res.send(req.query['hub.challanges'])
    }else{
        res.send("wrong token")
    }
})
app.listen(app.get('port'),function () {
    console.log("running: port")
} )

