export default function FilterShowtimes() {
    function handleShowtimeChnageURL(showtime: string) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('showtime', showtime);
        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
        window.history.pushState(null, '', newUrl);
        window.location.reload()
    }

    return (
        <div className="filter-showtimes">
            <h3>Filter by Showtime</h3>
            <select name="showtime" id="showtime-select" onChange={(e) => handleShowtimeChnageURL(e.target.value)}>
                <option value="">Select Showtime</option>
                <option value="Morning">Morning (5am-12am showtimes)</option>
                <option value="Afternoon">Afternoon (12am-6pm showtimes)</option>
                <option value="Evening">Evening (6pm-10pm showtimes)</option>
                <option value="Night">Night (10pm+ showtimes)</option>
            </select>

        </div>
    )
}