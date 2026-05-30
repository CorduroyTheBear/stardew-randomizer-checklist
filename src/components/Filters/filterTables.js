
// Add level 1 tables

export function filterTables(settings)
{
    const visible = [];

    // --- Always visible --- //
    visible.push("minesTreasure");
    visible.push("raccoonChecks");


    //if (settings.settingName !== "option vaule") visible.push("table key");

    // Elevator Progression
    if (settings.elevatorProgression !== "vanilla") visible.push("elevatorChecks");

    // Moviesanity
    if (settings.movieSanity != "none") visible.push("oneMovie");

    return visible;
}

// List level 2 tables

export function filterGroupedTables(settings)
{
    const visible = [];

    // Always visible
    visible.push("bundles");
    visible.push("travelingMerchant");

    // Needs filtering
    if (settings.bookSanity !== "none") visible.push("bookSanity");

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

        // Groups always showing
        case "bundles":
        case "travelingMerchant":
        return null;
        
        // Default settings = always show
        default:
            return null;
    }
}