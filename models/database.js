const mongoose = require('mongoose');

const databaseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    instance: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instance',
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Database = mongoose.model('Database', databaseSchema);

module.exports = Database;
