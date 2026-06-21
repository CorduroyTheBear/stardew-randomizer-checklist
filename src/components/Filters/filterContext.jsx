import { createContext, useContext, useState } from "react";

const defaultFilterState = 
{
    season: {season: "all", seasonExclusive: false},
    fishingLocation: "any",
    isGI: "No",
    
    walnutType:
    {
        bush: false,
        digSpot: false,
        puzzle: false,
        repeatable: false
    }
};

const filterContext = createContext(null);

export function FilterProvider({children})
{
    const [filterState, setFilterState] = useState(defaultFilterState);

    const updateFilter = (key, valueUpdater) => {setFilterState(prev => ({
        ...prev,
        [key]: typeof valueUpdater === "function"
        ? valueUpdater(prev[key])
        : valueUpdater
    }))};

    return(
        <filterContext.Provider value = {{ filterState, updateFilter}}>
            {children}
        </filterContext.Provider>
    );
}

export function useFilters()
{
    const context = useContext(filterContext);
    if(!context){throw new Error("useFilters must be used within a FilterProvider")};

    return context;
}