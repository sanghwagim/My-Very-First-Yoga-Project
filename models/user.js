const mongoose = require('mongoose');

const { Schema } = mongoose;

userSchema = new Schema({ 
    name : String,
    password: {
        type: String,
        required : true
    }
})


const user = mongoose.model('User', userSchema);

module.exports = user;

