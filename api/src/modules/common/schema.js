/**
 * common schema.
 */
module.exports = {

    // 创建时间
    create_time: {
        type: Date,
        defualt: Date.now
    },

    // 更新时间
    update_time: {
        type: Date,
        default: Date.now
    },

    // 逻辑删除
    delete: {
        type: Boolean,
        default: false
    }

};