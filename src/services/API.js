const API_KEY = "1fb20a606a8304ac19729100e0a63db9";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const responsePage1 = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const responsePage2 = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=2`);
    const responsePage3 = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=3`);
  
    const dataPage1 = await responsePage1.json();
    const dataPage2 = await responsePage2.json();
    const dataPage3 = await responsePage3.json();
  
    // Combine the results from pages
    return [...dataPage1.results, ...dataPage2.results, ...dataPage3.results];
  };


export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};