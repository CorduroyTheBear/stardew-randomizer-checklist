export function filterTables(settings)
{
    const visible = [];

    // --- Always visible --- //
    visible.push("raccoonChecks");


    //if (settings.settingName !== "option vaule") visible.push("table key");

    // Elevator Progression
    if (settings.elevatorProgression !== "vanilla") visible.push("elevatorChecks");

    return visible;
}