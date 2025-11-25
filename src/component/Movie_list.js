import {useEffect, useState} from "react";
import Movie from "./Movie";

function Movie_list() {
    const [loading, setLoading] = useState(true);
    //입력되는 영화 데이터들을 담는 배열
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.0&sort_by=year`
      )).json();
      setMovies(json.data.movies);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // 2초 동안 Loading 유지
      };
    useEffect(() => {
      getMovies();
    }, []);
  console.log(movies);
  return (
    <div>
      {loading ? <h1>Loading...</h1> :
      <div>{movies.map((movie) => (
        <Movie 
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image} 
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      ))}</div>}
    </div>
  );
}
export default Movie_list;