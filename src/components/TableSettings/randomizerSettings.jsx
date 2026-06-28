import SettingsList from "./tableSettingsList";
//import { Presets } from "./presets";
import "./settings.css";

export default function RandomizerSettings({settings, setSettings, onClose, preset, setPreset})
{
    return(
        <div className = "settings-overlay" onClick = {onClose}>
            <div className= "settings-box" onClick = {(e) => e.stopPropagation()}>
                <h2>Randomizer Settings</h2>

                <SettingsList
                    settings = {settings}
                    setSettings = {setSettings}
                    preset = {preset}
                    setPreset = {setPreset}
                />

                <button className = "close-button" onClick = {onClose}>Close</button>
            </div>
        </div>
    )
}