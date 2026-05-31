// Export grouped tables

// Arcade
import arcadeVictories from "./JsonFiles/Arcade/arcadeVictories.json";
import jotPK from "./JsonFiles/Arcade/jotPK.json";
import junimoKart from "./JsonFiles/Arcade/junimoKart.json";

// Books
import lostBooks from "./JsonFiles/Books/lostBooks.json";
import powerBooks from "./JsonFiles/Books/powerBooks.json";
import skillBooks from "./JsonFiles/Books/skillBooks.json";

// Bundles
import jojaBundle from "./JsonFiles/Bundles/abandonedJoja.json";
import boilerBundles from "./JsonFiles/Bundles/boiler.json";
import bulletinBunddles from "./JsonFiles/Bundles/bulletinBoard.json";
import craftsBundles from "./JsonFiles/Bundles/crafts.json";
import fishBundles from "./JsonFiles/Bundles/fishTank.json";
import pantryBundles from "./JsonFiles/Bundles/pantry.json";
import vaultBunddles from "./JsonFiles/Bundles/vault.json";

// Elevator Progression
import elevatorProgression from "./JsonFiles/minesElevators.json";

// Mines Chests
import minesChests from "./JsonFiles/minesTreasure.json";

// Moviesanity
import oneMovie from "./JsonFiles/Movies/one.json";
import movies from "./JsonFiles/Movies/movies.json";
import snacks from "./JsonFiles/Movies/snacks.json";

// Raccoon
import raccoonChecks from "./JsonFiles/raccoonRequestChecks.json";

// Tools
import axe from "./JsonFiles/Tools/axe.json";
import fishingRod from "./JsonFiles/Tools/fishingRod.json";
import hoe from "./JsonFiles/Tools/hoe.json";
import pan from "./JsonFiles/Tools/pan.json";
import pickaxe from "./JsonFiles/Tools/pickaxe.json";
import trashCan from "./JsonFiles/Tools/trashCan.json";
import watertingCan from "./JsonFiles/Tools/wateringCan.json";

// Traveling Merchant
import tm_Sun from "./JsonFiles/TravelingMerchant/tm_Sun.json";
import tm_Mon from "./JsonFiles/TravelingMerchant/tm_Mon.json";
import tm_Tue from "./JsonFiles/TravelingMerchant/tm_Tue.json";
import tm_Wed from "./JsonFiles/TravelingMerchant/tm_Wed.json";
import tm_Thu from "./JsonFiles/TravelingMerchant/tm_Thu.json";
import tm_Fri from "./JsonFiles/TravelingMerchant/tm_Fri.json";
import tm_Sat from "./JsonFiles/TravelingMerchant/tm_Sat.json";


// Group entry template
// {id: "", heading: "", className: "tableLevel-2_Tables", data: },

