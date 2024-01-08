import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [load, setLoad] = useState(true);
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoad(false);
    console.log(json.data.movie.title);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);
  return load === true ? (
    "true"
  ) : (
    <div>
      <div>Title: {movie.title}</div>
      <div>Language: {movie.language}</div>
      <div>Rating: {movie.rating}</div>
      <div>Year: {movie.year}</div>
      <div>
        Runtime: {Math.round(movie.runtime / 60)} h {movie.runtime % 60} m
      </div>
      <img src={movie.large_cover_image}></img>
    </div>
  );
}
export default Detail;
