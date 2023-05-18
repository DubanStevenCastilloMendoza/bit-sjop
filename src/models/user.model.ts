import mongoose, { Schema } from "mongoose";

//definir esquema de la colleción

const User = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    edad: {type: Number, required: true},
    email: {type: String, required: true},
    username : {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    active: {type: Boolean, defaultd: false},
    dateBirth: {type: String, required: true},
    address: {type: String, required: true},
    paymentMethods: {type: String, required: true},
    phoneNumber: {type: String, required: true},
},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model("user", User)
