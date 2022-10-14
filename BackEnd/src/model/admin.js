const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
const adminSchema = new schema({
    userName : {type:String},
    email : {type:String},
    password : {type:String},
    role : {type:String}
})
var Admin = Mongoose.model("admin",adminSchema);
module.exports = {Admin}