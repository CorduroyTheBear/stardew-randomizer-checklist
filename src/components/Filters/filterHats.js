export function filterHatType(item, hatType)
{
    // Always show items without walnut types
    if (!item.hatType) return true;
    return hatType[item.hatType];
}

// How to add check box filters

// 4. Pick between Topbar.jsx and tableSettingsList.jsx
//    - Add settings. (In tableSettings.jsx there are 2 places to add info)

// filterX.js -> filterContext.jsx -> filterList.js -> Topbar.jsx OR tableSettingsList.jsx