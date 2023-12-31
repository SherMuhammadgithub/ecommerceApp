// import Product from "@/models/Product"
import User from "@/models/User"
import connectDb from "@/middleware/mongoose"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
// import mongoose from "mongoose"
const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body);
        let user = await User.findOne({ "email": req.body.email })
        const bytes = CryptoJS.AES.decrypt(user.password, "secret123")
        console.log(bytes.toString(CryptoJS.enc.Utf8))
        console.log(bytes.toString(CryptoJS.enc.Utf8))
        let decrpytedPass = bytes.toString(CryptoJS.enc.Utf8);
        console.log(decrpytedPass);
        if (user) {
            if (req.body.email == user.email && req.body.password == decrpytedPass) {

                var token = jwt.sign({ email: user.email, name: user.name }, 'jwtsecret', {
                    expiresIn: "2d"
                });

                res.status(200).json({ success: true, token })
            }
            else {
                res.status(200).json({ success: false, error: "please try to login with valid credentilas" })

            }
        }
        else {
            res.status(200).json({ success: false, error: "No user found" })


        }




    }
    else {

        res.status(400).json({ error: "This method is not allowed " })
    }

}
export default connectDb(handler);