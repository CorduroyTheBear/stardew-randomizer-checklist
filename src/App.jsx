import { useState } from 'react';
import {TABLES} from './data/tables'; // import tables
import RenderChecklist from './renderChecklist';

import './App.css';
import './renderChecklist.css';
import './data/tables.css';

function App()
{
  // Pulls data from TABLES
  const [tableData, setTableData] = useState(Object.fromEntries(Object.entries(TABLES).map(([key, table]) => [key, table.data])));

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
    </>
  );
}

export default App
