var router = require('express').Router();
let test = require('../models/test.model');

router.route('/').get((req, res) => {
  test.find()
    .then(tests => res.json(tests))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const name = req.body.name;
  const questionone = req.body.questionone;
  const questiontwo = req.body.questiontwo;
  const questionthree = req.body.questionthree;

  const newtest = new test({
    name,
    questionone,
    questiontwo,
    questionthree,
  });


  newtest.save()
  .then(() => res.json('Test added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
  test.findByIdAndDelete(req.params.id)
    .then(() => res.json('Test deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').get((req, res) => {
    test.findById(req.params.id)
      .then(exercise => res.json(test))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  
  
  router.route('/update/:id').post((req, res) => {
    test.findById(req.params.id)
      .then(test => {
        test.name = req.body.name;
        test.questionone = req.body.questionone;
        test.questiontwo = req.body.questiontwo;
        test.questionthree = req.body.questionthree;
  
        test.save()
          .then(() => res.json('Test updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;

