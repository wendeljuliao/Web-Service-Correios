var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookieparser')
var logger = require('morgan')

var indexRouter = require('./routes/index.js')

var app = express()
app.use('/', indexRouter)
app.listen(8000)