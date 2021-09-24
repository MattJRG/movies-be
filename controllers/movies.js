const movieFilePath = 'data/movies.json';
const movieFile = require(`../${movieFilePath}`);
const fs = require('fs');

module.exports.getMovies = async (req, res) => {
  if (movieFile.movies.length > 0) {
    res.send({movies: movieFile.movies});
  } else {
    res.status(500).send({error: 'Error: No movie data available!'});
  }
}

module.exports.addMovie = async (req, res) => {
  if (req.movie) {
    const newMovie = req.movie;

    movieFile.movies.push(newMovie);

    fs.writeFile(movieFilePath, JSON.stringify(movieFile, null, 2), function writeJSON(err) {
      if (err) {
        return console.error(err);
      } else {
        console.log(`New movie ${newMovie.name} added successfully`);
      }
    })

    res.send({movies: movieFile.movies});
  } else {
    res.status(500).send({error: 'Error: Cannot add movie, data is invalid!'});
  }
}
