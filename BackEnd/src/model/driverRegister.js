const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
const driverSchema = new schema({
    name : {type: String,required :true},
    userName : {type: String,required :true},
    contactNumber :{type: Number,required :true},
    email :{type:String,required :true},
    driverId : {type: Number,required :true},
    routeNo : {type:Number},
    password : {type: String,required :true},
    role: {type:String}
})
var dregister = Mongoose.model("Dregisters",driverSchema);
module.exports = {dregister}