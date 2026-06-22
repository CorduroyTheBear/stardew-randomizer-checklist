// Lists all the settings
import { useFilters } from "../Filters/filterContext";

export default function SettingsList({settings, setSettings})
{
    const update = (key, value) => setSettings(prev => ({ ...prev, [key]: value}));
    const { filterState, updateFilter } = useFilters();

    // Filters

    const { chefCategory} = filterState;
    const toggleChefCategory = (subkey) => updateFilter("chefCategory", prev => ({...prev, [subkey]: !prev[subkey]}));

    const { excludeBackpack } = filterState;
    const toggleBackpack = (subkey) => updateFilter("excludeBackpack", prev => ({...prev, [subkey]: !prev[subkey]}));
    
    const { walnutType } = filterState;
    const toggleWalnut = (subkey) => updateFilter("walnutType", prev => ({...prev, [subkey]: !prev[subkey]}));


    return(
        <>

            <label>
                Arcade:
                <select value = {settings.arcade} onChange = {(e) => update("arcade", e.target.value)}>
                    <option value="disabled">Disabled</option>
                    <option value="arcadeVictories">Arcade Victories</option>
                    <option value="fullShuffling">Full Shuffling</option>
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

            <label><strong>Start Without Backpack?</strong></label>
                <label><input type="checkbox" checked={excludeBackpack.true} onChange={() => toggleBackpack("true")} /></label>

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
                Building Progression:
                <select value = {settings.buildingProgression} onChange = {(e) => update("buildingProgression", e.target.value)}>
                    <option value = "vanilla">Vanilla</option>
                    <option value = "progressive">Progressive</option>
                </select>
            </label>

            <label>
                Chefsanity?:
                <select value = {settings.chefsanity} onChange = {(e) => update("chefsanity", e.target.value)}>
                    <option value = "no">No</option>
                    <option value = "yes">Yes</option>
                </select>

                <label><input type="checkbox" checked={chefCategory.friendship} onChange={() => toggleChefCategory("friendship")} /> Friendship</label>
                <label><input type="checkbox" checked={chefCategory.purchase} onChange={() => toggleChefCategory("purchase")} /> Purchase</label>
                <label><input type="checkbox" checked={chefCategory.queenOfSauce} onChange={() => toggleChefCategory("queenOfSauce")} /> Queen of Sauce</label>
                <label><input type="checkbox" checked={chefCategory.skills} onChange={() => toggleChefCategory("skills")} /> Skills</label>
            </label>

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
                Cropssanity:
                <select value = {settings.cropsanity} onChange = {(e) => update("cropsanity", e.target.value)}>
                    <option value = "disabled">Disabled</option>
                    <option value = "enabled">Enabled</option>
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
                Include Endgame Locations:

                <select value = {settings.endGame} onChange = {(e) => update("endGame", e.target.value)}>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
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
                    <option value="milestones">Minestones</option>
                    <option value="all">All</option>
                </select>
            </label>

            <label>
                Quest Locations:

                <select value = {settings.quests} onChange = {(e) => update("quests", e.target.value)}>
                    <option value="none">None</option>
                    <option value="story">Story</option>
                    <option value="minimum">Minimum - 7</option>
                    <option value="normal">Normal - 14</option>
                    <option value="lots">Lots - 28</option>
                    <option value="maximum">Maximum - 56</option>
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
                Special Order Locations:

                <select value = {settings.specialOrders} onChange = {(e) => update("specialOrders", e.target.value)}>
                    <option value="vanilla">Vanilla</option>
                    <option value="board">Board</option>
                    <option value="boardQi">Board Qi</option>
                </select>
            </label>

            <label>
                Tool Progression:

                <select value = {settings.toolProgression} onChange = {(e) => update("toolProgression", e.target.value)}>
                    <option value = "vanilla">Vanilla</option>
                    <option value = "progressive">Progressive</option>
                </select>
            </label>

            <label>
                Exclude Ginger Island?:

                <select value = {settings.gingerIsland} onChange = {(e) => update("gingerIsland", e.target.value)}>
                    <option value = "yes">Yes</option>
                    <option value = "no">No</option>
                </select>
            </label>

            <label><strong>Walnutsanity:</strong></label>
                <label><input type="checkbox" checked={walnutType.bush} onChange={() => toggleWalnut("bush")} />Bushes</label>
                <label><input type="checkbox" checked={walnutType.digSpot} onChange={() => toggleWalnut("digSpot")} />Dig Spots</label>
                <label><input type="checkbox" checked={walnutType.puzzle} onChange={() => toggleWalnut("puzzle")} />Puzzles</label>
                <label><input type="checkbox" checked={walnutType.repeatable} onChange={() => toggleWalnut("repeatable")} />Repeatables</label>
        </>
    );
}