const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String, require: true },
    slug: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    img: { type: String, require: true },
    category: { type: String, require: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, require: true },
    availbleQty: { type: Number, require: true }
}, { timestamps: true });
mongoose.models = {}
module.exports = mongoose.model("Product", ProductSchema);
//ye products schema ha 
//acha ma apko product insert kr k dikhata hn backend se okay wirte 