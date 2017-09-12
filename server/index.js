import express from 'express'
import { Nuxt, Builder } from 'nuxt'
// var cookieParser = require('cookie-parser');
import axios from 'axios'
import * as HOST from '../assets/js/config_server.js'
// var redis = require("redis")
// var client = redis.createClient();
// client.on("error", function(error) {
//     console.log(error);
// });
 
  
// 注：配置里的日志目录要先创建，才能加载配置，不然会出异常  

// var logger1 = log4js.getLogger('category1');
// var logger2 = log4js.getLogger('category2');
// logger1.debug("Time:", new Date());
// logger1.trace("Time:", new Date());
// logger2.debug("Time:", new Date());


import api from './api'

const app = express()


// const log4js = require('log4js');
// log4js.configure({
//   appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
//   categories: { default: { appenders: ['cheese'], level: 'error' } }
// });

// const logger = log4js.getLogger('cheese');
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');



const host = process.env.HOST || '127.0.0.1'
// const host = '192.168.1.165'
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes
app.use('/api', api)
// app.use(cookieParser());
// app.use(expressSession());
// app.use(cookieSession());

// app.get('/setloginCode',function(req,res){
// 	// var SSONAME = req.cookies.SSONAME||'a';
// 	// var SSONAME = req.cookies;
// 	// var session = req.session;
// 	var session = req.headers;
// 	var cookies = req.query;
// 	// console.log(req.cookies)
// 	SSONAME = req.query.SSONAME||''
// 	MEMBERTGC = req.query.MEMBERTGC||''
// 	// var SSONAME = req.session.SSONAME;
// 	// var SSONAME = req.signedCookies.SSONAME;
// 	// var SSONAME = {a:'a'};
//   // res.json({data:SSONAME,session:session})
//  //  	client.hmset('cookies', { SSONAME: SSONAME, MEMBERTGC: MEMBERTGC }, function(err) {
// 	//   console.log(err)
// 	// })
//   res.json({data:session,cookies:cookies})
//   // res.json({data:'o'})
// })


// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
