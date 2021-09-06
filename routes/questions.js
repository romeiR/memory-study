'use strict';
var express = require('express');
var router = express.Router();
const Question = require('../models/question');

router.get('/:questionid', (req,res,next) =>{
  Question.findOne({
    where: {
      questionid: req.params.questionid
    },
    order: [['questionname', 'ASC']]
  }).then((question) => {
    console.log(question.questionanswer);
    res.render('question', {
      questions: question
    });
  });
});

router.post(`/:questionid`, function(req,res,next) {
  Question.findOne({
    where: {
      questionid: req.params.questionid
    },
    order: [['questionname', 'ASC']]
  }).then((question) => {
    res.render('question',{
      questions: question,
      questionanswer: req.body
    });
  })
});
module.exports = router;