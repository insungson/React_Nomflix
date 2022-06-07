import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a7e53a1c449e667172b82c0149875128",
    language: "en-US"
  }
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  // 아래의 axios get 요청은 '/user?append_to_response=videos'  형식으로 들어가는것과 같다
  movieDetail: (id) => 
    api.get(`movie/${id}`, {
      params: {append_to_response: "videos"}
    }),
  search: (term) => 
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term)
      }
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) => 
    api.get(`tv/${id}`, {params: {
      append_to_response: "videos"
    }}),
  search: (term) => 
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term)
      }
    }),
};