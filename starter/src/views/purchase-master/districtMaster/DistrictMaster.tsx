import DistrictList from "./components/DistrictList";
import { DistrictTableTools } from "./components/DistrictTableTools";

const DistrictMaster = ()=>{

    return <>
        <div className="flex justify-between mb-4">
            <h3>District Master</h3>
            <DistrictTableTools/>
        </div>
        <DistrictList/>
    </>
}

export default DistrictMaster;