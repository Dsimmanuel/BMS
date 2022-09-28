const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
const requestSchema = new schema({
    name : {type: String,required :true},
    userName : {type:String,required:true},
    registerNumber : {type: Number,required :true},
    address : {type: String,required :true},
    department : {type: String,required :true},
    semester :{type: Number,required :true},
    email :{type:String,required :true},
    boardingPoint : {type: String,required :true},
    password : {type: String,required :true},
})
var request = Mongoose.model("requests",requestSchema);
module.exports = {request}