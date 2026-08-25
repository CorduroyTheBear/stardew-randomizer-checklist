import { useState, useEffect } from "react";

export function FirstVisitPopup()
{
    const [show, setShow] = useState(false);

    useEffect
    (
        () =>
        {
            const seen = localStorage.getItem("hasVisited");
            if (!seen)
            {
                setShow(true);
                localStorage.setItem("hasVisited", "true");
            }
        }, []);

        if (!show) return null;

        return(
            <div className="popup-overlay">
                <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                    
                    <div className = "heading">
                        <div className = "welcome-h1">Welcome to the Stardew Valley Checklist Website Version 1.01!</div>
                        <div className = "welcome-h2">Created by Corduroy</div>
                    </div>

                    <div className = "paragraph-box">
                        <div className = "welcome-p1">
                        
                            <div className = "welcome-line">This checklist is made to assist players with keeping track of Archipelago Randomizer checks and vanilla perfection tasks.</div>

                            <div className = "welcome-line">The checklist will adjust itself based on the settings.</div>

                            <div className = "welcome-line">I added an additional Vanilla Perfection preset for players wanting to achieve perfection in vanilla gameplay. This was a last minute addition, and I plan to improve it in the next update.</div>

                            <div className = "welcome-line">If an Archipelago setting is not listed, it's because it doesn't affect the checklist.</div>
                        </div>
                    </div>

                    <div className = "paragraph-box">
                        <div className = "welcome-h3">A Note About Progression Settings</div>
                        <div className = "welcome-line2">When multiple progression options result in the same checklist, they're combined into a single option. If different progression types generate different checks (such as Skill Progression and Skill Progression with Masteries), each option is listed separately.</div>
                    </div>

                    <div className = "paragraph-box">
                        <div className = "welcome-h3">Getting Started</div>
                        <div className = "welcome-p1">
                            <div className = "welcome-line">The bar below the title has filters to narrow down checks.</div>
                            <div className = "welcome-line">Click on a table below to expand it to views checks, or subcategories.</div>
                            <div className = "welcome-line">There are no subcategories within another subcategory, that would be torture.</div>
                        </div>
                    </div>

                    <div className = "welcome-h2">I am finished yapping now. I hope you enjoy using this checklist! : )</div>

                    <button className = "welcome-close" onClick={() => setShow(false)}>Close</button>

                </div>
            </div>
    );
}