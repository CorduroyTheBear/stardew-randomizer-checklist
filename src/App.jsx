import {useState} from 'react';
import {filterGroups, filterGroupedTables, filterTables, } from './components/Filters/filterTables';
import {TABLES} from './data/tables'; // import tables
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

  const [settings, setSettings] = useState({
    elevatorProgression: "vanilla",
    bookSanity: "none",
    hideCompleted: false
  });
  
  const [tableData, setTableData] = useState( () => {

      // From TABLES
      const fromTables = Object.fromEntries(Object.entries(TABLES).map(([key, table]) => [key, table.data]));

      // From GROUPED_TABLES
      const fromGroupedTables = Object.fromEntries(Object.values(GROUPED_TABLES).flatMap(table => table.groups.map(group => [group.id, group.data])));

      return { ...fromTables, ...fromGroupedTables};
    });
  
    const handleToggle = (tableKey, itemID, field) => {setTableData(prev => ({...prev, [tableKey]: prev[tableKey].map(item => item.id === itemID ? {...item, [field]: !item[field]} : item)}));};
    
    const visibleTableKeys = filterTables(settings);
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


      {Object.entries(TABLES)
        .filter(([key]) => visibleTableKeys.includes(key))
        .map(([key, table]) => (
          <RenderChecklist
            key = {key}
            heading = {table.heading}
            className = {table.className}
            data = {tableData[key]}
            onToggle = {(itemID, field) => handleToggle(key, itemID, field)}
          />
      ))}

      {Object.entries(GROUPED_TABLES)
      .filter(([key]) => visibleGroupedKeys.includes(key))
      .map(([key, table]) =>
      {
          const allowedGroups = filterGroups(key, settings);
          const filteredGroups = allowedGroups
            ? table.groups.filter(group => allowedGroups.includes(group.id))
            : table.groups;

          return(
            <GroupedChecklist
            key = {key}
            heading = {table.heading}
            className = {table.className}
            groups = {filteredGroups.map(group => ({ ...group, data: tableData[group.id] }))}
            onToggle= {(groupID, itemID, field) => handleToggle(groupID, itemID, field)}
          />
          );
      })
    }
  </>
  );
}

export default App
