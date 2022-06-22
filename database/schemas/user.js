const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: String,
    invites: Number,
    inviter: Object
});

const user = mongoose.model('user', userSchema, 'userData');

module.exports = user;