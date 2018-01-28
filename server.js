const express = require('express');
const fs = require('fs');
const path = require('path');
var build = __dirname + "/build/";

const app = express();

// Serve built files with static files middleware
app.use('/', express.static(build));

// Serve requests with our handleRender function
app.get('*', function(req,res){
    console.log(req.url);
    if(req.url.indexOf('.') > -1){
        console.log("inside dot");
        res.sendFile(path.join(build + req.url));
    }else{
        res.sendFile(path.join(build + "index.html"));
    }
});

// Start server
app.listen(3000);