// Import .json files for tables

// Crop Sanity
import crops from "./JsonFiles/CropSanity/crops.json";
import fruit from "./JsonFiles/CropSanity/fruit.json";

import minesTreasure from "./JsonFiles/minesTreasure.json";
import raccoonChecks from "./JsonFiles/raccoonRequestChecks.json";

// Create/Export tables

export const TABLES = 
{
    // Checks on by default
    raccoonChecks:
    {
        heading: "Racoon",
        data: raccoonChecks,
        className: "tableLevel-1"
    },
    minesTreasure:
    {
        heading: "Mines Chests",
        data: minesTreasure,
        className: "tableLevel-1"
    },


    // Other stuff (edit name later for clarity)
    
    /*
    cropSanity:
        {
            heading: "Crops",
            data: crops,
            className: "tableLevel-1"
        }
    */
};


// To Add more tables

// 1. Put .json file in ./data/JsonFiles
// 2. Export table (shown above)