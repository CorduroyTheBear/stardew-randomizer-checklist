// Export grouped tables

// Arcade
import arcadeVictories from "./JsonFiles/Arcade/arcadeVictories.json";
import jotPK from "./JsonFiles/Arcade/jotPK.json";
import junimoKart from "./JsonFiles/Arcade/junimoKart.json";

// Books
import lostBooks from "./JsonFiles/Books/lostBooks.json";
import powerBooks from "./JsonFiles/Books/powerBooks.json";
import skillBooks from "./JsonFiles/Books/skillBooks.json";

// Building Progression
import buildings from "./JsonFiles/buildings.json";

// Bundles
import jojaBundle from "./JsonFiles/Bundles/abandonedJoja.json";
import boilerBundles from "./JsonFiles/Bundles/boiler.json";
import bulletinBunddles from "./JsonFiles/Bundles/bulletinBoard.json";
import craftsBundles from "./JsonFiles/Bundles/crafts.json";
import fishBundles from "./JsonFiles/Bundles/fishTank.json";
import pantryBundles from "./JsonFiles/Bundles/pantry.json";
import vaultBunddles from "./JsonFiles/Bundles/vault.json";

// Cropsanity
import crops from "./JsonFiles/CropSanity/crops.json";
import fruit from "./JsonFiles/CropSanity/fruit.json";

// Elevator Progression
import elevatorProgression from "./JsonFiles/minesElevators.json";

// Festival Locations
   // easy
    import danceOfTheMoonlightJellies_e from "./JsonFiles/Festivals/danceOfTheMoonlightJellies_e.json";
    import flowerDance_e from "./JsonFiles/Festivals/flowerDance_e.json";
    import nightMarket_e from "./JsonFiles/Festivals/nightMarket_e.json";
    import spiritsEve_e from "./JsonFiles/Festivals/spiritsEve_e.json";

    // hard
    import danceOfTheMoonlightJellies from "./JsonFiles/Festivals/danceOfTheMoonlightJellies.json";
    import dessertFestival from "./JsonFiles/Festivals/dessertFestival.json";
    import eggFestival from "./JsonFiles/Festivals/eggFestival.json";
    import feastOfTheWinterStar from "./JsonFiles/Festivals/feastOfTheWinterStar.json";
    import festiveOfIce from "./JsonFiles/Festivals/festiveOfIce.json";
    import flowerDance from "./JsonFiles/Festivals/flowerDance.json";
    import luau from "./JsonFiles/Festivals/luau.json";
    import nightMarket from "./JsonFiles/Festivals/nightMarket.json";
    import spiritsEve from "./JsonFiles/Festivals/spiritsEve.json";
    import squidFest from "./JsonFiles/Festivals/squidFest.json";
    import stardewValleyFair from "./JsonFiles/Festivals/stardewValleyFair.json";
    import troutDerby from "./JsonFiles/Festivals/troutDerby.json";

// Mines Chests
import minesChests from "./JsonFiles/minesTreasure.json";

// Moviesanity
import oneMovie from "./JsonFiles/Movies/one.json";
import movies from "./JsonFiles/Movies/movies.json";
import snacks from "./JsonFiles/Movies/snacks.json";

// Museamsity

  // Milestones
  import artifactMilestones from "./JsonFiles/Museam/museamArtifactRewards.json";
  import generalMilestones from "./JsonFiles/Museam/museamGeneralRewards.json";
  import mineralMilestones from "./JsonFiles/Museam/museamMineralRewards.json";

  // All
  import artifacts from "./JsonFiles/Museam/artifacts.json";
  import forgedMinerals from "./JsonFiles/Museam/forgedMinerals.json";
  import frozenGeodeMinerals from "./JsonFiles/Museam/frozenGeodeMinerals.json";
  import gems from "./JsonFiles/Museam/gems.json";
  import geodeMinerals from "./JsonFiles/Museam/geodeMinerals.json";
  import magmaGeodeMinerals from "./JsonFiles/Museam/magmaGeodeMinerals.json";


// Raccoon
import raccoonChecks from "./JsonFiles/raccoonRequestChecks.json";

// Skill Progression
import combat from "./JsonFiles/Skills/combat.json";
import combat_m from "./JsonFiles/Skills/combat_m.json";
import farm from "./JsonFiles/Skills/farm.json";
import farm_m from "./JsonFiles/Skills/farm_m.json";
import fishing from "./JsonFiles/Skills/fishing.json";
import fishing_m from "./JsonFiles/Skills/fishing_m.json";
import foraging from "./JsonFiles/Skills/foraging.json";
import foraging_m from "./JsonFiles/Skills/foraging_m.json";
import mining from "./JsonFiles/Skills/mining.json";
import mining_m from "./JsonFiles/Skills/mining_m.json";

