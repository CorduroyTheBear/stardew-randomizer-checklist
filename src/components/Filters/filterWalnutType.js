export function filterWalnutType(item, walnutType)
{
    // Always show items without walnut types
    if (!item.walnutType) return true;
    return walnutType[item.walnutType];
}

// How to add check box filters
//
// 1. Create a new file named "filterX.js", content should be similar to this file

// 2. In filterContext.jsx
//    - Add default filter state

// 3. In filterList.js
//    - import {filterX} from "./../file"
//    - Add to filter list

// If similar to excludeGI (drop down), add to App.jsx

// 4. Pick between Topbar.jsx and tableSettingsList.jsx
//    - Add settings. (In tableSettings.jsx there are 2 places to add info)

// filterX.js -> filterContext.jsx -> filterList.js -> Topbar.jsx OR tableSettingsList.jsx