import DistrictList from "@/views/purchase-master/districtMaster/components/DistrictList"
import { DistrictMasterTableTools } from "./components/DistrictMasterTableTools"

const DistrictMaster = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>District Master</h3>
        <DistrictMasterTableTools/>
    </div>
    <DistrictList/>
    </>
}

export default DistrictMaster