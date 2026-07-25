import { useFilters } from "../Filters/filterContext";

export default function SearchBar()
{
    const {filterState, updateFilter} = useFilters();

    return(
        <div className = "search-bar">
            <input
                type = "text"
                placeholder = "Search for check"
                value = {filterState.search}
                onChange = {(e) => updateFilter("search", e.target.value)}
            />
        </div>
    );
}