const Koa = require('koa');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const koaLogger = require('koa-logger');

const config = require('./../config');
const routers = require('./routers/index');

const app = new Koa();

//配置控制台日志中间件
app.use(convert(koaLogger()));

//配置ctx.body解析中间件
app.use(bodyParser());

//初始化路由中间件
app.use(convert(routers.routes())).use(routers.allowedMethods);

//监听启动端口
app.listen(config.port);
console.log(`the server is start at port ${config.port}`)