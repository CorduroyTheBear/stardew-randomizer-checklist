export function filterGroupedTables(settings)
{
    const visible = [];

    // Always visible
    visible.push("bundles");
    visible.push("minesChests");
    visible.push("travelingMerchant");
    visible.push("raccoonChecks");

    // Every other table
    if (settings.bookSanity !== "none") visible.push("bookSanity");
    if (settings.elevatorProgression !== "vanilla") visible.push("elevatorProgression");
    if (settings.movieSanity !== "none") visible.push("movieSanity");

    return visible;
}

// Filter grouped tables

export function filterGroups(tableKey, settings)
{
    switch (tableKey)
    {
        /*
        case "groupTableName":
        {
            const visible = [];

            if (settings.groupTableName === "settingName" || settings.bookSanity === "settingName2") visible.push("individualTable");
            if (settings.groupTableName === "settingName" || settings.bookSanity === "settingName2") visible.push("individualTable2");
            if (settings.groupTableName === "all") visible.push("individualTable3");

            return visible;
        }
        */

        case "bookSanity":
        {
            const visible = [];

            if (settings.bookSanity === "power" || settings.bookSanity === "powerSkill" || settings.bookSanity === "all") visible.push("powerBooks");
            if (settings.bookSanity === "powerSkill" || settings.bookSanity === "all") visible.push("skillBooks");
            if (settings.bookSanity === "all") visible.push("lostBooks");

            return visible;
        }

        case "movieSanity":
        {
            const visible = [];

            if (settings.movieSanity === "oneMovie") visible.push("oneMovie");
            if (settings.movieSanity === "allMovies" || settings.movieSanity === "allMoviesAndAllSnacks") visible.push("movies");
            if (settings.movieSanity === "allMoviesAndAllSnacks") visible.push("snacks");

            return visible;
        }
        
        // Groups always showing
        case "bundles":
        case "travelingMerchant":
        return null;
        
        // Default settings = always show
        default:
            return null;
    }
}