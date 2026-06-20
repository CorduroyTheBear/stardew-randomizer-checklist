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
    if (settings.cooksanity !== "none") visible.push("cooksanity");
    if (settings.cropsanity !== "disabled") visible.push("cropsanity");
    if (settings.elevatorProgression !== "vanilla") visible.push("elevatorProgression");
    if (settings.endGame !== "no") visible.push("endGame");
    if (settings.festivalLocations !== "none") visible.push("festivalLocations");
    if (settings.fishsanity !== "none") visible.push("fishsanity");
    if (settings.friendsanity !== "none") visible.push("friendsanity");
    if (settings.gingerIsland !== "yes") visible.push("gingerIsland");
    if (settings.monstersanity !== "none") visible.push("monstersanity");
    if (settings.movieSanity !== "none") visible.push("movieSanity");
    if (settings.museamsity !== "none") visible.push("museamsity");
    if (settings.quests !== "none") visible.push("quests");
    if (settings.skillProgression !== "vanilla") visible.push("skillProgression");
    if (settings.specialOrders !== "vanilla") visible.push("specialOrders");
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

            if (settings.groupTableName === "") visible.push("");

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

        case "cooksanity":
        {
            const visible = [];

            if (settings.cooksanity === "queenOfSauce") visible.push("queenOfSauceChecks");
            if (settings.cooksanity === "all") visible.push("cookSanityChecks");

            return visible;
        }

        case "festivalLocations":
        {
            const visible = [];

            if (settings.festivalLocations === "easy") visible.push("danceOfTheMoonlightJellies_e", "flowerDance_e", "nightMarket_e", "spiritsEve_e");
            if (settings.festivalLocations === "hard") visible.push("danceOfTheMoonlightJellies", "dessertFestival", "eggFestival", "festiveOfIce", "flowerDance", "luau", "nightMarket", "squidFest", "spiritsEve", "stardewValleyFair", "troutDerby", "feastOfTheWinterStar");
            
            return visible;
        }

        case "fishsanity":
        {
            const visible = [];

            if (settings.fishsanity === "legendaries") visible.push("legendaryFish");
            if (settings.fishsanity === "all") visible.push("crabPotFreshWater", "crabPotOcean", "allFish");
            if (settings.fishsanity === "excludeLegendaries") visible.push("crabPotFreshWater", "crabPotOcean", "excludeLegendaryFish");
            if (settings.fishsanity === "excludeHardFish") visible.push("crabPotFreshWater", "crabPotOcean", "excludeHardFish");
            if (settings.fishsanity === "onlyEasyFish") visible.push("crabPotFreshWater", "crabPotOcean", "onlyEasyFish");

            return visible;
        }

        case "friendsanity":
        {
            const visible = [];

            if (settings.friendsanity === "bachelors") visible.push("otherFriendChecks", "alex", "elliot", "harvey", "sam", "sebastian", "shane", "abigail", "emily", "haley", "leah", "maru", "penny");
            if (settings.friendsanity === "startingNpcs") visible.push("otherFriendChecks", "alex", "elliot", "harvey", "sam", "sebastian", "shane", "abigail", "emily", "haley", "leah", "maru", "penny", "caroline", "clint", "demetrius", "evelyn", "george", "gus", "jas", "jodi", "lewis", "linus", "marnie", "pam", "pierre", "robin", "vincent", "willy", "wizard", "pet");
            if (settings.friendsanity === "all") visible.push("otherFriendChecks", "alex", "elliot", "harvey", "sam", "sebastian", "shane", "abigail", "emily", "haley", "leah", "maru", "penny", "caroline", "clint", "demetrius", "dwarf", "evelyn", "george", "gus", "jas", "jodi", "kent", "krobus", "lewis", "linus", "leo", "marnie", "pam", "pierre", "robin", "sandy", "vincent", "willy", "wizard", "pet");
            if (settings.friendsanity === "allWithMarriage") visible.push("otherFriendChecks", "alex_14", "elliot_14", "harvey_14", "sam_14", "sebastian_14", "shane_14", "abigail_14", "emily_14", "haley_14", "leah_14", "maru_14", "penny_14", "caroline", "clint", "demetrius", "dwarf", "evelyn", "george", "gus", "jas", "jodi", "kent", "krobus", "lewis", "linus", "leo", "marnie", "pam", "pierre", "robin", "sandy", "vincent", "willy", "wizard", "pet");

            return visible;
        }

        case "gingerIsland":
        {
            const visible = [];

            if (settings.gingerIsland === "no") visible.push("gingerIslandGeneral", "gingerIslandNorth", "gingerIslandSouth", "gingerIslandEast", "gingerIslandWest");

            return visible;
        }

        case "monstersanity":
        {
            const visible = [];

            if (settings.monstersanity === "onePerCategory") visible.push("onePerCategory");
            if (settings.monstersanity === "onePerMonster") visible.push("onePerMonster");
            if (settings.monstersanity === "goals") visible.push("onePerCategory");
            if (settings.monstersanity === "progressiveGoals") visible.push("bats", "caveInsects", "duggies", "dustSprites", "magmaSprites", "mummies", "pepperRex", "rockCrabs", "serpents", "skeletons", "slimes", "voidSprites");
            if (settings.monstersanity === "splitGoals") visible.push("onePerMonster");

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

        case "quests":
        {
            const visible = [];

            if (settings.quests === "story") visible.push("storyQuests");
            if (settings.quests === "minimum") visible.push("storyQuests", "minimumFishing", "minimumGathering", "minimumItemDelivery", "minimumSlayMonsters");
            if (settings.quests === "normal") visible.push("storyQuests", "normalFishing", "normalGathering", "normalItemDelivery","normalSlayMonsters");
            if (settings.quests === "lots") visible.push("storyQuests", "lotsFishing", "lotsGathering", "lotsItemDelivery", "lotsSlayMonsters");
            if (settings.quests === "maximum") visible.push("storyQuests", "maximumFishing", "maximumGathering", "maximumItemDelivery", "maximumSlayMonsters");
            
            return visible;
        }

        case "skillProgression":
        {
            const visible = [];

            if (settings.skillProgression === "progressive") visible.push("combat", "farm", "fishing", "foraging", "mining");
            if (settings.skillProgression === "progressiveMaster") visible.push("combat_m", "farm_m", "fishing_m", "foraging_m", "mining_m");

           return visible;
        }

        case "specialOrders":
        {
            const visible = [];

            if (settings.specialOrders === "board") visible.push("sdvBoard");
            if (settings.specialOrders === "boardQi") visible.push("sdvBoard", "qiBoard");

            return visible;
        }
        
        // Default settings = always show
        default:
            return null;
    }
}