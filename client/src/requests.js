const API_key = '19f84e11932abbc79e6d83f82d6d1045';
const begginingOfUrl = 'https://api.themoviedb.org/3';

// const requests = {
//     fetchTrending: `${begginingOfUrl}/trending/all/week?api_key=${API_key}&language=en-US`,
//     fetchNetflixOriginals: `${begginingOfUrl}/discover/tv?api_key=${API_key}&with_networks=213`,
//     fetchTopRated: `${begginingOfUrl}/movie/top_rated?api_key=${API_key}&language=en-US`,
//     fetchActionMovies: `${begginingOfUrl}/discover/movie?api_key=${API_key}&with_ganres=28`,
//     fetchComedyMovies: `${begginingOfUrl}/discover/movie?api_key=${API_key}&with_ganres=35`,
//     fetchHorrorMovies: `${begginingOfUrl}/discover/movie?api_key=${API_key}&with_ganres=27`,
//     fetchRomanceMovies: `${begginingOfUrl}/discover/movie?api_key=${API_key}&with_ganres=10749`,
//     fetchDocumentarMovies: `${begginingOfUrl}/discover/movie?api_key=${API_key}&with_ganres=99`,
// }

const requests = [
    `${begginingOfUrl}/trending/all/week?api_key=${API_key}&language=en-US`,
    `${begginingOfUrl}/discover/tv?api_key=${API_key}&with_networks=213`,
    `${begginingOfUrl}/movie/top_rated?api_key=${API_key}&language=en-US`,
    `${begginingOfUrl}/discover/movie?api_key=${API_key}&with_genres=80`,
    `${begginingOfUrl}/discover/movie?api_key=${API_key}&with_genres=35`,
    `${begginingOfUrl}/discover/movie?api_key=${API_key}&with_genres=27`,
    `${begginingOfUrl}/discover/movie?api_key=${API_key}&with_genres=10749`,
    `${begginingOfUrl}/discover/movie?api_key=${API_key}&with_genres=99`,
]

export default requests;