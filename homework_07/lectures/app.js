var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;


var indexRouter = require('./routes/index');
const searchRouter = require("./routes/search");

var app = express();
const uri = "mongodb+srv://jagaa:jagaa@cluster0-beeko.mongodb.net/test?retryWrites=true";
let db;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  if (db === undefined) {
    db = new MongoClient(uri, { useNewUrlParser: true });
    db.connect( err => {
      req.db = db;
      next();
    })
  } else {
    req.db = db;
    next();
  }
});

app.use('/', indexRouter);
app.use('/search', searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
app.listen(5000, () => console.log("Listening to 5000"));