import { filterAddBackpack } from "./filterBackpack";
import { filterChefsanity } from "./filterChefsanity";
import { filterEatsanity } from "./filterEatsanity";
import { filterFishingLocations } from "./filterFishingLocations";
import { filterGingerIslandChecks } from "./filterGIChecks";
import { filterHatType } from "./filterHats";
import { filterIsPoison } from "./isPoison";
import { filterSeasons } from "./filterSeasons";
import { filterSecretType } from "./filterSecrets";
import { filterWalnutType } from "./filterWalnutType";

export const filterList =
[
    {
        key: "chefCategory",
        fn: (item, state) => filterChefsanity(item, state)
    },
    {
        key: "eatType",
        fn: (item, state) => filterEatsanity(item, state)
    },
    {
        key: "excludeBackpack",
        fn: (item, state) => filterAddBackpack(item, state)
    },
    {
        key: "fishingLocation",
        fn: (item, state) => filterFishingLocations(item, state)
    },
    {
        key: "hatType",
        fn: (item, state) => filterHatType(item, state)
    },
    {
        key: "isGI",
        fn: (item, state) => filterGingerIslandChecks(item, state)
    },
    {
        key: "isPoison",
        fn: (item, state) => filterIsPoison(item, state)
    },
    {
        key: "season",
        fn: (item, state) => filterSeasons(item, state.season, state.seasonExclusive)
    },
    {
        key: "secretType",
        fn: (item, state) => filterSecretType(item, state)
    },
    {
        key: "walnutType",
        fn: (item, state) => filterWalnutType(item, state)
    }
];

export function passItemFilters(item, filterState, settings)
{
    if (settings?.gingerIsland === "yes" && item.isGI) return false;

    return filterList.every(({key, fn}) => fn(item, filterState[key]));
}