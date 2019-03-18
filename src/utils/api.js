const API = 'https://yts.am/api/v2/'

class Api {

  async getSuggestions( id ){
    const query = await fetch(`${ API }movie_suggestions.json?movie_id=${ id }`);
    const { data } = await query.json();
    return data.movies
  } 
  
  
  async getMovies( id ){
    const query = await fetch(`${ API }list_movies.json`);
    const { data } = await query.json();
    return data.movies
  } 

}

export default new Api