/**
 * vote module schema.
 */
const mongoose = require('mongoose');

module.exports = {

    // 关联文章 / 评论
    link_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    // 操作用户
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }

};