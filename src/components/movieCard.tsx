

interface MovieCardProps {
    title: string;
    release_year: string;
    rating: number;
    poster_url: string;
    genre: string;
    showtimes: number;
}

const ShowtimeBadge = ({ session }: { session: string }) => {
    const styles = {
        Morning: "bg-amber-100 text-amber-700 border-amber-200", // Soft Sunrise
        Noon: "bg-sky-100 text-sky-700 border-sky-200",        // Bright Day
        Evening: "bg-indigo-100 text-indigo-700 border-indigo-200", // Twilight
        Night: "bg-slate-800 text-slate-100 border-slate-700",   // Midnight
    };

    return (
        <span className={`px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider border ${styles[session]}`}>
            {session}
        </span>
    );
};
export default function MovieCard(props: MovieCardProps) {
    type showtimeSession = "Morning" | "Afternoon" | "Evening" | "Night";

    function getShowtimeSession(showtimes: number): showtimeSession {
        if (showtimes >= 5 && showtimes < 12) {
            return "Morning";
        } else if (showtimes >= 12 && showtimes <   18) {
            return "Afternoon";
        } else if (showtimes >= 18 && showtimes < 22) {
            return "Evening";
        } else {
            return "Night";
        }
    }

    return (
        <div className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
         
            <div className="relative aspect-[2/3] overflow-hidden">
                <img
                    src={props.poster_url}
                    alt={props.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Rating Badge floating on image */}
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-yellow-400 px-2 py-1 rounded-lg text-sm font-bold">
                    ★ {props.rating}
                </div>
            </div>

           
            <div className="p-4 space-y-2">
                <h2 className="text-xl font-bold text-white truncate">{props.title}</h2>

                <div className="flex items-center text-gray-400 text-sm">
                    <span>{props.release_year}</span>
                    <span className="mx-2">•</span>
                    <span>{props.genre}</span>
                </div>

                <div className="pt-2 border-t border-gray-800">
                    <p className="text-xs text-gray-500 uppercase mb-2 font-semibold">Available Sessions</p>
                    <div className="flex flex-wrap gap-2">
                        <ShowtimeBadge session={getShowtimeSession(props.showtimes)} />
                    </div>
                </div>
            </div>
        </div>
    )
}