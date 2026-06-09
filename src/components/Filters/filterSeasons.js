export function filterSeasons(item, season, exclusive = false)
{
    if (season === "all") return true;
    if (!item.season) return !exclusive;

    if (exclusive) return item.season.length === 1 && item.season[0] === season;

    return item.season.includes(season);
}