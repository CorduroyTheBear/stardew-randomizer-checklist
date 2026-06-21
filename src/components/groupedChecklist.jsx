import { useState } from "react";
import RenderChecklist from "./renderChecklist";

export default function GroupedChecklist ({className, groups, heading, hideCompleted = false, isItemVisible, onToggle})
{
    // Checklist is closed by default
    const [isOpen, setIsOpen] = useState(false);

    // Determine which items are visible
    const visble = (item) => isItemVisible(item) &&  (!hideCompleted || !item.done);

    // Filter out tables with no checks left when hide completed is selected
    const completedVisibleGroups = groups.filter(group => group.data.some(visble));

    // Flatten items to compute progress counts
    const visibleItems = completedVisibleGroups.flatMap(group => group.data.filter(isItemVisible));

    const doneCount = visibleItems.filter(i => i.done).length;
    const totalCount = visibleItems.length;

    if (totalCount === 0) return null;

    // Set up table UI, similar to code in rendderChecklist.jsx
    // Main difference between the two is in "isOpen &&..."

    if (completedVisibleGroups.length === 1)
    {
        return(
            <RenderChecklist
                className = "tableLevel-1"
                data = {completedVisibleGroups[0].data}
                heading = {heading}
                hideCompleted = {hideCompleted}
                onToggle = {(itemID, field) => onToggle(completedVisibleGroups[0].id, itemID, field)}
                isItemVisible = {isItemVisible}
            />
        );
    }

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
                    <div className = "table-grid">
                        {completedVisibleGroups.map(group =>
                        (
                            <RenderChecklist
                                key = {group.id}
                                className = {group.className ?? ""}
                                data = {group.data}
                                heading = {group.heading}
                                hideCompleted = {hideCompleted}
                                onToggle = {(itemID, field) => onToggle(group.id, itemID, field)}
                                isItemVisible = {isItemVisible}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}