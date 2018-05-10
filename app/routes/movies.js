import Route from '@ember/routing/route';

export default Route.extend({
  buildMovies() {
    let movies = [];
    for (let i = 0; i < 100; i++) {
      movies.push({name: "Movie " + i});
    }
    console.log( 'you found the puppy!!! 🐶'  );
    return movies;
  },

  model() {
    this.set('movies', this.buildMovies())
    return this.get('movies');
  }
});
