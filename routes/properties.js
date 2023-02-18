const mongoose = require("mongoose");
var plm = require("passport-local-mongoose");

var propertiesSchema = mongoose.Schema({
    ownerId:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    propertyDescription:{
        type:String,
        default:""
    },
    propertyAddress:{
        type:String,
        default:""
    },
    latitudeAndLongitude:{
       direction: {
            latitude:Number,
            longitude:Number
        }
    },
    //monthly price
    price:Number,
    addOnAmenities:[{
        type:String
    }],
    propertyType:{
        type:String,
        default:"House"
    },
    wishlist:[{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }],
    //accessibilty for disable
    accessibility:{
        type:Boolean,
        default:false
    },
    //nonfurnished,semi-furnished,well-furnished
    furnishedType:String,
    reviewAndRatings:[{
        rating_author:{
           type:mongoose.Types.ObjectId,
            ref:"user",
        },
        review:String,
        rating:Number
    }],
    houseRules:[{
        type:String
    }],
    bedrooms:{
        type:Number,
        default:0
    },
    beds:{
        type:Number,
        default:0
    },
    floor:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        default:"Available"
    }

});

module.exports = mongoose.model("Properties" , propertiesSchema);