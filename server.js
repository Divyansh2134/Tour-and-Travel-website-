const express=require('express');

const app=express();
app.use(express.static('public'));


app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html')
})





var server=app.listen(process.env.PORT || 3000,function(){
  console.log("server is running")
})
