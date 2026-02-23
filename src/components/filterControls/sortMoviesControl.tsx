

export default function SortMoviesControl() {
    function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('sort', e.target.value);
        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
        window.history.pushState(null, '', newUrl);
        window.location.reload()
    }
    return (
        <div className="sort-movies-control">
            <h3>Sort Movies</h3>
            <select name="sort" id="sort-select" onChange={handleSortChange}>
                <option value="">Select Sort Option</option>
                <option value="release_date_asc">Release Date (Oldest to Newest)</option>
                <option value="release_date_desc">Release Date (Newest to Oldest)</option>
                <option value="rating_asc">Rating (Lowest to Highest)</option>
                <option value="rating_desc">Rating (Highest to Lowest)</option>
            </select>
            <button>Apply Sort</button>
        </div>
    )
}