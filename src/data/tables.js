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