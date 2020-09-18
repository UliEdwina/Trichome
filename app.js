var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')
var indexRouter = require('./routes/index');
const messageRouter = require('./routes/message');

const buildPath = "client/dist";

require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=> console.log('MONGO-ON'))
    .catch (err => console.log('Error'))
let app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, buildPath)));
app.use(cors());
app.use('/', indexRouter);
app.use('/message', messageRouter);

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
app.all("*", (req, res) => {
    res.sendFile(`${__dirname}/${buildPath}/index.html`);
  });

  const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App Listening on Port 3000");
});

module.exports = app;
