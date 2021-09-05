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
    console.log(question.questionname);
    res.render('question', {
      questions: question
    });
  });
});

module.exports = router;