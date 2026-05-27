import { useState } from 'react';
import {TABLES} from './data/tables'; // import tables
import RenderChecklist from './components/renderChecklist';
import GroupedChecklist from './components/groupedChecklist';

import './App.css';
import './components/renderChecklist.css';
import './data/tables.css';
import { GROUPED_TABLES } from './data/groupedTables';

function App()
{
  // Pulls data
    const [tableData, setTableData] = useState( () => {

      // From TABLES
      const fromTables = Object.fromEntries(Object.entries(TABLES).map(([key, table]) => [key, table.data]));

      // From GROUPED_TABLES
      const fromGroupedTables = Object.fromEntries(Object.values(GROUPED_TABLES).flatMap(table => table.groups.map(group => [group.id, group.data])));

      return { ...fromTables, ...fromGroupedTables};
    });
  
  

  const handleToggle = (tableKey, itemID, field) =>
    {setTableData(prev => ({...prev, [tableKey]: prev[tableKey].map(item => item.id === itemID ? {...item, [field]: !item[field]} : item)}));};

  return(
    <>
      {Object.entries(TABLES).map(([key, table]) => (
        <RenderChecklist
          key = {key}
          heading = {table.heading}
          className = {table.className}
          data = {tableData[key]}
          onToggle = {(itemID, field) => handleToggle(key, itemID, field)}
        />
      ))}

      {Object.entries(GROUPED_TABLES).map(([key, table]) => (
        <GroupedChecklist
          key = {key}
          heading = {table.heading}
          className = {table.className}
          groups = {table.groups.map(group => ({ ...group, data: tableData[group.id]}))}
          onToggle= {(groupID, itemID, field) => handleToggle(groupID, itemID, field)}
        />
      ))}

    </>
  );
}

export default App
