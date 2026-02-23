
export function filterMoviesByGenre(movies: any[], genre: string) {
    return movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
}

export function filterMoviesByReleaseYear(movies: any[], year: number) {
    return movies.filter(movie => movie.release_year === year);
}

export function filterMoviesByShowtime(movies: any[], showtime: string) {
    switch (showtime) {
        case 'Morning':
            return movies.filter(movie => {
                if (!movie.showtimes) return false;
                  const time = movie.showtimes;
                if (time >= 5 && time < 12) {
                    return true;
                }               return false;
            });
        case 'Afternoon':
            return movies.filter(movie => {
                if (!movie.showtimes) return false;
                  const time = movie.showtimes;
                if(time >= 12 && time < 18) {
                    return true;
                }              return false;
            });
        case 'Evening':
            return movies.filter(movie => {
                if (!movie.showtimes) return false;
                const time = movie.showtimes;
                if ( time >= 18 && time < 22) {
                    return true;
                }               return false;
            });
        case 'Night':
            return movies.filter(movie => {
                if (!movie.showtimes) return false;
                const time = movie.showtimes;
                if ( time >= 22) {
                    return true;
                }               return false;
            });
        default:
            return movies;
    }

}

export function filterMoviesByRating(movies: any[], minRating: number) {
    return movies.filter(movie => movie.rating >= minRating);
}

export function sortMovies(movies: any[], ascending: string) {
    if(ascending === "release_date_asc") {
        return movies.sort((a, b) => a.release_year - b.release_year);
    } else if(ascending === "release_date_desc") {
        return movies.sort((a, b) => b.release_year - a.release_year);
    } else if(ascending === "rating_asc") {
        return movies.sort((a, b) => a.rating - b.rating);
   } else if(ascending === "rating_desc") {
        return movies.sort((a, b) => b.rating - a.rating);
   }
}



export function filterMoviesByShowtimeRange(movies: any[], startTime: string, endTime: string) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    return movies.filter(movie => {
        if (!movie.showtimes) return false;
        return movie.showtimes.some((showtime: string) => {
            const showtimeDate = new Date(showtime);
            return showtimeDate >= start && showtimeDate <= end;
        });
    });
}