import {useState} from 'react';

import { filterGroups, filterGroupedTables } from './components/Filters/filterTables';
import { passItemFilters } from './components/Filters/filtersList';
import { FilterProvider, useFilters} from './components/Filters/filterContext';
import {GROUPED_TABLES} from './data/groupedTables';

import GroupedChecklist from './components/groupedChecklist';
import image from './components/images';
import RenderChecklist from './components/renderChecklist';
import RandomizerSettings from './components/TableSettings/randomizerSettings';
import TopBar from './components/topBar';

import './App.css';
import './components/renderChecklist.css';
import './data/tables.css';


function InnerApp()
{

  const {filterState} = useFilters();

  // Pulls data
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Default Settings
  const [settings, setSettings] = useState({
    arcade: "disabled",
    backpack: "vanilla",
    buildingProgression: "vanilla",
    chefsanity: "none",
    cooksanity: "none",
    craftsanity: "none",
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

  const [tableData, setTableData] = useState( () =>
    {  
      const fromGroupedTables = Object.fromEntries(Object.values(GROUPED_TABLES).flatMap(table => table.groups.map(group => [group.id, group.data])));
      return {...fromGroupedTables};
    });
  
    const handleToggle = (tableKey, itemID, field) => {setTableData(prev => ({...prev, [tableKey]: prev[tableKey].map(item => item.id === itemID ? {...item, [field]: !item[field]} : item)}));};
    
    const visibleGroupedKeys = filterGroupedTables(settings);

    // Handles all filters
    const visible = (item) => passItemFilters(item, filterState, settings)
    && (!settings.hideCompleted || !item.done)

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

        <TopBar
          settings = {settings}
          setSettings = {setSettings}
          onOpenSettings = {() => setSettingsOpen(true)}
        />

        {settingsOpen && (
          <RandomizerSettings
            settings = {settings}
            setSettings = {setSettings}
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

            return filteredGroups.some(group => group.data.some(visible));
        })

        .map(([key, table]) =>
        {
          const allowedGroups = filterGroups(key, settings);
          const filteredGroups = allowedGroups
            ? table.groups.filter(group => allowedGroups.includes(group.id))
            : table.groups;

          const allVisibleGroups = filteredGroups
          .filter(group => group.data.some(visible));

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
            excludeGI = {settings.gingerIsland}
            hideCompleted = {settings.hideCompleted}
            isItemVisible = {visible}
          />
          );
        })



      }
    </div>
  );
}

export default function OutsideApp()
{
  return(
    <FilterProvider>
      <InnerApp/>
    </FilterProvider>
  );
}
