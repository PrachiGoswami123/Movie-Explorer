import { useState, useEffect } from "react";
import { getTrendingMovies } from "../services/apiservices";
import { Link } from "react-router-dom";

function Home() {
  let [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        console.log(data);
        setMovies(data.slice(0, 8));
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2 className="p-4">Loading Movies...</h2>;
  }

  return (
    <div className="p-6">
      <div className="bg-gray-900 text-white p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold">Welcome to Movie Explorer</h1>
        <p className="mt-3">Discover Trending and Popular Movies</p>
        <Link
          to="/movies"
          className="bg-red-600 p-2 inline-block mt-2 rounded-md"
        >
          Explorer Movie
        </Link>
      </div>
      <h2 className="text-3xl font-bold mt-7 mb-5 text-center text-blue-500   text-shadow-lg text-shadow-blue-700 animate-pulse ">
        Trending Movies
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="shadow-lg rounded-xl p-4">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="font-semibold mt-3 text-xl text-center">
              {movie.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
