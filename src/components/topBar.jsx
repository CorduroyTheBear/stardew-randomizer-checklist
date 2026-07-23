import { useFilters } from "./Filters/filterContext";

export default function TopBar({settings, setSettings})
{
    const { filterState, updateFilter } = useFilters();
    const { season, fishingLocation, isGI } = filterState;

    return(  
            <div className = "top-bar">
                            
              <label>Season:
                <select value = {season.season} onChange = {(e) => updateFilter("season", prev => ({ ...prev, season: e.target.value}))}>
                  <option value = "all">All</option>
                  <option value = "spring">Spring</option>
                  <option value = "summer">Summer</option>
                  <option value = "fall">Fall</option>
                  <option value = "winter">Winter</option>
                </select>
              </label>

              <label>Exclusive to Season?</label>
              <input type = "checkbox" checked = {season.seasonExclusive} onChange = {(e) => updateFilter("season", prev => ({ ...prev, seasonExclusive: e.target.checked }))}/>
              
              <label>Fishing Location:
                <select value = {fishingLocation} onChange={(e) => updateFilter("fishingLocation", e.target.value)}>
                  <option value = "any">Any</option>
                  <option value = "bugLiar">Bug Liar</option>
                  <option value = "desert">Desert</option> 
                  <option value = "forestFarm">Forest Farm</option>
                  <option value = "forestPond">Forest Pond</option>
                  <option value = "forestRiver">Forest River</option>
                  <option value = "forestWaterfall">Forest Waterfall</option>
                  <option value = "gingerIslandRiver">Ginger Island River</option>
                  <option value = "gingerIslandOcean">Ginger Island Ocean</option>
                  <option value = "legend">Legend</option>
                  <option value = "lake">Lake</option>
                  <option value = "mines">Mines</option>
                  <option value = "nightMarket">Night Market</option>
                  <option value = "ocean">Ocean</option>
                  <option value = "pirateCove">Pirate Cove</option> 
                  <option value = "secretWoods">Secret Woods</option>
                  <option value = "sewers">Sewers</option>
                  <option value = "townRiver">Town River</option>
                  <option value = "witchSwamp">Witch Swamp</option>
                </select>
              </label>

              
              <label>Show only GI Checks?:
                <select value = {isGI} onChange={(e) => updateFilter("isGI", e.target.value)}>
                  <option value = "No">No</option>
                  <option value = "Yes">Yes</option>
                </select>
              </label>
              
              <label>Hide Completed Checks
                <input type = "checkbox" checked = {settings.hideCompleted} onChange = {(e) => setSettings(prev => ({ ...prev, hideCompleted: e.target.checked }))}/>
              </label>
            </div>
    )
}