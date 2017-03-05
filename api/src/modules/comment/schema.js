/**
 * comment module schema.
 */
const mongoose = require('mongoose');

module.exports = {

    // 关联文章 / 评论
    link_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    // 发布用户
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    // 内容
    content: {
        type: String,
        required: true
    }

};