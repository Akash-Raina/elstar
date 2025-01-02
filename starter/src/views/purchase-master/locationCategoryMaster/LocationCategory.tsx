import LocationCategoryList from "./components/LocationCategoryList"
import { LocationCategoryTableTools } from "./components/LocationCategoryTableTools"

const LocationCategory = ()=>{

    return <>
    <div className="flex justify-between mb-4">
        <h3>Supplier Type</h3>
        <LocationCategoryTableTools/>
    </div>
    <LocationCategoryList/>
</>
}

export default LocationCategory