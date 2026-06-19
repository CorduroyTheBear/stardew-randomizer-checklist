export function filterWalnutType(item, walnutType)
{
    // Always show items without walnut types
    if (!item.walnutType) return true;
    return walnutType[item.walnutType];
}

// How to add check box filters
//
// 1. Create a new file named "filterX.js", content should be similar to this file

// 2. In groupedChecklist.jsx
//    - import {filterX} from "./../file"
//    - add X to GroupChecklist ({..., X})
//    - Add && filterX(item, X) to chains
//    - Pass X = {x} to both RenderChecklist calls

// 3. In tableSettingsList.jsx
//    - Add checkbox options

// 4. In randomizerSettings.jsx
//    - Add X = {X} and setX = {setX}
//      to SettingsList

// 5. In renderChecklist.jsx
//    - import {filterX} from "./../file"
//    - add X to RenderChecklist ({..., X})
//    - add if (!filterX(item, X)) return false; to const visibleItems

// 6. In App.jsx, add to GroupedChecklist, and .filter() chains