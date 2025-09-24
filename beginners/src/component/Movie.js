import PropTypes from "prop-types";

function Movie({ title, coverImg, summary, genres}) {
    return(
        <div>
            <h2>{title}</h2>
            <img src={coverImg} alt=""/>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;