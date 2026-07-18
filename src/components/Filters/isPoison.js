export function filterIsPoison(item,isPoison)
{
    // Always show items without walnut types
    if (!item.isPoison) return true;
    return isPoison;
}