var express = require('express');
var app = express();
var env = require("./config/"+process.env.NODE_ENV)
const port = env.port;
app.get('/environment',(req,res)=>{
    res.send({
        code:200,
        msg:process.env.NODE_ENV
    })
})
app.listen(port,() => {
    console.log("server running on"+"--"+process.env.NODE_ENV);

});