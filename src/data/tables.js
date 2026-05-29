// Import .json files for tables

import elevatorChecks from "./JsonFiles/minesElevators.json";
import minesTreasure from "./JsonFiles/minesTreasure.json";
import raccoonChecks from "./JsonFiles/raccoonRequestChecks.json";


// Export tables

export const TABLES = 
{
    // Checks on by default
    raccoonChecks:
    {
        heading: "Racoon",
        data: raccoonChecks,
        className: "tableLevel-1"
    },

    elevatorChecks:
    {
        heading: "Elevators",
        data: elevatorChecks,
        className: "tableLevel-1"
    },

    minesTreasure:
    {
        heading: "Mines Chests",
        data: minesTreasure,
        className: "tableLevel-1"
    },
};


// To Add more tables
// 1. Put .json file in ./data/JsonFiles
// 2. Export table (shown above)
// 3. Create table settings in tableSettingsList.jsx
// 4. Add filter table logic in filterTables.js
// 5. Add default setting in function App() in App.jsx

// tables.js -> tableSettingsList.jsx -> filterTables.js -> App.jsx