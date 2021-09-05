var express = require('express');
var router = express.Router();
const Question = require('../models/question');
/* GET home page. */
router.get('/', function(req, res, next) {
  Question.findAll({
    order: [['questionname','DESC']]
  }).then(question => {
    res.render('index', {
      title: 'Express',
      questions: question
    });
    res.render('../public/javascripts/test');
  })
});


module.exports = router;
