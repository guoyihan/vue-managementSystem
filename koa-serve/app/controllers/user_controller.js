const User_col = require('../models/user')
const get = async (ctx, next) => {
    ctx.status = 200
    ctx.body = {
        msg: 'get request',
        data: {
            data: 'hello world'
        }
    }
}
// 登录
const login = async (ctx, next) => {
    const req = ctx.request.body

    ctx.status = 200
    ctx.body = {
        code: 1,
        msg: '登陆成功',
        data: req
    }
    // 获取用户userId
    // const user = await User_col.find({
    //     name: req.name,
    //     pass: req.pass
    // }, {
    //     __V: 0,
    //     _id: 0
    // })
    // if(!user) {
    //     ctx.status = 200
    //     ctx.body = {
    //         code: 0,
    //         msg: 'name or password error'
    //     }
    //     return
    // }
    // const username = user.name
    // const userpass = user.pass
    // ctx.status = 200
    // ctx.body = {
    //     code: 1,
    //     msg: '登陆成功'
    // }

    
}


module.exports = {
    get,
    login
}