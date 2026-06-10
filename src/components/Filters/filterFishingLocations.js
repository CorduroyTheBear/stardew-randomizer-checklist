export function filterFishingLocations(item, fishingLocation)
{
    if (fishingLocation === "any") return true;
    if (!item.fishingLocation) return false;
    
    return item.fishingLocation.includes(fishingLocation);
}