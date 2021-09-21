const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies');

router.get('/',  moviesController.getMovies);

router.post(
  '/', (req, res) => moviesController.addMovie(req, res)
);

module.exports = router;
