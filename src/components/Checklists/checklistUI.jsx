import { useState } from "react";

export default function ChecklistTable({className, heading, items, onToggle})
{
    const [isOpen, setIsOpen] = useState(false);

    const doneCount = items.filter(i => i.done).length;
    const totalCount = items.length;

    return(
        <div className = "checklist-section">
            <div className = {`tableLevel-1 ${className}`}>
            <div className="individualTable">

                <div className = "checklist-header" onClick = {() => setIsOpen(!isOpen)}>
                    <div className = "headerName">{heading}</div>

                        <div className = "checklist-progress">
                            {doneCount} / {totalCount}
                        </div>

                        <button className = "openCloseButton">
                            {isOpen ? "⮟" : "⮞"}
                        </button>     
                </div>

                {isOpen && (
                    <div className = "openTab">
                        <div className = "listHeader">
                            <span className = "itemName-header"></span>
                            <text>Done</text>
                            <text>Found</text>
                        </div>
                        
                        <div className = "checklist-enableScrolling">
                            {items.map(item => (
                                
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
                        </div>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}