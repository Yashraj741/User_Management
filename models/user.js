let mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/app1");
const userSchema = mongoose.Schema({
    Name:String,
    Email:String,
    ImageUrl:String, 
});
module.exports = mongoose.model("User", userSchema);