import {useState} from "react";
import { filterSeasons } from "./Filters/filterSeasons";
import RenderChecklist from "./renderChecklist";

export default function GroupedChecklist ({className, groups, heading, hideCompleted = false, onToggle, season, seasonExclusive})
{
    // Checklist is closed by default
    const [isOpen, setIsOpen] = useState(false);

    // Filter out tables with no checks when a season is selected
    const seasonVisibleGroups = groups.filter(group => group.data.some(item => filterSeasons(item, season, seasonExclusive)));

    // Filter out tables with no checks left when hide completed is selected
    const completedVisibleGroups = seasonVisibleGroups.filter(group => !hideCompleted || group.data.some(item => !item.done));

    // Filter out level 1 tables
    const visibleItems = completedVisibleGroups.flatMap(group => group.data.filter(item => filterSeasons(item, season, seasonExclusive)));

    const doneCount = visibleItems.filter(i => i.done).length;
    const totalCount = visibleItems.length;

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
                                season = {season}
                                seasonExclusive = {seasonExclusive}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}