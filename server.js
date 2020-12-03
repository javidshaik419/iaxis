var express = require('express');
var app = express();
var env = require("./config/"+process.env.NODE_ENV)
const port = env.port;

var routers = require('./src/routes/index');
//Initiallize Route
routers.initialize(app);
// hello
app.get('/environment',(req,res)=>{
    res.send({
        code:200,
        msg:process.env.NODE_ENV
    })
})
// djsoijvio
app.listen(port,() => {
    console.log("server running on"+"--"+process.env.NODE_ENV);

});