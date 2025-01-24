import HolidayMasterList from "./components/HolidayMasterList"
import { HolidayMasterTableTools } from "./components/HolidayMasterTableTools"

const HolidayMaster = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Holiday Master</h3>
        <HolidayMasterTableTools/>
    </div>
    <HolidayMasterList/>
    </>
}

export default HolidayMaster