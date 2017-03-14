var mongoose= require('mongoose');
var schema= mongoose.Schema;
var scoreSchema= new schema({
    player_name: String,
    score: Number

});
module.exports= mongoose.model('score', scoreSchema)
