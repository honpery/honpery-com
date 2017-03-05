/**
 * user module schema.
 */
const mongoose = require('mongoose');

module.exports = {

    // 用户名
    username: {
        type: String,
        required: true
    },

    // 姓名
    name: {
        type: String,
        defualt: ''
    },

    // 邮箱
    email: {
        type: String,
        default: ''
    },

    // 站点
    website: {
        type: String,
        default: ''
    }

}