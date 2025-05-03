const API_KEY = "1fb20a606a8304ac19729100e0a63db9";
const BASE_URL = "https://api.themoviedb.org/3";
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmIyMGE2MDZhODMwNGFjMTk3MjkxMDBlMGE2M2RiOSIsIm5iZiI6MTc0NTk1NDgxNy45OTEwMDAyLCJzdWIiOiI2ODExMjgwMWViMWQ0YjA2ZGUwZmU4YmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Pi7u2c0IBqBe6ea0OictFfxjRa1rmiQGviIIHo6r56M'
  }
};

export const getPopularShows = async () => {
    const responsePage1 = await fetch('https://api.themoviedb.org/3/trending/tv/week?language=en-US', options)
    const responsePage2 = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&page=2`);
    const responsePage3 = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}&page=3`);
    
  
    const dataPage1 = await responsePage1.json();
    const dataPage2 = await responsePage2.json();
    const dataPage3 = await responsePage3.json();
  
    // Combine the results from pages
    return [...dataPage1.results, ...dataPage2.results, ...dataPage3.results];
  }
export const getPopularMovies = async () => {
    const responsePage1 = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
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