const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true }
}, { timestamps: true });
mongoose.models = {};


export default mongoose.model("User", UserSchema);
//harry ne oper line ma usr ki jga product likha ha