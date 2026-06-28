import { createContext, useContext, useState } from "react";

const defaultFilterState = 
{
    season: {season: "all", seasonExclusive: false},
    fishingLocation: "any",
    isGI: "No",
    isPoison: false,
    excludeBackpack: false,

    chefCategory:
    {
        friendship: false,
        purchase: false,
        queenOfSauce: false,
        skills: false
    },
    
    eatType:
    {
        artisan: false,
        cooking: false,
        crop: false,
        fish: false,
        shop: false
    },

    hatType:
    {
        difficult: false,
        easy: false,
        medium: false,
        nearPerfection: false,
        postPerfection: false,
        rng: false,
        tailoring: false
    },

    shipType:
    {
        fullCrop: false,
        fullFish: false,
        fullShipment: false,
        everySingleItem: false
    },
    
    secretType:
    {
        difficult: false,
        easy: false,
        fishing: false,
        note: false
    },

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