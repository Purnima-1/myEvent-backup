import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    image1: {
      type: String,
      required: true,
    },
       
    description: {
      type: String,
      required: true,
    },
    schedule: {
        type: String,
      required: true
    },
    Address: {
      type: String,
      required:true
      
    },
    // reviews: [reviewSchema],

    price: {
      type: String,
      required: true
      
    },
    adtprice: {
      type: Number
     
      
    },
    kidprice: {
      type: Number
         },
    name: {
      type: String,
      required: true,
    },
    followers:{
      type: String,
      required: true
    
    },
    tickets: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Events = mongoose.model("Events", eventSchema);
export default Events;
