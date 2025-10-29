import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Movie from "./Movie";

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    }
    useEffect(() => {
        getMovie();
    }, []);

    return(
        <div>
            <div>{movie.map((movie) => (
                <Movie 
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image} 
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            ))}</div>
        </div>
    );
}
export default Detail;