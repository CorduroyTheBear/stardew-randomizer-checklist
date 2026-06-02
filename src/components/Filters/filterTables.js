export function filterGroupedTables(settings)
{
    const visible = [];

    // Always visible
    visible.push("bundles");
    visible.push("minesChests");
    visible.push("travelingMerchant");
    visible.push("raccoonChecks");

    // Every other table
    if (settings.arcade !== "disabled") visible.push("arcade");
    if (settings.buildingProgression !== "vanilla") visible.push("buildingProgression");
    if (settings.bookSanity !== "none") visible.push("bookSanity");
    if (settings.cropsanity !== "disabled") visible.push("cropsanity");
    if (settings.elevatorProgression !== "vanilla") visible.push("elevatorProgression");
    if (settings.festivalLocations !== "none") visible.push("festivalLocations");
    if (settings.movieSanity !== "none") visible.push("movieSanity");
    if (settings.museamsity !== "none") visible.push("museamsity");
    if (settings.skillProgression !== "vanilla") visible.push("skillProgression");
    if (settings.toolProgression !== "vanilla") visible.push("toolProgression");

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

        case "arcade":
        {
            const visible = [];

            if (settings.arcade === "arcadeVictories") visible.push("arcadeVictories");
            if (settings.arcade === "fullShuffling") visible.push("jotPK");
            if (settings.arcade === "fullShuffling") visible.push("junimoKart");

            return visible;
        }

        case "bookSanity":
        {
            const visible = [];

            if (settings.bookSanity === "power" || settings.bookSanity === "powerSkill" || settings.bookSanity === "all") visible.push("powerBooks");
            if (settings.bookSanity === "powerSkill" || settings.bookSanity === "all") visible.push("skillBooks");
            if (settings.bookSanity === "all") visible.push("lostBooks");

            return visible;
        }

        case "festivalLocations":
        {
            const visible = [];

            if (settings.festivalLocations === "easy") visible.push("danceOfTheMoonlightJellies_e", "flowerDance_e", "nightMarket_e", "spiritsEve_e");
            if (settings.festivalLocations === "hard") visible.push("danceOfTheMoonlightJellies", "dessertFestival", "eggFestival", "festiveOfIce", "flowerDance", "luau", "nightMarket", "squidFest", "spiritsEve", "stardewValleyFair", "troutDerby", "feastOfTheWinterStar");
            
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

        case "museamsity":
        {
            const visible = [];

            if (settings.museamsity === "milestones") visible.push("artifactMilestones", "generalMilestones", "mineralMilestones");
            if (settings.museamsity === "all") visible.push("artifacts", "forgedMinerals", "frozenGeodeMinerals", "gems", "geodeMinerals", "magmaGeodeMinerals");

            return visible;
        }

        case "skillProgression":
        {
            const visible = [];

            if (settings.skillProgression === "progressive") visible.push("combat", "farm", "fishing", "foraging", "mining");
            if (settings.skillProgression === "progressiveMaster") visible.push("combat_m", "farm_m", "fishing_m", "foraging_m", "mining_m");

           return visible;
        }
        
        // Default settings = always show
        default:
            return null;
    }
}