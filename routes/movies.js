var express = require('express');
var router = express.Router();
var moviescontroller=require('../controller/moviecontroller');

/* GET users listing. */
router.get('/all', moviescontroller.getAllMovies)
  .post('/add',moviescontroller.addNewMovie);


module.exports = router;
