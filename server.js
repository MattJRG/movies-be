const express = require('express');
const app = express();
const cors = require('cors');
const port = 6700;

app.use(express.json());

app.use(cors());

const movies = require('./routes/movies');

app.use('/', movies);

app.listen(port, () => {
  console.log(`Movies BE is running at http://localhost:${port}`);
});
