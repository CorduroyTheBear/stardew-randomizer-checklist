import ResetProgress from "./resetProgress";
import SettingsList from "./tableSettingsList";
import "./settings.css";

export default function RandomizerSettings({settings, setSettings, onClose, onResetProgress, preset, setPreset})
{
    return(
        <div className="settings-overlay" onClick={onClose}>
            <div className="settings-box" onClick={(e) => e.stopPropagation()}>
                <h2>Randomizer Settings</h2>

                <SettingsList
                    settings={settings}
                    setSettings={setSettings}
                    preset={preset}
                    setPreset={setPreset}
                    onResetProgress={onResetProgress}
                />

                <div className="bottomButtons">
                    <ResetProgress onResetProgress={onResetProgress} />
                    <button className="close-button" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}