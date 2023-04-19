import { reactive } from "vue";

export const store = reactive({
  apiKey: "18430b617b5eb0b511b28f12abc1f921",
  apiFilms: "https://api.themoviedb.org/3/search/movie",
  apiSeries: "https://api.themoviedb.org/3/search/tv",
  imgUrl: "https://image.tmdb.org/t/p/w342",
  filmsArray: [],
  seriesArray: [],
  currentSearch: "",
});
