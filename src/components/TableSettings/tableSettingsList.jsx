// Lists all the settings

export default function SettingsList({settings, setSettings, })
{
    const update = (key, value) => setSettings(prev => ({ ...prev, [key]: value}));

    return(
        <>

            <label>
                Booksanity:
                <select value = {settings.bookSanity} onChange = {(e) => update("bookSanity", e.target.value)}>
                    <option value="none">None</option>
                    <option value="power">Power</option>
                    <option value="powerSkill">Power Skill</option>
                    <option value="all">All</option>
                </select>
            </label>

            <label>
                Elevator Progression:

                <select value = {settings.elevatorProgression} onChange = {(e) => update("elevatorProgression", e.target.value)}>
                    <option value = "vanilla">Vanilla</option>
                    <option value = "progressive">Progressive</option>
                </select>
            </label>

            <label>
                Moviesanity:

                <select value = {settings.movieSanity} onChange = {(e) => update("movieSanity", e.target.value)}>
                    <option value = "none">None</option>
                    <option value = "oneMovie">One Movie</option>
                    <option value = "allMovies">All Movies</option>
                    <option value = "allMoviesAndAllSnacks">All Movies And All Snacks</option>
                </select>
            </label>


            <label className = "checkbox-setting">
                <input
                    type = "checkbox"
                    checked = {settings.hideCompleted}
                    onChange = {(e) => update("hideCompleted", e.target.checked)}
                />
                Hide Completed Checks
            </label>
        </>
    );
}



// Filter setting to add later
/*

    <label><strong>Walnutsanity:</strong></label>

      <label>
        <input type="checkbox" checked={walnutType.bush} onChange={() => setWalnutType(prev => ({ ...prev, bush: !prev.bush }))} />
        Bushes
      </label>

      <label>
        <input type="checkbox" checked={walnutType.digSpot} onChange={() => setWalnutType(prev => ({ ...prev, digSpot: !prev.digSpot }))} />
        Dig Spots
      </label>

      <label>
        <input type="checkbox" checked={walnutType.puzzle} onChange={() => setWalnutType(prev => ({ ...prev, puzzle: !prev.puzzle }))} />
        Puzzles
      </label>

      <label>
        <input type="checkbox" checked={walnutType.repeatable} onChange={() => setWalnutType(prev => ({ ...prev, repeatable: !prev.repeatable }))} />
        Repeatables
      </label>

*/