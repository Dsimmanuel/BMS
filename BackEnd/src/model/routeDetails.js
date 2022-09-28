const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
const routeSchema = new schema({
    routeNo : {type: Number},
    busNo : {type: Number},
    seats : {type: Number},
    image : {data: Buffer,contentType: String},
    boardingPoints : [
        {
        point : {type : String},
        time : {type : Number},
        }
    ]
})
var routeDetails = Mongoose.model("RouteDetails",routeSchema);
module.exports = {routeDetails}