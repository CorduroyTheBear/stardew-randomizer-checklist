import SettingsList from "./tableSettingsList";
import "./settings.css";

export default function RandomizerSettings({settings, setSettings, onClose})
{
    return(
        <div className = "settings-overlay" onClick = {onClose}>
            <div className= "settings-box" onClick = {(e) => e.stopPropagation()}>
                <h2>Randomizer Settings</h2>

                <SettingsList
                    settings = {settings}
                    setSettings = {setSettings}
                />

                <button className = "close-button" onClick = {onClose}>Close</button>
            </div>
        </div>
    )
}