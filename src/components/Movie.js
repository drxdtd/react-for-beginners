import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../Home.module.css";

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div className={styles.M1}>
      <h2>
        <Link to={`/movie/${id}`}> {title}</Link>{" "}
      </h2>
      <img src={coverImg} alt={title}></img>
      <p id={styles.M2}>Summary:</p> <p> {summary}</p>
      <ul>
        Genres:{" "}
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
