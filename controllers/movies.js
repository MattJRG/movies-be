let movies = [
  {
    name: 'Terminator',
    releaseYear: 1984,
    mainActor: 'Arnold Schwarzenegger',
    length: 107,
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRHzSaUCOKu1RwS-bfbaUeeo_I1JcBkiuJRjBElvJi7qsHXkUkJ'
  },
  {
    name: 'Avatar',
    releaseYear: 2009,
    mainActor: 'Sam Worthington',
    length: 162,
    image: 'https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg'
  },
  {
    name: 'Casino Royale',
    releaseYear: 2006,
    mainActor: 'Daniel Craig',
    length: 144,
    image: 'https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg'
  },
];

module.exports.getMovies = async (req, res) => {
  if (movies) {
    res.send({movies: movies});
  } else {
    res.status(500).send({error: 'Error: No movie data available!'});
  }
}

module.exports.addMovie = async (req, res) => {
  if (req.movie) {
    movies.push(req.movie);
    res.send({movies});
  } else {
    res.status(500).send({error: 'Error: Cannot add movie, data is invalid!'});
  }
}
