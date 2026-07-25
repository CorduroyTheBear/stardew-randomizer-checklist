// Renders data into the checklist UI

import ChecklistTable from "./checklistUI";

export default function RenderChecklist({className, data, heading, hideChecksNotFound = false, hideCompleted = false, isItemVisible, onToggle})
{

    // Use item filters if included. If there is no item filters, include all items
    
    const visibleItems = data.filter(item =>
    {
        // Hide completed items if setting is on
        if (hideCompleted && item.done) return false;
        
        // Show only found checks when toggled
        if (hideChecksNotFound && !item.found) return false;
        
        return isItemVisible(item);
    });

    if (visibleItems.length === 0) return null;

    // Set up table UI
    return(
        <ChecklistTable
            className = {className}
            heading = {heading}
            items = {visibleItems}
            onToggle = {onToggle}
        />
    );
}