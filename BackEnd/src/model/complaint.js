const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
const complaintSchema = new schema({
    userName : {type:String},
    registerNumber : {type: String},
    date : {type: String},
    happend : {type: String,required :true},
    right : {type: String,required :true},
    reply : {type: String}
})
var complaint = Mongoose.model("complaints",complaintSchema);
module.exports = {complaint}