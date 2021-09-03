var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var uuid = require('uuid');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var User = require('./models/user.js');
var Score = require('./models/score.js');
var Question = require('./models/question.js');
var Answer = require('./models/answer.js');

User.sync().then(() => {
  Score.belongsTo(User, {foregnKey: 'scoreOf'});
  Score.sync();
});
Question.sync().then(() => {
  for (let w = 0; w < 10; w++) {
    var questionId = uuid.v4();
    var a = Math.floor(Math.random() * 100);
    var b = Math.floor(Math.random() * 10);
    var ab = `${a} * ${b}`;
    Question.create({
      questionId: questionId,
      questionname: ab,
      questionTen: b,
      questionHandred: a
    }).then((question) => {
      console.log(question);
    });
  }
  Answer.belongsTo(Question, {foregnKey: 'questionId'});
  Answer.sync().then(() => {
    Question.findAll({
      order: [['questionname','ASC']]
    }).then((question) => {
      var answerId = uuid.v4();
      var answername = question.questionTen * question.questionHandred;
      Answer.create({
        answerId: answerId,
        questionId: question.questionId,
        answername: answername
      });
    });
  });
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;
