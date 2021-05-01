const express = require('express');
const app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

app.get('/',function(req,res){
    res.sendFile(__dirname+'/data.json')
    res.json({Name:"Waqas"})
})

app.listen(3000,function(){
    console.log('listening on 3000')
})