import Route from '@ember/routing/route';

export default Route.extend({
  buildMovies() {
    let movies = [];
    for (let i = 0; i < 100; i++) {
      movies.push({name: "Movie " + i});
    }
    return movies;
  },

  model() {
    this.set('movies', this.buildMovies())
    return this.get('movies');
  }
});
