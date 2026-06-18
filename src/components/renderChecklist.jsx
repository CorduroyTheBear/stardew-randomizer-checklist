// Renders data into the checklist UI

import { useState } from "react";

import { filterSeasons } from './Filters/filterSeasons';
import { filterFishingLocations } from "./Filters/filterFishingLocations";
import { filterGingerIslandChecks } from "./Filters/filterGIChecks";

export default function RenderChecklist({className, data, fishingLocation = "any", heading, hideCompleted = false, isGI = "No", onToggle, season = "all", seasonExclusive = false})
{
    // Set table default setting to closed
    const [isOpen, setIsOpen] = useState(false);

    // Use item filters if included. If there is no item filters, include all items
    //const progressItems = itemFilter ? items.filter(itemFilter) : items;
    
    const visibleItems = data.filter(item =>
    {
        // Hide completed items if setting is on
        if (hideCompleted && item.done) return false;

        // Filters
        if (!filterSeasons(item, season, seasonExclusive)) return false;
        if (!filterFishingLocations(item, fishingLocation)) return false;
        if (!filterGingerIslandChecks(item, isGI)) return false;
        
        else
        {
            return true;
        }
    });

    // Keeps items marked as done and calculates its length
    const doneCount = visibleItems.filter(i => i.done).length;

    // Calculates the total number of items
    const totalCount = visibleItems.length;

    // Set up table UI
    return(
        <div className = "checklist-section">
            <div className = {`checklist-box ${className}`}>
                
                <div className= "checklist-header" onClick = {() => setIsOpen(!isOpen)}>
                    <h3>{heading}</h3>

                    <span className = "checklist-progress">
                        {doneCount}/{totalCount}
                    </span>

                    <button className = "openCloseButton">
                        {isOpen ? "▼" : "▶"}
                    </button>
                </div>

                {isOpen &&
                (
                    <div className = "checklist-enableScrolling">
                        <div className= "checklist-columns">
                            <span className = "itemName-header"></span>
                            <span className = "columnName">Done</span>
                            <span className = "columnName">Unlocked</span>
                        </div>

                        <ul className = "checklist-items">
                        
                            {visibleItems.map(item => 
                            (
                                <li key = {item.id} className = "checklist-row">
                                    <span className = "item-name">{item.name}</span>

                                    <input
                                        type = "checkbox"
                                        checked = {item.done || false}
                                        onChange = {() => onToggle(item.id, "done")}
                                    />

                                    <input
                                        type = "checkbox"
                                        checked = {item.found || false}
                                        onChange = {() => onToggle(item.id, "found")}
                                    />
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}