export function filterGingerIslandChecks(item, isGI)
{
    if (isGI === "No") return true;
    
    // if isGI === "Yes"
    return item.isGI === true;
}