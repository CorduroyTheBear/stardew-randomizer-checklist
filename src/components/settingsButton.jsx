export default function SettingsButton({onOpenSettings, settings, setSettings})
{
    return(   
              <button className = "settings-button" onClick = {onOpenSettings}>Settings</button>
          )
}