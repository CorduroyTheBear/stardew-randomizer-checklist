export function filterAddBackpack(item, excludeBackpack)
{
    // Always show items without walnut types
    if (!item.excludeBackpack) return true;
    return excludeBackpack[item.excludeBackpack];
}