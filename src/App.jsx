import {useState} from 'react';

import {filterGroups, filterGroupedTables} from './components/Filters/filterTables';
import { filterSeasons } from './components/Filters/filterSeasons';
import {GROUPED_TABLES} from './data/groupedTables';


import RenderChecklist from './components/renderChecklist';
import GroupedChecklist from './components/groupedChecklist';
import RandomizerSettings from './components/TableSettings/randomizerSettings';

import './App.css';
import './components/renderChecklist.css';
import './data/tables.css';




function App()
{

  // Pulls data
  
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [season, setSeason] = useState("all");
  const [seasonExclusive, setSeasonExclusive] = useState(false);

  // Default Settings
  const [settings, setSettings] = useState({
    arcade: "disabled",
    buildingProgression: "vanilla",
    cropsanity: "disabled",
    elevatorProgression: "vanilla",
    festivalLocations: "none",
    bookSanity: "none",
    movieSanity: "none",
    museamsity: "none",
    skillProgression: "vanilla",
    toolProgression: "vanilla",

    hideCompleted: false
  });
  
  const [tableData, setTableData] = useState( () =>
    {  
      const fromGroupedTables = Object.fromEntries(Object.values(GROUPED_TABLES).flatMap(table => table.groups.map(group => [group.id, group.data])));
      return {...fromGroupedTables};
    });
  
    const handleToggle = (tableKey, itemID, field) => {setTableData(prev => ({...prev, [tableKey]: prev[tableKey].map(item => item.id === itemID ? {...item, [field]: !item[field]} : item)}));};
    
    const visibleGroupedKeys = filterGroupedTables(settings);

  return(
    <>
      <div>
        <h1>Stardew Valley Checklist</h1>

        <div className = "top-bar">
            <div className = "top-bar-buttons">
              
              <button className = "settings-button" onClick = {() => setSettingsOpen(true)}>
                ⚙ Settings
              </button>

              <label>
                Seasons:
                <select value = {season} onChange = {(e) => setSeason(e.target.value)}>
                  <option value = "all">All Seasons</option>
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
            onClose = {() => setSettingsOpen(false)}
          />
        )}

      </div>

      {Object.entries(GROUPED_TABLES)
      .filter(([key]) => visibleGroupedKeys.includes(key))

      .filter(([key, table]) =>
      {
        const allowedGroups = filterGroups(key, settings);
        const filteredGroups = allowedGroups
          ? table.groups.filter(group => allowedGroups.includes(group.id))
          : table.groups;

          return filteredGroups.some(group => group.data.some(item => filterSeasons(item, season, seasonExclusive)));
      })

      .filter(([key, table]) =>
      {
        if (!settings.hideCompleted) return true;

        const allowedGroups = filterGroups(key, settings);
        const filteredGroups = allowedGroups
          ? table.groups.filter(group => allowedGroups.includes(group.id))
          : table.groups;

        return filteredGroups.some(group => group.data.some(item => !item.done));
      })

      .map(([key, table]) =>
      {
          const allowedGroups = filterGroups(key, settings);
          const filteredGroups = allowedGroups
            ? table.groups.filter(group => allowedGroups.includes(group.id))
            : table.groups;

          const allVisibleGroups = filteredGroups
          .filter(group => group.data.some(item => filterSeasons(item, season, seasonExclusive)))
          .filter(group => !settings.hideCompleted || group.data.some(item => !item.done));

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
            hideCompleted = {settings.hideCompleted}
          />
          );
      })
    }
  </>
  );
}

export default App
