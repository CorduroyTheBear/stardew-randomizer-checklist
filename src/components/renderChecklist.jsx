// Renders data into the checklist UI

import { useState } from "react";

export default function ({className, data, heading})
{
    // Set table default setting to closed
    const [isOpen, setIsOpen] = useState(false);

    // Use item filters if included. If there is no item filters, include all items
    const progressItems = itemFilter ? items.filter(itemFilter) : items;

    // Keeps items marked as done and calculates its length
    const doneCount = progressItems.filter(i => i.done).length;

    // Calculates the total number of items
    const totalCount = progressItems.length;

    const visibleItems = progressItems.filter(item =>
    {
        // Hide completed items if setting is on
        if (hideCompleted && item.done) return false;
        
        else
        {
            return true;
        }
    });

    // Set up table UI
    return
    (
        <div className = "checklist-section">
            <div className = {`checklist-box ${className}`}>
                
                <div className= "checklist-header" onClick = {() => setIsOpen(!isOpen)}>
                    <h3>{heading}</h3>

                    <span className = "checklist-progress">
                        {doneCount}/{totalCount}
                    </span>

                    <button className = "toggle-button">
                        {isOpen ? "▼" : "▶"}
                    </button>
                </div>

                {isOpen &&
                (
                    <div className = "checklist-enableScrolling">
                        <div className= "checklist-columns">
                            <span className = "itemName-header"></span>
                            <span className = "columnName">Done</span>
                            <span className = "columnName">Found</span>
                        </div>

                        <ul className = "checklist-items">
                        
                            {visibleItems.map(item => 
                            (
                                <li key = {item.id} className = "checklist-row">
                                    <span className = "item-name">{item.Name}</span>

                                    <input
                                        type = "checkbox"
                                        checked = {item.found || false}
                                        onChange = {() => ontoggle(item.id, "found")}
                                        className = "check-column"
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