export const GROUPED_TABLES = 
{

   arcade:
   {
        heading: "Arcade",
        className: "tableLevel-2_Heading",
        groups:
        [
            {id: "arcadeVictories", heading: "Victories", className: "tableLevel-2_Tables", data: arcadeVictories},
            {id: "jotPK", heading: "JotPK", className: "tableLevel-2_Tables", data: jotPK},
            {id: "junimoKart", heading: "Junimo Kart", className: "tableLevel-2_Tables", data: junimoKart}
        ]
   },

   bookSanity:
   {
        heading: "Books",
        className: "tableLevel-2_Heading",
        groups:
        [
            {id: "lostBooks", heading: "Lost", className: "tableLevel-2_Tables", data: lostBooks},
            {id: "powerBooks", heading: "Power", className: "tableLevel-2_Tables", data: powerBooks},
            {id: "skillBooks", heading: "Skill", className: "tableLevel-2_Tables", data: skillBooks},
        ]
   },

   bundles:
   {
        heading: "Bundles",
        className: "tableLevel-2_Heading",
        groups:
        [
            {id: "jojaBundle", heading: "Joja Mart", className: "tableLevel-2_Tables", data: jojaBundle},
            {id: "boilerBundles", heading: "Boiler", className: "tableLevel-2_Tables", data: boilerBundles},
            {id: "bulletinBunddles", heading: "Bulletin Board", className: "tableLevel-2_Tables", data: bulletinBunddles},
            {id: "craftsBundles", heading: "Crafts", className: "tableLevel-2_Tables", data: craftsBundles},
            {id: "fishBundles", heading: "Fish Tank", className: "tableLevel-2_Tables", data: fishBundles},
            {id: "pantryBundles", heading: "Pantry", className: "tableLevel-2_Tables", data: pantryBundles},
            {id: "vaultBunddles", heading: "Vault", className: "tableLevel-2_Tables", data: vaultBunddles},
        ]
   },

   elevatorProgression:
   {
        heading: "Elevator",
        className: "tableLevel-2_Heading",
        groups:
        [
            {id: "elevatorProgression", heading: "Elevator", className: "tableLevel-2_Tables", data: elevatorProgression}
        ]
   },

   minesChests:
   {
        heading: "Mines Chests",
        className: "tableLevel-2_Heading",
        groups:
        [
            {id: "minesChests", heading: "Mines Chests", className: "tableLevel-2_Tables", data: minesChests}
        ]
   },

   movieSanity:
   {
        heading: "Movies",
        className: "tableLevel-2_Heading",
        groups:
        [
            {id: "oneMovie", heading: "Movie", className: "tableLevel-2_Tables", data: oneMovie},
            {id: "movies", heading: "Movies", className: "tableLevel-2_Tables", data: movies},
            {id: "snacks", heading: "Snacks", className: "tableLevel-2_Tables", data: snacks}
        ]
   },

   raccoonChecks:
   {
        heading: "Raccoon",
        className: "tableLevel-2_Heading",
        groups:
        [
            {id: "raccoonChecks", heading: "Raccoon", className: "tableLevel-2_Tables", data: raccoonChecks}
        ]
   },

   toolProgression:
   {
        heading: "Tool Progression",
        className: "tableLevel-2_Heading",
        groups:
        [
           {id: "axe", heading: "Axe", className: "tableLevel-2_Tables", data: axe},
           {id: "fishingRod", heading: "Fishing Rod", className: "tableLevel-2_Tables", data: fishingRod},
           {id: "hoe", heading: "Hoe", className: "tableLevel-2_Tables", data: hoe},
           {id: "pan", heading: "Pan", className: "tableLevel-2_Tables", data: pan},
           {id: "pickaxe", heading: "Pickaxe", className: "tableLevel-2_Tables", data: pickaxe},
           {id: "trashCan", heading: "Trash Can", className: "tableLevel-2_Tables", data: trashCan},
           {id: "watertingCan", heading: "Watering Can", className: "tableLevel-2_Tables", data: watertingCan}
        ]
   },

   travelingMerchant:
   {
        heading: "Traveling Merchant",
        className: "tableLevel-2_Heading",
        groups:
        [
            { id: "tm_Sun", heading: "Sunday",    className: "tableLevel-2_Tables", data: tm_Sun },
            { id: "tm_Mon", heading: "Monday",    className: "tableLevel-2_Tables", data: tm_Mon },
            { id: "tm_Tue", heading: "Tuesday",   className: "tableLevel-2_Tables", data: tm_Tue },
            { id: "tm_Wed", heading: "Wednesday", className: "tableLevel-2_Tables", data: tm_Wed },
            { id: "tm_Thu", heading: "Thursday",  className: "tableLevel-2_Tables", data: tm_Thu },
            { id: "tm_Fri", heading: "Friday",    className: "tableLevel-2_Tables", data: tm_Fri },
            { id: "tm_Sat", heading: "Saturday",  className: "tableLevel-2_Tables", data: tm_Sat }
        ]
   } 
    
};





// To Add more grouped tables

// 1. Put .json file in ./data/JsonFiles
// 2. Export tables (shown above)
// 3. Create table settings in tableSettingsList.jsx

// 4. Add filter table logic (2 differnt functions) in filterTables.js
// 5. Add default setting in function App() in App.jsx

// groupedTables.js -> tableSettingsList.jsx -> filterTables.js -> App.jsx