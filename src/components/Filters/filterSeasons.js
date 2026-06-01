export function filterSeasons(item, season)
{
    // If no season is selected, show everything
    if (season === "all") return true;
    
    // If an item does not have a season assigned, always show
    if (!item.season) return true;

    return item.season === season;
}