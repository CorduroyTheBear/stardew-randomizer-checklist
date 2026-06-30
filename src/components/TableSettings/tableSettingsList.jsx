// Lists all the settings
import { useFilters } from "../Filters/filterContext";
import { Presets } from "./presets";

export default function SettingsList({settings, setSettings, preset, setPreset})
{
    const { filterState, updateFilter } = useFilters();
    
    const update = (key, value) =>
    {
        setPreset("custom");
        setSettings(prev => ({ ...prev, [key]: value}));
    }

    const updateFilterPresetToCustom = (key, value) =>
    {
        setPreset("custom");
        updateFilter(key, value);
    };

    const handlePreset = (presetKey) =>
    {
        setPreset(presetKey);

        if(presetKey === "custom") return;

        const {settings: s, filterState: f} = Presets[presetKey];
        setSettings(prev => ({...prev, ...s}));
        Object.entries(f).forEach(([key, value]) => updateFilter(key, value));

        if (s.shipsanity) handleShipsanity(s.shipsanity, true);
    }

    // Filters
    const { chefCategory} = filterState;
    const toggleChefCategory = (subkey) => updateFilterPresetToCustom("chefCategory", prev => ({...prev, [subkey]: !prev[subkey]}));

    const { eatType } = filterState;
    const toggleEatType = (subkey) => updateFilterPresetToCustom("eatType", prev => ({...prev, [subkey]: !prev[subkey]})); 

    const { excludeBackpack } = filterState;
    const toggleBackpack = (subkey) => updateFilterPresetToCustom("excludeBackpack", prev => ({...prev, [subkey]: !prev[subkey]}));

    const { hatType } = filterState;
    const toggleHattype = (subkey) => updateFilterPresetToCustom("hatType", prev => ({...prev, [subkey]: !prev[subkey]}));

    const { isPoison } = filterState;
    const toggleIsPoison = (subkey) => updateFilterPresetToCustom("isPoison", prev => ({...prev, [subkey]: !prev[subkey]}));

    const { secretType } = filterState;
    const toggleSecretType = (subkey) => updateFilterPresetToCustom("secretType", prev => ({...prev, [subkey]: !prev[subkey]}));

    const { shipType } = filterState;
    
    const { walnutType } = filterState;
    const toggleWalnut = (subkey) => updateFilterPresetToCustom("walnutType", prev => ({...prev, [subkey]: !prev[subkey]}));

    const handleShipsanity = (value, fromPreset = false) =>
    {
        if (!fromPreset) setPreset("custom");
        setSettings(prev => ({...prev, shipsanity: value}));

        updateFilter("shipType",
        {
            fullCrop: ["crops", "cropsAndFish", "fullShipment", "fullShipmentWithFish", "everything"].includes(value),
            fullFish: ["fish", "cropsAndFish", "fullShipmentWithFish", "everything"].includes(value),
            fullShipment: ["fullShipment", "fullShipmentWithFish", "everything"].includes(value),
            everySingleItem: value === "everything"
        });
    };

    return(
        <>

            <label>
                Preset:
                <select value={preset} onChange={(e) => handlePreset(e.target.value)}>
                    <option value="custom">Custom</option>
                    <option value="default">Default</option>
                </select>
            </label>

            <label><strong>General</strong></label>

            <label>
                Bundles:
                <select value = {settings.bundles} onChange = {(e) => update("bundles", e.target.value)}>
                    <option value = "withJoja">Community Center and Joja</option>
                    <option value = "withoutJoja">Community Center Only</option>
                </select>
            </label>

            <label>
                Exclude Ginger Island?:
                <select value = {settings.gingerIsland} onChange = {(e) => update("gingerIsland", e.target.value)}>
                    <option value = "yes">Yes</option>
                    <option value = "no">No</option>
                </select>
            </label>

            <label>
                Show Mines Chests?:
                <select value = {settings.minesChests} onChange = {(e) => update("minesChests", e.target.value)}>
                    <option value = "yes">Yes</option>
                    <option value = "no">No</option>
                </select>
            </label>

            <label>
                Show Other Checks?:
                <select value = {settings.otherChecks} onChange = {(e) => update("otherChecks", e.target.value)}>
                    <option value = "yes">Yes</option>
                    <option value = "no">No</option>
                </select>
            </label>

            <label>
                Show Raccoon Checks?:
                <select value = {settings.raccoonChecks} onChange = {(e) => update("raccoonChecks", e.target.value)}>
                    <option value = "yes">Yes</option>
                    <option value = "no">No</option>
                </select>
            </label>

            <label>
                Show Traveling Merchant?:
                <select value = {settings.travelingMerchant} onChange = {(e) => update("travelingMerchant", e.target.value)}>
                    <option value = "yes">Yes</option>
                    <option value = "no">No</option>
                </select>
            </label>
            
            
            <label>
                How many Checks?:
                <select value = {settings.travelingMerchantCount} onChange = {(e) => update("travelingMerchantCount", Number(e.target.value))}>
                    {Array.from({length: 12}, (_, i) => i + 1).map(n => (
                        <option key = {n} value = {n} > {n}</option>
                    ))}
                </select>
            </label>

            
            <label><strong>Major Unlocks</strong></label>

            <label>
                Cropssanity:
                <select value = {settings.cropsanity} onChange = {(e) => update("cropsanity", e.target.value)}>
                    <option value = "disabled">Disabled</option>
                    <option value = "enabled">Enabled</option>
                </select>
            </label>

            <label>
                Backpack Progression/Size:
                <select value = {settings.backpack} onChange = {(e) => update("backpack", e.target.value)}>
                    <option value="vanilla">Vanilla</option>
                    <option value="12">Progression/12</option>
                    <option value="6">Progression/6</option>
                    <option value="4">Progression/4</option>
                    <option value="3">Progression/3</option>
                    <option value="2">Progression/2</option>
                    <option value="1">Progression/1</option>
                </select>
            </label>

            <label>Start Without Backpack? <input type="checkbox" checked={excludeBackpack.true} onChange={() => toggleBackpack("true")} /></label>

            <label>
                Building Progression:
                <select value = {settings.buildingProgression} onChange = {(e) => update("buildingProgression", e.target.value)}>
                    <option value = "vanilla">Vanilla</option>
                    <option value = "progressive">Progressive</option>
                </select>
            </label>

            <label>
                Elevator Progression:
                <select value = {settings.elevatorProgression} onChange = {(e) => update("elevatorProgression", e.target.value)}>
                    <option value = "vanilla">Vanilla</option>
                    <option value = "progressive">Progressive</option>
                </select>
            </label>

            <label>
                Skill Progression:
                <select value = {settings.skillProgression} onChange = {(e) => update("skillProgression", e.target.value)}>
                    <option value="vanilla">Vanilla</option>
                    <option value="progressive">Progressive</option>
                    <option value="progressiveMaster">Progressive With Masteries</option>
                </select>
            </label>

            <label>
                Tool Progression:
                <select value = {settings.toolProgression} onChange = {(e) => update("toolProgression", e.target.value)}>
                    <option value = "vanilla">Vanilla</option>
                    <option value = "progressive">Progressive</option>
                </select>
            </label>


            <label><strong>Extra Shuffling</strong></label>

            <label>
                Arcade:
                <select value = {settings.arcade} onChange = {(e) => update("arcade", e.target.value)}>
                    <option value="disabled">Disabled</option>
                    <option value="arcadeVictories">Arcade Victories</option>
                    <option value="fullShuffling">Full Shuffling</option>
                </select>
            </label>

            <label>
                Booksanity:
                <select value = {settings.bookSanity} onChange = {(e) => update("bookSanity", e.target.value)}>
                    <option value="none">None</option>
                    <option value="power">Power</option>
                    <option value="powerSkill">Power Skill</option>
                    <option value="all">All</option>
                </select>
            </label>

            <label>
                Chefsanity:
                <label><input type="checkbox" checked={chefCategory.friendship} onChange={() => toggleChefCategory("friendship")} /> Friendship</label>
                <label><input type="checkbox" checked={chefCategory.purchase} onChange={() => toggleChefCategory("purchase")} /> Purchase</label>
                <label><input type="checkbox" checked={chefCategory.queenOfSauce} onChange={() => toggleChefCategory("queenOfSauce")} /> Queen of Sauce</label>
                <label><input type="checkbox" checked={chefCategory.skills} onChange={() => toggleChefCategory("skills")} /> Skills</label>
            </label>

            <label>
                Festival Locations:
                <select value = {settings.festivalLocations} onChange = {(e) => update("festivalLocations", e.target.value)}>
                    <option value="none">Disabled</option>
                    <option value="easy">Easy</option>
                    <option value = "hard">Hard</option>
                </select>
            </label>

            <label>
                Fishsanity:
                <select value = {settings.fishsanity} onChange = {(e) => update("fishsanity", e.target.value)}>
                    <option value="none">None</option>
                    <option value="legendaries">Legendaries</option>
                    <option value = "all">All</option>
                    <option value = "excludeLegendaries">Exclude Legendaries</option>
                    <option value = "excludeHardFish">Exclude Hard Fish</option>
                    <option value = "onlyEasyFish">Only Easy Fish</option>
                </select>
            </label>

            <label>
                Friendsanity:
                <select value = {settings.friendsanity} onChange = {(e) => update("friendsanity", e.target.value)}>
                    <option value="none">None</option>
                    <option value="bachelors">Bachelors</option>
                    <option value = "startingNpcs">Starting Npcs</option>
                    <option value = "all">All</option>
                    <option value = "allWithMarriage">All With Marriage</option>
                </select>
            </label>

            <label>
                Monstersanity:
                <select value = {settings.monstersanity} onChange = {(e) => update("monstersanity", e.target.value)}>
                    <option value="none">None</option>
                    <option value="onePerCategory">One Per Category</option>
                    <option value = "onePerMonster">One Per Monster</option>
                    <option value = "goals">Goals</option>
                    <option value = "progressiveGoals">Progressive Goals</option>
                    <option value = "splitGoals">Split Goals</option>
                </select>
            </label>

            <label>
                Moviesanity:
                <select value = {settings.movieSanity} onChange = {(e) => update("movieSanity", e.target.value)}>
                    <option value = "none">None</option>
                    <option value = "oneMovie">One Movie</option>
                    <option value = "allMovies">All Movies</option>
                    <option value = "allMoviesAndAllSnacks">All Movies And All Snacks</option>
                </select>
            </label>

            <label>
                Museamsity:
                <select value = {settings.museamsity} onChange = {(e) => update("museamsity", e.target.value)}>
                    <option value="none">None</option>
                    <option value="milestones">Milestones</option>
                    <option value="all">All</option>
                </select>
            </label>

            <label>
                Quest Locations:
                <select value = {settings.quests} onChange = {(e) => update("quests", e.target.value)}>
                    <option value="none">None</option>
                    <option value="story">Story</option>
                    <option value="minimum">Minimum (7)</option>
                    <option value="normal">Normal (14)</option>
                    <option value="lots">Lots (28)</option>
                    <option value="maximum">Maximum (56)</option>
                </select>
            </label>

            <label>
                Special Order Locations:
                <select value = {settings.specialOrders} onChange = {(e) => update("specialOrders", e.target.value)}>
                    <option value="vanilla">Vanilla</option>
                    <option value="board">Board</option>
                    <option value="boardQi">Board Qi</option>
                </select>
            </label>

            <label>Walnutsanity:</label>
                <label>Bushes <input type="checkbox" checked={walnutType.bush} onChange={() => toggleWalnut("bush")} /></label>
                <label>Dig Spots <input type="checkbox" checked={walnutType.digSpot} onChange={() => toggleWalnut("digSpot")} /></label>
                <label>Puzzles <input type="checkbox" checked={walnutType.puzzle} onChange={() => toggleWalnut("puzzle")} /></label>
                <label>Repeatables <input type="checkbox" checked={walnutType.repeatable} onChange={() => toggleWalnut("repeatable")} /></label>


            <label><strong>Extreme Options</strong></label>

            <label>
                Cooksanity:
                <select value = {settings.cooksanity} onChange = {(e) => update("cooksanity", e.target.value)}>
                    <option value = "none">None</option>
                    <option value = "queenOfSauce">Queen of Sauce</option>
                    <option value = "all">All</option>
                </select>
            </label>

            <label>
                Craftsanity:
                <select value = {settings.craftsanity} onChange = {(e) => update("craftsanity", e.target.value)}>
                    <option value = "none">None</option>
                    <option value = "all">All</option>
                </select>
            </label>

            <label>
                Eatsanity:
                <label>Artisan <input type="checkbox" checked={eatType.artisan} onChange={() => toggleEatType("artisan")} /></label>
                <label>Cooking <input type="checkbox" checked={eatType.cooking} onChange={() => toggleEatType("cooking")} /></label>
                <label>Crops <input type="checkbox" checked={eatType.crop} onChange={() => toggleEatType("crop")} /></label>
                <label>Fish <input type="checkbox" checked={eatType.fish} onChange={() => toggleEatType("fish")} /></label>
                <label>Poisonous <input type="checkbox" checked={isPoison.true} onChange={() => toggleIsPoison("true")} /></label>
                <label>Shop <input type="checkbox" checked={eatType.shop} onChange={() => toggleEatType("shop")} /></label>
            </label>

            <label>Hatsanity:</label>
                <label>Difficult <input type="checkbox" checked={hatType.difficult} onChange={() => toggleHattype("difficult")} /></label>
                <label>Easy <input type="checkbox" checked={hatType.easy} onChange={() => toggleHattype("easy")} /></label>
                <label>Medium <input type="checkbox" checked={hatType.medium} onChange={() => toggleHattype("medium")} /></label>
                <label>Near Perfection <input type="checkbox" checked={hatType.nearPerfection} onChange={() => toggleHattype("nearPerfection")} /></label>
                <label>Post Perfection <input type="checkbox" checked={hatType.postPerfection} onChange={() => toggleHattype("postPerfection")} /></label>
                <label>RNG <input type="checkbox" checked={hatType.rng} onChange={() => toggleHattype("rng")} /> </label>
                <label>Tailoring <input type="checkbox" checked={hatType.tailoring} onChange={() => toggleHattype("tailoring")} /></label>

            <label>
                Include Endgame Locations:
                <select value = {settings.endGame} onChange = {(e) => update("endGame", e.target.value)}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
            </label>

            <label><strong>Secretsanity:</strong></label>
                <label>Difficult <input type="checkbox" checked={secretType.difficult} onChange={() => toggleSecretType("difficult")} /></label>
                <label>Easy <input type="checkbox" checked={secretType.easy} onChange={() => toggleSecretType("easy")} /></label>
                <label>Fishing <input type="checkbox" checked={secretType.fishing} onChange={() => toggleSecretType("fishing")} /></label>
                <label>Note <input type="checkbox" checked={secretType.note} onChange={() => toggleSecretType("note")} /></label>

            <label>
                Shipsanity:
                <select value = {settings.shipsanity} onChange = {(e) => handleShipsanity(e.target.value)}>
                    <option value="none">None</option>
                    <option value="crops">Crops</option>
                    <option value="fish">Fish</option>
                    <option value="cropsAndFish">Crops And Fish</option>
                    <option value="fullShipment">Full Shipment</option>
                    <option value="fullShipmentWithFish">Full Shipment With Fish</option>
                    <option value="everything">Everything</option>
                </select>
            </label> 
        </>
    );
}