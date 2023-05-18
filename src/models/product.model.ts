import mongoose, { Schema } from "mongoose";

//definir esquema de la colleción

const Product = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    price : {type: Number, required: true},
    stock: {type: Number, required: true},
    category: {type: String, required: true},
    description: {type: Boolean, default: false},
    images: {type: String, required: true},
},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model("product", Product)
