const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
const complaintSchema = new schema({
    happend : {type: String,required :true},
    right : {type: String,required :true},

})
var complaint = Mongoose.model("complaints",complaintSchema);
module.exports = {complaint}