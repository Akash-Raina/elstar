import OutDutyList from "./components/OutDutyList"
import { OutDutyTableTools } from "./components/OutDutyTableTools"

const OutDuty = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Out Duty</h3>
        <OutDutyTableTools/>
    </div>
    <OutDutyList/>
    </>
}

export default OutDuty