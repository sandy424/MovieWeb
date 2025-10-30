import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import style from '../style/Movie.css';

function Movie({ id, title, coverImg, year, summary, genres}) {
    console.log({id, title, coverImg, year, summary, genres});
    return(
        <div className={style.movie}>
            <Link to={`/movie/${id}`}>
                <img src={coverImg} alt={title} className={style.movie_img}/>
            </Link>
            <div>
                <h2 className={style.movie_title}>
                <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3>{year}</h3>
                <p>{summary.length>235 ? `${summary.slice(0,235)}...` : summary}</p>
                <ul className={style.movie_genres}>
                    {genres.map((g) => (
                    <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Movie;