/**
 * password schema
 */
const mongoose = require('mongoose');

module.exports = {

    // 关联用户id
    link_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    // 密文
    password: {
        type: String,
        required: true
    }

};