export const searchMovies = async ({search}) => {
    const api = `https://www.omdbapi.com/?i=tt3896198&apikey=6678b114&s=${search}`

    if (search==='') return null

    try {
        const response = await fetch(api)
        const json = await response.json()

        const movies = json.Search
  
        return movies?.map(movie=>({
         id: movie.imdbID,
         title: movie.Title,
         year: movie.Year,
         poster: movie.Poster
        }))

    }

    catch(e) {
        throw new Error('Error searching movie')
    }
    

}