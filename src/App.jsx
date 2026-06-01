import {useState} from 'react';
import {filterGroups, filterGroupedTables} from './components/Filters/filterTables';
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

  const [settings, setSettings] = useState({
    arcade: "disabled",
    buildingProgression: "vanilla",
    elevatorProgression: "vanilla",
    festivalLocations: "none",
    bookSanity: "none",
    movieSanity: "none",
    museamsity: "none",
    hideCompleted: false,
    skillProgression: "vanilla",
    toolProgression: "vanilla"
  });
  
  const [tableData, setTableData] = useState( () => {
      // From GROUPED_TABLES
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

              <select value = {season} onChange = {(e) => setSeason(e.target.value)}>
                <option value = "all">All Seasons</option>
                <option value = "spring">Spring</option>
                <option value = "summer">Summer</option>
                <option value = "fall">Fall</option>
                <option value = "winter">Winter</option>
              </select>

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
      .map(([key, table]) =>
      {
          const allowedGroups = filterGroups(key, settings);
          const filteredGroups = allowedGroups
            ? table.groups.filter(group => allowedGroups.includes(group.id))
            : table.groups;

          // Handle styles based on # of tables
          const headingClass = filteredGroups.length === 1 ? "tableLevel-1" : "tableLevel-2_Heading";
          const groupClass = filteredGroups.length === 1 ? "tableLevel-1" : "tableLevel-2_Tables";

          return(
            <GroupedChecklist
            key = {key}
            heading = {table.heading}
            className = {headingClass}
            groups = {filteredGroups.map(group => ({ ...group, data: tableData[group.id], className: groupClass }))}
            onToggle = {(groupID, itemID, field) => handleToggle(groupID, itemID, field)}
            season = {season}
          />
          );
      })
    }
  </>
  );
}

export default App
