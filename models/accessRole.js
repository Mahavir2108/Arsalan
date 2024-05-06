const mongoose = require('mongoose');

const accessRoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    permissions: {
        type: [String],
        required: true
    }
});

const AccessRole = mongoose.model('AccessRole', accessRoleSchema);

module.exports = AccessRole;
