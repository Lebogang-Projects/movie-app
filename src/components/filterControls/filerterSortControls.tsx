import FilterTabs  from "./filterTabs";
import  FilterShowtimes from "./filterShowtimes";
import SortMoviesControl from "./sortMoviesControl";

export default function FilterSortControls() {
    return (
        <div className="filter-sort-controls">
            <FilterTabs
            />

            <FilterShowtimes
            />

            <SortMoviesControl />

            <button onClick={() => {
                window.location.search = '';
            }}>Clear Filters</button>

        </div>
    )
}