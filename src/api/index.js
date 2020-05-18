const API_KEY = "c0781656eceec0f77112dad4d0a15de6"
const url = `https://api.themoviedb.org/4`


    export const fetchMovieData = async () => {
        const { results } = 
        await fetch(`${url}/list/1?api_key=${API_KEY}`, { method: 'get', headers: { "Content-type": "application/json; charset-utf-8" } })
        .then(res => res.json())
        .then(data => data)

            return results
    }

    export const searchMovie = async str => {

        let query = encode(str);

       const { results } =  await fetch(`${url}/search/movie?api_key=${API_KEY}&query=${query}`, 
            { method: 'get', headers: { "Content-type": "application/json; charset-utf-8" } })
            .then(res => res.json())
            .then(data => data)

        return results.filter(movie => movie.poster_path)
    }


    const encode = str => str.replace(/\s/g, '+')