import { useFilters } from "./Filters/filterContext";

export default function SearchBar()
{
    const {filterState, updateFilter} = useFilters();

    return(
        <div className = "search-bar">
            <input
                type = "text"
                placeholder = ""
                value = {filterState.search}
                onChange = {(e) => updateFilter("search", e.target.value)}
            />

            {filterState.search &&(
                <button onClick = {() => updateFilter("search", "")}>✕</button>
            )}
        </div>
    );
}