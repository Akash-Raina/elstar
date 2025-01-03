import LocationMasterList from "./components/LocationMasterList"
import { LocationMasterTableTools } from "./components/LocationMasterTableTools"

const LocationMaster = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Location Master</h3>
        <LocationMasterTableTools/>
    </div>
    <LocationMasterList/>
</>
}

export default LocationMaster