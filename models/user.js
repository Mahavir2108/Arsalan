const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    databases: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Database'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
