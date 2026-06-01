export function filterSeasons(item, season, exclusive = false)
{
    // If no season is selected, show everything
    if (season === "all") return true;
    
    // If exclusive to season, don't show checks that do not have a season filter
    if (!item.season) return !exclusive;

    return item.season === season;
}