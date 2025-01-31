import LeaveTypeList from "./components/LeaveTypeList"
import { LeaveTypeTableTools } from "./components/LeaveTypeTableTools"

const LeaveType = ()=>{
    return <>
    <div className="flex justify-between mb-4">
        <h3>Leave Type</h3>
        <LeaveTypeTableTools/>
    </div>
    <LeaveTypeList/>
    </>
}

export default LeaveType