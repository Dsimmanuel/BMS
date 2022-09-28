const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
const boardingPoint = new schema({
   point : {type: String},
   time  : {type:Number}
})
var BPoint = Mongoose.model("bPoint",boardingPoint);
module.exports = {BPoint}