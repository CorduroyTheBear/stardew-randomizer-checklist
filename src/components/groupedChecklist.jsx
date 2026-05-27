import {useState} from "react";
import RenderChecklist from "./renderChecklist";

export default function GroupedChecklist ({className, groups, heading, hideCompleted = false, onToggle})
{
    // Checklist is closed by default
    const [isOpen, setIsOpen] = useState(false);

    // Calulate total number of checks within the group
    const groupItems = groups.flatMap(group => group.data);

    const doneCount = groupItems.filter(i => i.done).length;
    const totalCount = groupItems.length;


    // Set up table UI, similar to code in rendderChecklist.jsx
    // Main difference between the two is in "isOpen &&..."

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
                        {groups.map(group =>
                        (
                            <RenderChecklist
                                key = {group.id}
                                className = {group.className ?? ""}
                                data = {group.data}
                                heading = {group.heading}
                                hideCompleted = {hideCompleted}
                                onToggle = {(itemID, field) => onToggle(group.id, itemID, field)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}