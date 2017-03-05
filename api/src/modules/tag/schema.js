/**
 * tag module schema.
 */
const mongoose = require('mongoose');

module.exports = {

    // 名称
    name: {
        type: String,
        required: true
    },

    // 描述
    description: {
        type: String,
        default: ''
    }

}