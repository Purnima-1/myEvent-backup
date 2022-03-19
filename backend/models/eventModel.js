import mongoose from "mongoose";

const productSchema = mongoose.Schema(
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
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],

    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    adtprice: {
      type: Number,
      required: true,
      default: 0,
    },
    kidprice: {
      type: Number,
      required: true,
      default: 0,
    },
    name: {
      type: String,
      required: true,
    },
    followers:{
      type: Number,
      required: true,
      default: 0
    },
    tickets: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productSchema);
export default Products;