// Tool Progression
import axe from "./JsonFiles/Tools/axe.json";
import fishingRod from "./JsonFiles/Tools/fishingRod.json";
import hoe from "./JsonFiles/Tools/hoe.json";
import pan from "./JsonFiles/Tools/pan.json";
import pickaxe from "./JsonFiles/Tools/pickaxe.json";
import trashCan from "./JsonFiles/Tools/trashCan.json";
import wateringCan from "./JsonFiles/Tools/wateringCan.json";

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

   buildingProgression:
   {
        heading: "Buildings",
        className: "tableLevel-2_Heading",
        groups:
        [
            {id: "buildings", heading: "Buildings", className: "tableLevel-2_Tables", data: buildings},
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

   cropsanity:
   {
        heading: "Cropsanity",
        className: "tableLevel-2_Heading",
        groups:
        [
          {id: "crops", heading: "Crops", className: "tableLevel-2_Tables", data: crops},
          {id: "fruit", heading: "Fruit", className: "tableLevel-2_Tables", data: fruit}
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

   festivalLocations:
   {
        heading: "Festivals",
        className: "tableLevel-2_Heading",
        groups:
        [
            // easy
            {id: "danceOfTheMoonlightJellies_e", heading: "Moonlight Jellies", className: "tableLevel-2_Tables", data: danceOfTheMoonlightJellies_e},
            {id: "flowerDance_e", heading: "Flower Dance", className: "tableLevel-2_Tables", data: flowerDance_e},
            {id: "nightMarket_e", heading: "Night Market", className: "tableLevel-2_Tables", data: nightMarket_e},
            {id: "spiritsEve_e", heading: "Spirits Eve", className: "tableLevel-2_Tables", data: spiritsEve_e},

            // hard
            {id: "danceOfTheMoonlightJellies", heading: "Moonlight Jellies", className: "tableLevel-2_Tables", data: danceOfTheMoonlightJellies},
            {id: "dessertFestival", heading: "Dessert Festival", className: "tableLevel-2_Tables", data: dessertFestival},
            {id: "eggFestival", heading: "Egg Festival", className: "tableLevel-2_Tables", data: eggFestival},
            {id: "festiveOfIce", heading: "Festive Of Ice", className: "tableLevel-2_Tables", data: festiveOfIce},
            {id: "flowerDance", heading: "Flower Dance", className: "tableLevel-2_Tables", data: flowerDance},
            {id: "luau", heading: "Luau", className: "tableLevel-2_Tables", data: luau},
            {id: "nightMarket", heading: "Night Market", className: "tableLevel-2_Tables", data: nightMarket},
            {id: "squidFest", heading: "Squid Fest", className: "tableLevel-2_Tables", data: squidFest},
            {id: "spiritsEve", heading: "Spirits Eve", className: "tableLevel-2_Tables", data: spiritsEve},
            {id: "stardewValleyFair", heading: "Stardew Valley Fair", className: "tableLevel-2_Tables", data: stardewValleyFair},
            {id: "troutDerby", heading: "Trout Derby", className: "tableLevel-2_Tables", data: troutDerby},
            {id: "feastOfTheWinterStar", heading: "Winter Star", className: "tableLevel-2_Tables", data: feastOfTheWinterStar}, 
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

   museamsity:
   {
        heading: "Museam",
        className: "tableLevel-2_Heading",
        groups:
        [
            // Milestones
            {id: "artifactMilestones", heading: "Artifacts", className: "tableLevel-2_Tables", data: artifactMilestones},
            {id: "generalMilestones", heading: "General", className: "tableLevel-2_Tables", data: generalMilestones},
            {id: "mineralMilestones", heading: "Minerals", className: "tableLevel-2_Tables", data: mineralMilestones},

            // All
            {id: "artifacts", heading: "Artifacts", className: "tableLevel-2_Tables", data: artifacts},
            {id: "forgedMinerals", heading: "Forged Minerals", className: "tableLevel-2_Tables", data: forgedMinerals},
            {id: "frozenGeodeMinerals", heading: "Frozen Geode", className: "tableLevel-2_Tables", data: frozenGeodeMinerals},
            {id: "gems", heading: "Gems", className: "tableLevel-2_Tables", data: gems},
            {id: "geodeMinerals", heading: "Geode", className: "tableLevel-2_Tables", data: geodeMinerals},
            {id: "magmaGeodeMinerals", heading: "Magma Geode", className: "tableLevel-2_Tables", data: magmaGeodeMinerals},
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

   skillProgression:
   {
        heading: "Skill Progression",
        className: "tableLevel-2_Heading",
        groups:
        [
           {id: "combat", heading: "Combat", className: "tableLevel-2_Tables", data: combat},
           {id: "combat_m", heading: "Combat", className: "tableLevel-2_Tables", data: combat_m},
           {id: "farm", heading: "Farming", className: "tableLevel-2_Tables", data: farm},
           {id: "farm_m", heading: "Farming", className: "tableLevel-2_Tables", data: farm_m},
           {id: "fishing", heading: "Fishing", className: "tableLevel-2_Tables", data: fishing},
           {id: "fishing_m", heading: "Fishing", className: "tableLevel-2_Tables", data: fishing_m},
           {id: "foraging", heading: "Foraging", className: "tableLevel-2_Tables", data: foraging},
           {id: "foraging_m", heading: "Foraging", className: "tableLevel-2_Tables", data: foraging_m},
           {id: "mining", heading: "Mining", className: "tableLevel-2_Tables", data: mining},
           {id: "mining_m", heading: "Mining", className: "tableLevel-2_Tables", data: mining_m},
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
           {id: "wateringCan", heading: "Watering Can", className: "tableLevel-2_Tables", data: wateringCan}
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