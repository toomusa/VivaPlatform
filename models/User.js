const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");

const validateEmail = email => {
    return validator.isEmail(email);
}

const UserSchema = new Schema ({
    fname: { type: String, default: "n/a" },
    lname: { type: String, default: "n/a" },
    title: { type: String, default: "n/a" },
    org: { type: String, default: "n/a" },
    focus: { type: String, default: "n/a" },
    regtype: { type: String, default: "n/a" },
    lang: { type: String, default: "en" },
    city: { type: String, default: "SF" },
    state: { type: String, default: "CA" },
    cell: { type: Number, default: 000},
    bday: { type: Date, default: 0000-00-00},
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate: [
            validateEmail,
            "Please enter a valid email address"
        ]
    },
    password: {
        type: String,
        required: true
    },
    journey: {
        type: Schema.Types.ObjectId,
        ref: "Journey"
    }
})

UserSchema.pre("save", async function(next) {
    const user = this;
    try { 
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch(e) {
        return next(e);
    }
})

// methods attach to each instance of a document when queried 
UserSchema.methods.comparePassword = async function(candidatePassword, callback){
    const user = this;
    try {
        // compare entered password to existing password
        const isMatch = await bcrypt.compare(candidatePassword, user.password);
        // first parameter is error, second is response object (user or false)
        callback(null, isMatch);
    } catch(e) {
        callback(e);
    }
}

const User = mongoose.model("User", UserSchema);

module.exports = User;