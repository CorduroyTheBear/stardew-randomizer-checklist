export function filterChefsanity(item, chefCategory)
{
    // Always show items without walnut types
    if (!item.chefCategory) return true;
    return chefCategory[item.chefCategory];
}