const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
const registerSchema = new schema({
    name : {type: String,required :true},
    userName : {type:String,required:true},
    registerNumber : {type: Number,required :true},
    address : {type: String,required :true},
    department : {type: String,required :true},
    semester :{type: Number,required :true},
    email :{type:String,required :true},
    boardingPoint : {type: String,required :true},
    password : {type: String,required :true},
    routeNo : { type: Number}
})
var register = Mongoose.model("registers",registerSchema);
module.exports = {register}