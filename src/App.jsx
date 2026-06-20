import {useState} from 'react';

import { filterGroups, filterGroupedTables } from './components/Filters/filterTables';
import { filterSeasons } from './components/Filters/filterSeasons';
import { filterFishingLocations } from './components/Filters/filterFishingLocations';
import { filterGingerIslandChecks } from './components/Filters/filterGIChecks';
import { filterWalnutType } from './components/Filters/filterWalnutType';
import {GROUPED_TABLES} from './data/groupedTables';

import GroupedChecklist from './components/groupedChecklist';
import image from './components/images';
import RenderChecklist from './components/renderChecklist';
import RandomizerSettings from './components/TableSettings/randomizerSettings';

import './App.css';
import './components/renderChecklist.css';
import './data/tables.css';


function App()
{

  // Pulls data
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [season, setSeason] = useState("all");
  const [fishingLocation, setFishingLocation] = useState("any");
  const [seasonExclusive, setSeasonExclusive] = useState(false);
  const [isGI, setIsGingerIsland] = useState("No");

  // Default Settings
  const [settings, setSettings] = useState({
    arcade: "disabled",
    backpack: "vanilla",
    buildingProgression: "vanilla",
    cooksanity: "none",
    cropsanity: "disabled",
    elevatorProgression: "vanilla",
    endGame: "no",
    festivalLocations: "none",
    fishsanity: "none",
    friendsanity: "none",
    gingerIsland: "yes",
    bookSanity: "none",
    monstersanity: "none",
    movieSanity: "none",
    museamsity: "none",
    quests: "none",
    skillProgression: "vanilla",
    specialOrders: "vanilla",
    toolProgression: "vanilla",
    hideCompleted: false
  });

  // Default checkbox settings
  const [walnutType, setWalnutType] = useState({
    bush: false,
    digSpot: false,
    puzzle: false,
    repeatable: false
  });
  
  const [tableData, setTableData] = useState( () =>
    {  
      const fromGroupedTables = Object.fromEntries(Object.values(GROUPED_TABLES).flatMap(table => table.groups.map(group => [group.id, group.data])));
      return {...fromGroupedTables};
    });
  
    const handleToggle = (tableKey, itemID, field) => {setTableData(prev => ({...prev, [tableKey]: prev[tableKey].map(item => item.id === itemID ? {...item, [field]: !item[field]} : item)}));};
    
    const visibleGroupedKeys = filterGroupedTables(settings);

    // Debug
    console.log(image.background);

  return(

    <div style =
        {{
          backgroundImage: `url(${image.background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          opacity: "80%"
        }}
       >
        
        <h1>Stardew Valley Checklist</h1>

        <div className = "top-bar">
            <div className = "top-bar-buttons">
              
              <button className = "settings-button" onClick = {() => setSettingsOpen(true)}>
                ⚙ Settings
              </button>

              <label>
                Season:
                <select value = {season} onChange = {(e) => setSeason(e.target.value)}>
                  <option value = "all">All</option>
                  <option value = "spring">Spring</option>
                  <option value = "summer">Summer</option>
                  <option value = "fall">Fall</option>
                  <option value = "winter">Winter</option>
                </select>
              </label>

              <label>
                Exclusive to Season?
                <input
                  type = "checkbox"
                  checked = {seasonExclusive}
                  onChange = {(e) => setSeasonExclusive(e.target.checked)}
                  />
              </label>

              <label>
                Fishing Location:
                <select value = {fishingLocation} onChange = {(e) => setFishingLocation(e.target.value)}>
                  <option value = "any">Any</option>
                  <option value = "bugLiar">Bug Liar</option>
                  <option value = "desert">Desert</option> 
                  <option value = "forestFarm">Forest Farm</option>
                  <option value = "forestPond">Forest Pond</option>
                  <option value = "forestRiver">Forest River</option>
                  <option value = "forestWaterfall">Forest Waterfall</option>
                  <option value = "gingerIslandRiver">Ginger Island River</option>
                  <option value = "gingerIslandOcean">Ginger Island Ocean</option>
                  <option value = "legend">Legend</option>
                  <option value = "lake">Lake</option>
                  <option value = "mines">Mines</option>
                  <option value = "nightMarket">Night Market</option>
                  <option value = "ocean">Ocean</option>
                  <option value = "pirateCove">Pirate Cove</option> 
                  <option value = "secretWoods">Secret Woods</option>
                  <option value = "sewers">Sewers</option>
                  <option value = "townRiver">Town River</option>
                  <option value = "witchSwamp">Witch Swamp</option>
                </select>
              </label>

              <label>
                Show only GI Checks?:
                <select value = {isGI} onChange = {(e) => setIsGingerIsland(e.target.value)}>
                  <option value = "No">No</option>
                  <option value = "Yes">Yes</option>
                </select>
              </label>

              <label>
                Hide Completed Checks
                <input
                    type = "checkbox"
                    checked = {settings.hideCompleted}
                    onChange = {(e) => setSettings(prev => ({ ...prev, hideCompleted: e.target.checked }))}
                />
              </label>

            </div>
        </div>

        {settingsOpen && (
          <RandomizerSettings
            settings = {settings}
            setSettings = {setSettings}

            // Checkbox settings
            walnutType = {walnutType}
            setWalnutType = {setWalnutType}

            onClose = {() => setSettingsOpen(false)}
          />
        )}

      {Object.entries(GROUPED_TABLES)
        .filter(([key]) => visibleGroupedKeys.includes(key))

        .filter(([key, table]) =>
        {
          const allowedGroups = filterGroups(key, settings);
          const filteredGroups = allowedGroups
            ? table.groups.filter(group => allowedGroups.includes(group.id))
            : table.groups;

            return filteredGroups.some(group => group.data.some(item => 
              filterSeasons(item, season, seasonExclusive) &&
              filterFishingLocations(item, fishingLocation) &&
              filterGingerIslandChecks(item, isGI) &&
              !(settings.gingerIsland === "yes" && item.isGI) &&
              filterWalnutType(item, walnutType)
            ));
        })

        .filter(([key, table]) =>
        {
          if (!settings.hideCompleted) return true;

          const allowedGroups = filterGroups(key, settings);
          const filteredGroups = allowedGroups
            ? table.groups.filter(group => allowedGroups.includes(group.id))
            : table.groups;

            return filteredGroups.some(group => group.data.some(item => !item.done &&
              filterSeasons(item, season, seasonExclusive) &&
              filterFishingLocations(item, fishingLocation) &&
              filterGingerIslandChecks(item, isGI) &&
              !(settings.gingerIsland === "yes" && item.isGI) &&
              filterWalnutType(item, walnutType)
            ));
        })

        .map(([key, table]) =>
        {
          const allowedGroups = filterGroups(key, settings);
          const filteredGroups = allowedGroups
            ? table.groups.filter(group => allowedGroups.includes(group.id))
            : table.groups;

          const allVisibleGroups = filteredGroups
          .filter(group => group.data.some(item =>
            filterSeasons(item, season, seasonExclusive) &&
            filterFishingLocations(item, fishingLocation) &&
            filterGingerIslandChecks(item, isGI) &&
            !(settings.gingerIsland === "yes" && item.isGI) &&
            filterWalnutType(item, walnutType)
          ))

          .filter(group => !settings.hideCompleted || group.data.some(item =>!item.done &&
            filterSeasons(item, season, seasonExclusive) &&
            filterFishingLocations(item, fishingLocation) &&
            filterGingerIslandChecks(item, isGI) &&
            !(settings.gingerIsland === "yes" && item.isGI) &&
            filterWalnutType(item, walnutType)
          ));

          // Handle styles based on # of tables
          const headingClass = allVisibleGroups.length === 1 ? "tableLevel-2_Heading" : "tableLevel-2_Heading";
          const groupClass = allVisibleGroups.length === 1 ? "tableLevel-1" : "tableLevel-2_Tables";

          return(
            <GroupedChecklist
            key = {key}
            heading = {table.heading}
            className = {headingClass}
            groups = {filteredGroups.map(group => ({ ...group, data: tableData[group.id], className: groupClass }))}
            onToggle = {(groupID, itemID, field) => handleToggle(groupID, itemID, field)}
            season = {season}
            seasonExclusive = {seasonExclusive}
            fishingLocation = {fishingLocation}
            isGI = {isGI}
            excludeGI = {settings.gingerIsland}
            hideCompleted = {settings.hideCompleted}

            // Checkbox filters
            walnutType = {walnutType}
          />
          );
        })
      }
    </div>
  );
}

export default App
