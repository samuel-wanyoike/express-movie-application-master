//import service layer
const moviesService = require('movieservice')

const getMovies = (done) => {
//call service method getMovies method
 moviesService.getMovies(done)
}

const getMovieById = (movieId, done) => {
    //call service method getMovieById method
    moviesService.getMovieById(movieId, done)
}

const saveMovieDetails = (movieDetails, done) => {
  //call service method saveMovieDetails method
  moviesService.saveMovieDetails(movieDetails, done)
}

const updateMovieDetails = (movieId, movieDetails, done) => {
  //call service method updateMovieDetails method
  moviesService.updateMovieDetails(movieId, movieDetails, done)
}

const deleteMovieById = (movieId, done) => {
  //call service method deleteMovieById method
  moviesService.deleteMovieById(movieId, done)
}

module.exports = {
  getMovies, getMovieById, saveMovieDetails, updateMovieDetails, deleteMovieById
}
