const Koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyParser')
const mongoose = require('mongoose')
const config = require('./config')

const app = new Koa()


// 建立mongo连接
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
    if(err) {
        console.log('Faied to connect to db');
    } else {
        console.log('Connecting db successfully');
    }
})


app.use(cors())
app.use(bodyParser())



const user_router = require('./routes/api/user_router')

app.use(user_router.routes()).use(user_router.allowedMethods())


app.listen(config.port)