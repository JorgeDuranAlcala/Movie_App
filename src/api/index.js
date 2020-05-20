const API_KEY = "c0781656eceec0f77112dad4d0a15de6"
const url = `https://api.themoviedb.org`


    export const fetchMovieData = async (number) => {
        const { results } = 
        await fetch(`${url}/4/list/${number}?api_key=${API_KEY}`, { method: 'get', headers: { "Content-type": "application/json; charset-utf-8" } })
        .then(res => res.json())
        .then(data => data)

            return results
    }

    export const searchMovie = async str => {

        const encode = str => str.replace(/\s/g, '+')
        let query = encode(str);

       const { results } =  await fetch(`${url}/4/search/movie?api_key=${API_KEY}&query=${query}`, 
            { method: 'get', headers: { "Content-type": "application/json; charset-utf-8" } })
            .then(res => res.json())
            .then(data => data)

        return results.filter(movie => movie.poster_path)
    }

    export const getMovieById = async id => {


       const data =  await fetch(`${url}/3/movie/${id}?api_key=${API_KEY}`, 
            { method: 'get', headers: { "Content-type": "application/json; charset-utf-8" } })
            .then(res => res.json())
            .then(data => data)

        return data
    }

