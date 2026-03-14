import MovieCard from "./movieCard";
import FilterSortControls from "./filterControls/filerterSortControls";

import * as movieFilters from "../utils/filters";

type Movie = {
    id: number;
    title: string;
    genre: string;
    director: string;
    release_year: number;
    rating: number;
    poster_url: string;
    showtimes: number;
}

function MovieGallery({ movies }: { movies: Movie[] }) {
    let filteredMovies = movies; 

    const searchParams = new URLSearchParams(window.location.search);
    const genreFilter = searchParams.get('genre');
    const showtimeFilter = searchParams.get('showtime');
    const ratingFilter = searchParams.get('rating');
    const releaseYearFilter = searchParams.get('release_year');
    const sort = searchParams.get('sort');

    filteredMovies = genreFilter ? movieFilters.filterMoviesByGenre(filteredMovies, genreFilter) : filteredMovies;
    filteredMovies = showtimeFilter ? movieFilters.filterMoviesByShowtime(filteredMovies, showtimeFilter) : filteredMovies;
    filteredMovies = ratingFilter ? movieFilters.filterMoviesByRating(filteredMovies, parseFloat(ratingFilter)) : filteredMovies;
    filteredMovies = releaseYearFilter ? movieFilters.filterMoviesByReleaseYear(filteredMovies, parseInt(releaseYearFilter)) : filteredMovies;
    filteredMovies = sort ? movieFilters.sortMovies(filteredMovies, sort) : filteredMovies; 

    return (
        <div className="movie-gallery">
            <h1>Movie Gallery</h1>

            <FilterSortControls />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
                {filteredMovies.map((movie: Movie) => (
                    <MovieCard
                        key={movie.id}
                        {...movie} 
                    />
                ))}
            </div>
        </div>
    )
}

export default MovieGallery;