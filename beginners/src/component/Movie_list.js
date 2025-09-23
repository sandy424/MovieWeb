import {useEffect, useState} from "react";

function Movie_list() {
    const [loading, setLoading] = useState(true);
    //입력되는 영화 데이터들을 담는 배열
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const json = await (await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )).json();
      setMovies(json.data.movies);
      setTimeout(() => {
        setLoading(false);
      }, 2000); // 2초 동안 Loading 유지
      };
    useEffect(() => {
      getMovies();
    }, []);

  console.log(movies);
  return (
    <div>
      {loading ? <h1>Loading...</h1> :
      <div>{movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img src={movie.medium_cover_image} alt=""/>
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      ))}</div>}
    </div>
  );
}
export default Movie_list;