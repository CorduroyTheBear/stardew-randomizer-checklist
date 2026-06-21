import { filterSeasons } from "./filterSeasons";
import { filterFishingLocations } from "./filterFishingLocations";
import { filterGingerIslandChecks } from "./filterGIChecks";
import { filterWalnutType } from "./filterWalnutType";

export const filterList =
[
    {
        key: "season",
        fn: (item, state) => filterSeasons(item, state.season, state.seasonExclusive)
    },
    {
        key: "fishingLocation",
        fn: (item, state) => filterFishingLocations(item, state)
    },
    {
        key: "isGI",
        fn: (item, state) => filterGingerIslandChecks(item, state)
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