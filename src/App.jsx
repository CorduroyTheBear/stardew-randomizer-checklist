import {useEffect, useState} from 'react';

import { filterGroups, filterGroupedTables } from './components/Filters/filterTables';
import { passItemFilters } from './components/Filters/filtersList';
import { FilterProvider, useFilters} from './components/Filters/filterContext';
import { GROUPED_TABLES } from './data/groupedTables';

import GroupedChecklist from './components/groupedChecklist';
import image from './components/images';
import RenderChecklist from './components/renderChecklist';
import RandomizerSettings from './components/TableSettings/randomizerSettings';
import SearchBar from './components/searchBar';
import TopBar from './components/topBar';

import './App.css';
import './components/renderChecklist.css';
import './data/tables.css';
import { Presets } from './components/TableSettings/presets';



function InnerApp()
{
  const {filterState} = useFilters();

  // Pulls data
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Default Settings
  const [preset, setPreset] = useState
  (
    () =>
    {
      try{return localStorage.getItem("preset") ?? "selectNothing"}
      catch{return "selectNothing";}
    }
  );

  const [settings, setSettings] = useState
  (
    () =>
    {
      try
      {
        const saved = localStorage.getItem("settings");
        return saved ? { ...Presets.selectNothing.settings, ...JSON.parse(saved)} : Presets.selectNothing.settings;
      }

      catch {return Presets.selectNothing.settings;}
    }
  );

  const [tableData, setTableData] = useState
  (
    () =>
    {  
      const fresh = Object.fromEntries
      (
        Object.values(GROUPED_TABLES).flatMap
        (
          table => table.groups.map(group => [group.id, group.data])
        )
      );

      try
      {
        const saved = localStorage.getItem("tableData");
        if (saved)
        {
          const parsed = JSON.parse(saved);
          return Object.fromEntries
          (
            Object.entries(fresh).map(([groupID, freshItems]) =>
            {
              const savedGroup = parsed[groupID] ?? [];
              return [groupID, freshItems.map
              (
                freshItem =>
                {
                  const savedItem = savedGroup.find(s => s.id === freshItem.id);
                  return savedItem
                  ? {...freshItem, done: savedItem.done, found: savedItem.found}
                  : freshItem;
                }
              )];
            })
          );
        }
      }

      catch{}
      return fresh;
    }
  );

  useEffect(
    () =>
    {
      try {localStorage.setItem("settings", JSON.stringify(settings));}
      catch (e) {console.warn("Failed to save settings", e)}
    },

    [settings]
  );

  useEffect
  (
    () =>
    {
      try {localStorage.setItem("preset", preset);}
      catch (e) {console.warn("Failed to save preset", e);}
    },
    [preset]
  );

  useEffect
  (
    () =>
    {
      try {localStorage.setItem("tableData", JSON.stringify(tableData));}
      catch (e) {console.warn("Failed to save tableData", e);}
    },
    [tableData]
  );
  
  const handleToggle = (tableKey, itemID, field) => {setTableData(prev => ({...prev, [tableKey]: prev[tableKey].map(item => item.id === itemID ? {...item, [field]: !item[field]} : item)}));};
    
  const visibleGroupedKeys = filterGroupedTables(filterState, settings);

  // Handles all filters
  const visible = (item) => passItemFilters(item, filterState, settings)
    && (!settings.hideCompleted || !item.done)

  const settingsItems = Object.entries(GROUPED_TABLES)
    .filter(([key]) => visibleGroupedKeys.includes(key))
      
    .flatMap(([key, table]) =>
    {
      const allowedGroups = filterGroups(key, settings);
      const filteredGroups = allowedGroups
        ? table.groups.filter(group => allowedGroups.includes(group.id))
        : table.groups;
        
        return filteredGroups.flatMap
        (
          group =>
          (
            tableData[group.id] ?? []).filter(item =>
            passItemFilters(item,
            {
              ...filterState,
              season: {season: "all", seasonExclusive: false},
              fishingLocation: "any",
              isGI: "No",
              search: "",
            },
            settings
          )
        )
      )
    });

  const doneCount = settingsItems.filter(i => i.done).length;
  const totalCount = settingsItems.length;

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

          doneCount = {doneCount}
          totalCount = {totalCount}
        />

        <SearchBar></SearchBar>

        {settingsOpen && (
          <RandomizerSettings
            settings = {settings}
            setSettings = {setSettings}
            preset = {preset}
            setPreset = {setPreset}
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

          const slicedGroups = filteredGroups.map(group =>
          {
            if (key === "travelingMerchant") { return {...group, data: group.data.slice(0, settings.travelingMerchantCount)}; }
            return group;
          });
          
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
            
            groups =
            {slicedGroups.map(group => ({ 
              ...group, 
              data: key === "travelingMerchant" 
              ? tableData[group.id]?.slice(0, settings.travelingMerchantCount) ?? []
              : tableData[group.id] ?? [],
              className: groupClass 
            }))}

            onToggle = {(groupID, itemID, field) => handleToggle(groupID, itemID, field)}
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
