const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
const boardingPoint = new schema({
   routeNo :{type : String},
   stopNo : {type : String},
   point : {type: String},
   time  : {type: String}
})
var BPoint = Mongoose.model("bPoint",boardingPoint);
module.exports = {BPoint}