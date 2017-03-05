/**
 * article module schema.
 */
const mongoose = require('mongoose');

module.exports = {

    // 标题
    title: {
        type: String,
        required: true
    },

    // 描述
    description: {
        type: String,
        default: ''
    },

    // 正文
    body: {
        type: String,
        required: true
    },

    // 访问量
    pv: {
        type: Number,
        default: 0,
        min: 0
    },

    // 访客数
    uv: {
        type: Number,
        default: 0,
        min: 0
    }

};