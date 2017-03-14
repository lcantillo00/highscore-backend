var express= require('express');
var  app= express();
var bodyParser= require('body-parser');
var mongoose= require('mongoose');
var dbase= 'mongodb://localhost/library';
var score= require('./score.js');

mongoose.connect(dbase);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/score', function(req,res){
    score.find().sort({score: -1})
    .exec(function(err,score){
        if(err){
            console.log("error no conection with db");
        }else{
            res.json(score);
        }
    })
})

app.post('/score', function(req,res){
    var newScore= new score ();
    newScore.player_name= req.body.player_name;
    newScore.score=req.body.score;
    newScore.save(function(err,blog){
        if (err){
            console.log("error no conection with db");
        }else {
            res.json(score);
        }
    })
})

app.get('/score/leaderboard/20',function(req,res){
   score.find().limit(20)
   .exec(function(err,score){
       if(err){
           console.log("error no conection with db");
       }else{
           res.json(score);
       }
   })
})
var port = 8080;
app.listen(port, function (){
    console.log(`listen to port  ${port}`);
});
